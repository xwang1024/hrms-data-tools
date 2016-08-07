'use strict';

var fs  = require('fs');
var a01 = require(`./newA01.json`);

console.log(a01.length);


var newA01 = a01.map(function(data) {
  // 统一婚姻状态、婚否字段
  if(!data.marryStatus && data.isMarried) {
    switch(parseInt(data.isMarried)) {
      case 1:
      data.marryStatus = "2";
      break;
      case 2:
      data.marryStatus = "1";
      break;
      case 3:
      data.marryStatus = "3";
      break;
    }
  }
  delete data.isMarried;
  // =================

  // 生成status，_remove字段
  if(parseInt(data._PClassID) === -1) {
    data._remove = true;
    if(parseInt(data.dieStatus) === 1) {
      // console.log('已删除，死亡', data._PersonID);
      data.status = '10';
    } else if(data.leaveStatus) {
      if(data.leaveStatus === '退休') {
        // console.log('已删除，退休', data._PersonID);
        data.status = "08";
      } else if(data.leaveStatus === '待岗') {
        // console.log('已删除，待岗', data._PersonID);
        data.status = "04";
      } else {
        // console.log('已删除，离职', data._PersonID, data.leaveStatus);
        switch(parseInt(data.leaveStatus)) {
          case 6:
          data.status = "0701";
          break;
          case 7:
          data.status = "0702";
          break;
          case 8:
          data.status = "0703";
          break;
          case 9:
          data.status = "0704";
          break;
          default:
          data.status = "07";
        }
      }
    } else if(parseInt(data.transferStatus) === 1) {
      // console.log('已删除，调出', data._PersonID);
      data.status = '06';
    } else if(data.jobStatus) {
      if(data.jobStatus === '退休') {
        // console.log('已删除，退休', data._PersonID);
        data.status = "08";
      } else {
        // console.log('已删除，在职', data._PersonID);
        switch(parseInt(data.jobStatus)) {
          case 1:
          data.status = "01";
          break;
          case 2:
          data.status = "02";
          break;
          case 3:
          data.status = "03";
          break;
          case 4:
          data.status = "0501";
          break;
          case 5:
          data.status = "0502";
          break;
          case 6:
          data.status = "11";
          break;
          default:
          data.status = "11";
        }
      }
    } else {
      // console.log('已删除，其他', data._PersonID);
      data.status = "11";
    }
  }

  // 在岗库
  else if(parseInt(data._PClassID) === 1) {
    if(parseInt(data.dieStatus) === 1) {
      console.log('[冲突] 在岗库，死亡', data._PersonID, data.dieStatus);
      data.status = '10';
    } else if(data.leaveStatus) {
      if(data.leaveStatus === '退休') {
        console.log('[冲突] 在岗库，退休', data._PersonID, data.leaveStatus);
        data.status = "08";
      } else {
        console.log('[冲突] 在岗库，离职', data._PersonID, data.leaveStatus);
        switch(parseInt(data.leaveStatus)) {
          case 6:
          data.status = "0701";
          break;
          case 7:
          data.status = "0702";
          break;
          case 8:
          data.status = "0703";
          break;
          case 9:
          data.status = "0704";
          break;
          default:
          data.status = "07";
        }
      }
    } else if(parseInt(data.transferStatus) === 1) {
      console.log('[冲突] 在岗库，调出', data._PersonID, data.transferStatus);
      data.status = '06';
    } else if(data.jobStatus) {
      if(data.jobStatus === '退休') {
        console.log('[冲突] 在岗库，退休', data._PersonID);
        data.status = "08";
      } else {
        // console.log('在岗库，在职', data._PersonID);
        switch(parseInt(data.jobStatus)) {
          case 1:
          data.status = "01";
          break;
          case 2:
          data.status = "02";
          break;
          case 3:
          data.status = "03";
          break;
          case 4:
          data.status = "0501";
          break;
          case 5:
          data.status = "0502";
          break;
          case 6:
          if(data.workPositon === '待岗') {
            data.status = "04";
          } else {
            data.status = "11";
          }
          break;
          default:
          if(data.workPositon === '待岗') {
            data.status = "04";
          } else {
            data.status = "11";
          }
        }


      }
    } else {
      console.log('[空值] 在岗库', data._PersonID);
      data.status = "11";
    }
  }
  
  // 离职库
  else if(parseInt(data._PClassID) === 2) {
    if(parseInt(data.dieStatus) === 1) {
      console.log('[冲突] 离职库，死亡', data._PersonID, data.dieStatus);
      data.status = '10';
    } else if(data.leaveStatus) {
      if(data.leaveStatus === '退休') {
        console.log('[冲突] 离职库，退休', data._PersonID, data.leaveStatus);
        data.status = "08";
      } else {
        console.log('[冲突] 离职库，离职', data._PersonID, data.leaveStatus);
        switch(parseInt(data.leaveStatus)) {
          case 6:
          data.status = "0701";
          break;
          case 7:
          data.status = "0702";
          break;
          case 8:
          data.status = "0703";
          break;
          case 9:
          data.status = "0704";
          break;
          default:
          data.status = "07";
        }
      }
    } else if(parseInt(data.transferStatus) === 1) {
      console.log('[冲突] 离职库，调出', data._PersonID, data.transferStatus);
      data.status = '06';
    } else if(data.jobStatus) {
      if(data.jobStatus === '退休') {
        console.log('[冲突] 离职库，退休', data._PersonID);
        data.status = "08";
      } else {
        data.status = "07";
      }
    } else {
      console.log('[空值] 离职库', data._PersonID);
      data.status = "07";
    }
  }

  // 调出库
  else if(parseInt(data._PClassID) === 3) {
    if(parseInt(data.dieStatus) === 1) {
      console.log('[冲突] 调出库，死亡', data._PersonID, data.dieStatus);
      data.status = '10';
    } else if(data.leaveStatus) {
      if(data.leaveStatus === '退休') {
        console.log('[冲突] 调出库，退休', data._PersonID, data.leaveStatus);
        data.status = "08";
      } else {
        console.log('[冲突] 调出库，离职', data._PersonID, data.leaveStatus);
        switch(parseInt(data.leaveStatus)) {
          case 6:
          data.status = "0701";
          break;
          case 7:
          data.status = "0702";
          break;
          case 8:
          data.status = "0703";
          break;
          case 9:
          data.status = "0704";
          break;
          default:
          data.status = "06";
        }
      }
    } else {
      data.status = "06";
    }
    
  }

  // 退休库
  else if(parseInt(data._PClassID) === 4) {
    if(parseInt(data.dieStatus) === 1) {
      console.log('[冲突] 离职库，死亡', data._PersonID, data.dieStatus);
      data.status = '10';
    } else if(data.jobStatus) {
      switch(parseInt(data.jobStatus)) {
        case 4:
        data.status = "0501";
        break;
        case 5:
        data.status = "0502";
        break;
        default:
        data.status = "08";
      }
    } else {
      data.status = "08";
    }
  }

  // 死亡库
  else if(parseInt(data._PClassID) === 5) {
    data.status = "10";
  }
  else {
    throw new Error('_PClassID error');
  }
  return data;
});

fs.writeFile('./a01_field.json', JSON.stringify(newA01, null, 2), function(err) {
  if(err) console.log(err);
  else    console.log(`saved!`);
});