'use strict';
const DATA_PATH = 'F:/ServerData/hrms_initial_data';

var fs  = require('fs');
var a01 = require(`${DATA_PATH}/A01`).RECORDS;

// 总数
console.log('Total Count %d', a01.length);

var PClassIDMap = {};
var C0120Map = {}; // 在职状况
var C0134Map = {}; // 调出状况
var C0133Map = {}; // 离职状况
var C0135Map = {}; // 死亡状况

a01.map((data) => {
  if(data.PClassID !== '00001') return;
  // PClassID类型统计
  PClassIDMap[data.PClassID] ? (PClassIDMap[data.PClassID]++) : (PClassIDMap[data.PClassID] = 1);
  // C0120Map
  C0120Map[data.PClassID] || (C0120Map[data.PClassID] = {});
  C0120Map[data.PClassID][data.C0120] ? (C0120Map[data.PClassID][data.C0120]++) : (C0120Map[data.PClassID][data.C0120] = 1);

  // C0134Map
  C0134Map[data.PClassID] || (C0134Map[data.PClassID] = {});
  C0134Map[data.PClassID][data.C0134] ? (C0134Map[data.PClassID][data.C0134]++) : (C0134Map[data.PClassID][data.C0134] = 1);

  // C0133Map
  C0133Map[data.PClassID] || (C0133Map[data.PClassID] = {});
  C0133Map[data.PClassID][data.C0133] ? (C0133Map[data.PClassID][data.C0133]++) : (C0133Map[data.PClassID][data.C0133] = 1);

  // C0135Map
  C0135Map[data.PClassID] || (C0135Map[data.PClassID] = {});
  C0135Map[data.PClassID][data.C0135] ? (C0135Map[data.PClassID][data.C0135]++) : (C0135Map[data.PClassID][data.C0135] = 1);
});
console.log('====PClassIDMap====员工大类====\n%s', JSON.stringify(PClassIDMap, null, 2));
console.log('====C0120Map====在职状况====\n%s', JSON.stringify(C0120Map, null, 2));
console.log('====C0134Map====调出状况====\n%s', JSON.stringify(C0134Map, null, 2));
console.log('====C0133Map====离职状况====\n%s', JSON.stringify(C0133Map, null, 2));
console.log('====C0135Map====死亡状况====\n%s', JSON.stringify(C0135Map, null, 2));

