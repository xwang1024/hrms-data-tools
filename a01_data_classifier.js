'use strict';
const DATA_PATH = 'F:/ServerData/hrms_initial_data';

var fs  = require('fs');
var a01 = require(`${DATA_PATH}/A01`).RECORDS;

var fieldMap = {
  "C0103": "employeeId", // 员工编号
  "A0101": "name", // 姓名
  "A0107": "gender", // 性别
  "A0121": "nation", // 民族
  "A0114": "hometown", // 籍贯
  "E0124": "hometownDescription", // 籍贯（描述）
  "A0111": "birthday", // 出生日期
  "E0141": "age", // 年龄
  "C0116": "politicalStatus", // 政治面貌
  // null: "eduBackground", // 学历
  // null: "degree", // 学位
  // null: "specialty", // 专业
  "C0114": "socialSecurityId", // 社保号
  "C0128": "socialSecurityStatus", // 社保状态
  "C0119": "isMarried", // 婚否，will be deleted
  "A0127": "marryStatus", // 婚姻状况
  "A0177": "idNum", // 身份证号
  "C0104": "idAddress", // 身份证地址
  "A0174": "hukouType", // 户籍类别
  "C0129": "hukouAddress", // 户籍所在地址
  "C0101": "currentAddress", // 家庭现居地
  // null: "childCnt", // 子女数量
  "X0101": "homePhone", // 家庭电话
  // null: "qq", // QQ
  // null: "wechat", // 微信
  "G0106": "telephone", // 移动电话
  "C0124": "email", // 电子邮箱
  "C0106": "jobLevel1", // 职务级别1
  // null: "jobLevel1Date", // 职务级别1评定时间
  // null: "jobLevel2", // 职务级别2
  // null: "jobLevel2Date", // 职务级别2评定时间
  // null: "languageSkill", // 外语语种和证书
  // null: "computerSkill", // 计算机水平
  // null: "jobCertName", // 职称资格证书
  // null: "hasCrime", // 是否有犯罪记录
  // null: "hobby", // 爱好特长
  // null: "prize", // 曾获奖励
  // null: "hasFamilyDisease", // 是否有家庭病史
  // null: "hasIllness", // 是否曾患重病或动重大手术
  "C0113": "archivesId", // 档案编号
  "C0115": "archivesInDate", // 档案转入时间
  "B0001": "company", // 单位
  "B0002": "department", // 部门
  "C0132": "workPositon", // 岗位
  "C0118": "jobPosition", // 集团内任职
  "C0121": "type", // 人员类别
  "A0141": "workDate", // 参加工作时间
  "A0151": "workAge", // 连续工龄
  "A0144": "groupDate", // 到后勤集团时间
  // null: "departmentDate", // 进入本中心时间
  "X0102": "contact1", // 紧急联系人1
  "C0123": "contact1Relation", // 紧急联系人1与本人关系
  "C0102": "contact1Phone", // 紧急联系人1电话
  // null: "contact2", // 紧急联系人2
  // null: "contact2Relation", // 紧急联系人2与本人关系
  // null: "contact2Phone", // 紧急联系人2电话
  "C0108": "notes", // 备注
  "A0131": "identity", // 个人身份
  "C0127": "schoolDate", // 入校时间
  "C0136": "schoolAge", // 校龄
  "C0117": "partyDate", // 入党时间
  "E0340": "regularizedDate", // 转正时间
  "A0152": "workLimit", // 工作年限
  "W0104": "workPositionLimit", // 在当前岗位任职年限
  "E0104": "pinyongFrom", // 人员录聘用来源
  "A0154": "employmentForm", // 用工形式
  "A0155": "laborContractType", // 劳动合同制用人形式
  "A0167": "treatmentLevel", // 享受待遇级别
  "C0111": "oldCompany", // 原单位
  "C0112": "oldCompanyYears", // 原单位任职时间
  "C0120": "jobStatus", // 在职状况
  "C0134": "transferStatus", // 调出状况
  "C0138": "transferDate", // 调出时间
  "C0133": "leaveStatus", // 离职状况
  "C0105": "leaveDate", // 离职时间
  "C0135": "dieStatus", // 死亡状况
  // null: "dieDate", // 死亡时间
  // null: "isRehire", // 是否退休返聘
  // null: "rehireDate", // 退休返聘时间
  "C0137": "sheetDate" // 填表时间
};

var newA01 = a01.map((data) => {
  var employee = {};
  Object.keys(data).map((k) => {
    var newK = fieldMap[k];
    if(!newK) {
      employee['_'+k] = data[k];
    } else {
      employee[newK] = data[k];
    }
  });
  return employee;
});

fs.writeFile('./newA01.json', JSON.stringify(newA01, null, 2), function(err) {
  if(err) console.log(err);
  else    console.log(`saved!`);
});