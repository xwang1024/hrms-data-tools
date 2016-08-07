'use strict';

var fs  = require('fs');
var a01 = require(`./a01_field.json`);
var colProps = require('./set-prop')[0].columnProps;

console.log(a01.length);

var newA01 = a01.map(function(data) {
  colProps.map(function(colProp) {
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
  data._oldId = data._PersonID;
  delete data._PClassID;
  delete data._PersonID;
  delete data._Disporder;
  delete data._PGuid;
  return data;
});

fs.writeFile('./a01_option.json', JSON.stringify(newA01, null, 2), function(err) {
  if(err) console.log(err);
  else    console.log(`saved!`);
});