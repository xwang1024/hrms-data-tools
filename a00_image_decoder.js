'use strict';
const DATA_PATH = 'F:/ServerData/hrms_initial_data';

var fs  = require('fs');
var a00 = require(`${DATA_PATH}/A00.json`).RECORDS;

// 所有Title均为null，所有Sign均为P
a00.map((record) => {
  fs.writeFile(`./out/${record.PersonID}${record.ext}`, record.Data, 'base64', function(err) {
    if(err) console.log(err);
    else    console.log(`${record.PersonID}${record.ext} was saved!`);
  });
});
