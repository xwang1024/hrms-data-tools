var fs = require('fs');

function getFiles (dir, files_){
  files_ = files_ || [];
  var files = fs.readdirSync(dir);
  for (var i in files){
    var name = dir + '/' + files[i];
    if (!fs.statSync(name).isDirectory()){
      files_.push(name);
    }
  }
  return files_;
}

var files = getFiles('F:/ServerData/hrms_initial_data');

files.map((file) => {
  if(file.indexOf('.json') > 0) {
    var buf = fs.readFileSync(file, "utf8");
    buf = 'module.exports = ' + buf;
    fs.writeFile(file.replace('.json', '.js'), buf, function(err) {
      if(err) console.log(err);
      else    console.log(file.replace('.json', '.js'), `saved!`);
    });
  }
});