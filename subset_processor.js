'use strict';

var fs  = require('fs');
var setProps = require('./set-prop');


setProps.map((setProp) => {
  if(setProp.id === 'employee') return;

  var rows = require(`F:/ServerData/hrms_initial_data/${setProp.oldSetId}`).RECORDS;
  var newRows = rows.map(function(row) {
    var data = { _oldId: row.PersonID };
    setProp.columnProps.map(function(colProp) {

      data[colProp.id] = row[colProp.oldItemId];
      

      if(colProp.itemType === 'C' && data[colProp.id]) {
        if(colProp.optionCode === 'M' || colProp.optionCode === 'N') {
          var code;
          if(data[colProp.id].length == 2) {
            code = data[colProp.id];
          } else if(data[colProp.id].length == 4) {
            code = data[colProp.id].slice(0,2) + '-' + data[colProp.id].slice(2,4);
          } else if(data[colProp.id].length == 6) {
            code = data[colProp.id].slice(0,2) + '-' + data[colProp.id].slice(2,4) + '-' + data[colProp.id].slice(4,6);
          } else if(data[colProp.id].length == 7) {
            code = data[colProp.id].slice(0,2) + '-' + data[colProp.id].slice(2,4) + '-' + data[colProp.id].slice(4,7);
          } else if(data[colProp.id].length == 10) {
            code = data[colProp.id].slice(0,2) + '-' + data[colProp.id].slice(2,4)+ '-' + data[colProp.id].slice(4,7)+ '-' + row.CodeItemID.slice(7,10);
          }
          data[colProp.id] = code;
        } else {
          data[colProp.id] = colProp.optionCode + '-' + data[colProp.id];
        }
      }

      if(colProp.itemType === 'D' && data[colProp.id] && data[colProp.id].trim()) {
        data[colProp.id] = data[colProp.id].split(' ')[0];
        var old = data[colProp.id];
        data[colProp.id] = new Date(data[colProp.id]);
        if(isNaN(data[colProp.id].getTime())) {
          console.log('Date Error ===' + old + '===');
          data[colProp.id] = null;
        }
      }
    });
    for(var k in data) {
      if(data[k] === null) {
        delete data[k];
      }
    }
    return data;
  });

  fs.writeFile(`./subset/${setProp.id}.json`, JSON.stringify(newRows, null, 2), function(err) {
    if(err) console.log(err);
    else    console.log(`${setProp.id} saved!`);
  });
});
