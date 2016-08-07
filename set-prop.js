'use strict';

exports = module.exports = [
  {
    "_id": "employee",
    "id": "employee",
    "name": "人员基本情况",
    "oldSetId": "A01",
    "enable": true,
    "columnProps": [
      // 登记表中没有的信息
      {
        "_id": "employee-employeeId",
        "id": "employeeId",
        "name": "员工编号",
        "oldItemId": "C0103",
        "enable": true,
        "itemType": "S",
        "itemLen": 50
      },
      // 员工基本信息
      {
        "_id": "employee-name",
        "id": "name",
        "name": "姓名",
        "oldItemId": "A0101",
        "enable": true,
        "itemType": "S",
        "itemLen": 30
      },
      {
        "_id": "employee-gender",
        "id": "gender",
        "name": "性别",
        "oldItemId": "A0107",
        "enable": true,
        "itemType": "C",
        "optionCode": "AX"
      },
      {
        "_id": "employee-nation",
        "id": "nation",
        "name": "民族",
        "oldItemId": "A0121",
        "enable": true,
        "itemType": "C",
        "optionCode": "AE"
      },
      {
        "_id": "employee-hometown",
        "id": "hometown",
        "name": "籍贯",
        "oldItemId": "A0114",
        "enable": true,
        "itemType": "C",
        "optionCode": "AB"
      },
      {
        "_id": "employee-hometownDescription",
        "id": "hometownDescription",
        "name": "籍贯（描述）",
        "oldItemId": "E0124",
        "enable": true,
        "itemType": "S",
        "itemLen": 20,
        "inAssume": false
      },
      {
        "_id": "employee-birthday",
        "id": "birthday",
        "name": "出生日期",
        "oldItemId": "A0111",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "employee-age",
        "id": "age",
        "name": "年龄",
        "oldItemId": "E0141",
        "enable": true,
        "itemType": "N",
        "virtual": true
      },
      {
        "_id": "employee-politicalStatus",
        "id": "politicalStatus",
        "name": "政治面貌",
        "oldItemId": "C0116",
        "enable": true,
        "itemType": "C",
        "optionCode": "AT"
      },
      { // 学历学位子集
        "_id": "employee-eduBackground",
        "id": "eduBackground",
        "name": "学历",
        "enable": true,
        "itemType": "C",
        "optionCode": "AM"
      },
      { // 学历学位子集
        "_id": "employee-degree",
        "id": "degree",
        "name": "学位",
        "enable": true,
        "itemType": "C",
        "optionCode": "AN"
      },
      { // 学历学位子集
        "_id": "employee-specialty",
        "id": "specialty",
        "name": "专业",
        "enable": true,
        "itemType": "C",
        "optionCode": "AI"
      },
      {
        "_id": "employee-socialSecurityId",
        "id": "socialSecurityId",
        "name": "社保号",
        "oldItemId": "C0114",
        "enable": true,
        "itemType": "S",
        "itemLen": 100
      },
      {
        "_id": "employee-socialSecurityStatus",
        "id": "socialSecurityStatus",
        "name": "社保状态",
        "oldItemId": "C0128",
        "enable": true,
        "itemType": "C",
        "optionCode": "ZQ"
      },
      {
        "_id": "employee-marryStatus",
        "id": "marryStatus",
        "name": "婚姻状况",
        "oldItemId": "A0127",
        "enable": true,
        "itemType": "C",
        "optionCode": "BG"
      },
      {
        "_id": "employee-idNum",
        "id": "idNum",
        "name": "身份证号",
        "oldItemId": "A0177",
        "enable": true,
        "itemType": "S",
        "itemLen": 18
      },
      {
        "_id": "employee-idAddress",
        "id": "idAddress",
        "name": "身份证地址",
        "oldItemId": "C0104",
        "enable": true,
        "itemType": "S",
        "itemLen": 500
      },
      {
        "_id": "employee-hukouType",
        "id": "hukouType",
        "name": "户籍类别",
        "oldItemId": "A0174",
        "enable": true,
        "itemType": "C",
        "optionCode": "HP"
      },
      {
        "_id": "employee-hukouAddress",
        "id": "hukouAddress",
        "name": "户籍所在地址",
        "oldItemId": "C0129",
        "enable": true,
        "itemType": "S",
        "itemLen": 800
      },
      {
        "_id": "employee-currentAddress",
        "id": "currentAddress",
        "name": "家庭现居地",
        "oldItemId": "C0101",
        "enable": true,
        "itemType": "S",
        "itemLen": 200
      },
      { // new
        "_id": "employee-childCnt",
        "id": "childCnt",
        "name": "子女数量",
        "enable": true,
        "itemType": "N",
        "itemLen": 50
      },
      {
        "_id": "employee-homePhone",
        "id": "homePhone",
        "name": "家庭电话",
        "oldItemId": "X0101",
        "enable": true,
        "itemType": "S",
        "itemLen": 50
      },
      { // new
        "_id": "employee-qq",
        "id": "qq",
        "name": "QQ",
        "enable": true,
        "itemType": "S",
        "itemLen": 50
      },
      { // new
        "_id": "employee-wechat",
        "id": "wechat",
        "name": "微信",
        "enable": true,
        "itemType": "S",
        "itemLen": 50
      },
      {
        "_id": "employee-telephone",
        "id": "telephone",
        "name": "移动电话",
        "oldItemId": "G0106",
        "enable": true,
        "itemType": "S",
        "itemLen": 30
      },
      {
        "_id": "employee-email",
        "id": "email",
        "name": "电子邮箱",
        "oldItemId": "C0124",
        "enable": true,
        "itemType": "S",
        "itemLen": 100
      },
      {
        "_id": "employee-jobLevel1",
        "id": "jobLevel1",
        "name": "职务级别(1)",
        "oldItemId": "C0106",
        "enable": true,
        "itemType": "C",
        "optionCode": "AL"
      },
      {
        "_id": "employee-jobLevel1Date",
        "id": "jobLevel1Date",
        "name": "职务级别(1)评定时间",
        "oldItemId": "",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "employee-jobLevel2",
        "id": "jobLevel2",
        "name": "职务级别(2)",
        "oldItemId": "",
        "enable": true,
        "itemType": "C",
        "optionCode": "AL"
      },
      {
        "_id": "employee-jobLevel2Date",
        "id": "jobLevel2Date",
        "name": "职务级别(2)评定时间",
        "oldItemId": "",
        "enable": true,
        "itemType": "D"
      },
      { // new
        "_id": "employee-languageSkill",
        "id": "languageSkill",
        "name": "外语语种和证书",
        "enable": true,
        "itemType": "S",
        "itemLen": 100
      },
      { // new
        "_id": "employee-computerSkill",
        "id": "computerSkill",
        "name": "计算机水平",
        "enable": true,
        "itemType": "S",
        "itemLen": 100
      },
      { // new
        "_id": "employee-jobCertName",
        "id": "jobCertName",
        "name": "职称资格证书",
        "enable": true,
        "itemType": "S"
      },
      { // new
        "_id": "employee-hasCrime",
        "id": "hasCrime",
        "name": "是否有犯罪记录",
        "enable": true,
        "itemType": "C",
        "optionCode": "ZX"
      },
      { // new
        "_id": "employee-hobby",
        "id": "hobby",
        "name": "爱好特长",
        "enable": true,
        "itemType": "S",
        "itemLen": 500
      },
      { // new
        "_id": "employee-prize",
        "id": "prize",
        "name": "曾获奖励",
        "enable": true,
        "itemType": "S",
        "itemLen": 500
      },
      { // new
        "_id": "employee-hasFamilyDisease",
        "id": "hasFamilyDisease",
        "name": "是否有家庭病史",
        "enable": true,
        "itemType": "C",
        "optionCode": "ZX"
      },
      { // new
        "_id": "employee-hasIllness",
        "id": "hasIllness",
        "name": "是否曾患重病或动重大手术",
        "enable": true,
        "itemType": "C",
        "optionCode": "ZX"
      },
      {
        "_id": "employee-archivesId",
        "id": "archivesId",
        "name": "档案编号",
        "oldItemId": "A8505",
        "enable": true,
        "itemType": "S",
        "itemLen": 6
      },
      {
        "_id": "employee-archivesInDate",
        "id": "archivesInDate",
        "name": "档案转入时间",
        "oldItemId": "A8515",
        "enable": true,
        "itemType": "D"
      },
      // 工作信息
      {
        "_id": "employee-company",
        "id": "company",
        "name": "单位",
        "oldItemId": "B0001",
        "enable": true,
        "itemType": "C",
        "optionCode": "N"
      },
      {
        "_id": "employee-department",
        "id": "department",
        "name": "部门",
        "oldItemId": "B0002",
        "enable": true,
        "itemType": "C",
        "optionCode": "M"
      },
      {
        "_id": "employee-workPositon",
        "id": "workPositon",
        "name": "岗位",
        "oldItemId": "C0132",
        "enable": true,
        "itemType": "S",
        "itemLen": 50
      },
      {
        "_id": "employee-jobPosition",
        "id": "jobPosition",
        "name": "集团内任职",
        "oldItemId": "C0118",
        "enable": true,
        "itemType": "C",
        "optionCode": "ZR"
      },
      {
        "_id": "employee-type",
        "id": "type",
        "name": "人员类别",
        "oldItemId": "C0121",
        "enable": true,
        "itemType": "C",
        "optionCode": "ZN"
      },
      {
        "_id": "employee-workDate",
        "id": "workDate",
        "name": "参加工作时间",
        "oldItemId": "A0141",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "employee-workAge",
        "id": "workAge",
        "name": "连续工龄",
        "oldItemId": "A0151",
        "enable": true,
        "itemType": "N",
        "min": 0,
        "max": 11,
        "virtual": true
      },
      {
        "_id": "employee-groupDate",
        "id": "groupDate",
        "name": "到后勤集团时间",
        "oldItemId": "A0144",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "employee-departmentDate",
        "id": "departmentDate",
        "name": "进入本中心时间",
        "oldItemId": "",
        "enable": true,
        "itemType": "D"
      },
      // 紧急联系人
      {
        "_id": "employee-contact1",
        "id": "contact1",
        "name": "紧急联系人(1)",
        "oldItemId": "X0102",
        "enable": true,
        "itemType": "S",
        "itemLen": 50
      },
      {
        "_id": "employee-contact1Relation",
        "id": "contact1Relation",
        "name": "紧急联系人(1)与本人关系",
        "oldItemId": "C0123",
        "enable": true,
        "itemType": "C",
        "optionCode": "AS"
      },
      {
        "_id": "employee-contact1Phone",
        "id": "contact1Phone",
        "name": "紧急联系人(1)电话",
        "oldItemId": "C0102",
        "enable": true,
        "itemType": "S",
        "itemLen": 50
      },

      {
        "_id": "employee-contact2",
        "id": "contact2",
        "name": "紧急联系人(2)",
        "enable": true,
        "itemType": "S",
        "itemLen": 50
      },
      {
        "_id": "employee-contact2Relation",
        "id": "contact2Relation",
        "name": "紧急联系人(2)与本人关系",
        "enable": true,
        "itemType": "C",
        "optionCode": "AS"
      },
      {
        "_id": "employee-contact2Phone",
        "id": "contact2Phone",
        "name": "紧急联系人(2)电话",
        "enable": true,
        "itemType": "S",
        "itemLen": 50
      },
      {
        "_id": "employee-notes",
        "id": "notes",
        "name": "备注",
        "oldItemId": "C0108",
        "enable": true,
        "itemType": "S",
        "itemLen": 500
      },
      // 其他信息
      {
        "_id": "employee-identity",
        "id": "identity",
        "name": "个人身份",
        "oldItemId": "A0131",
        "enable": true,
        "itemType": "C",
        "optionCode": "BK",
        "inAssume": false
      },
      {
        "_id": "employee-schoolDate",
        "id": "schoolDate",
        "name": "入校时间",
        "oldItemId": "C0127",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "employee-schoolAge",
        "id": "schoolAge",
        "name": "校龄",
        "oldItemId": "C0136",
        "enable": true,
        "itemType": "N",
        "min": 0,
        "max": 13
      },
      {
        "_id": "employee-partyDate",
        "id": "partyDate",
        "name": "入党时间",
        "oldItemId": "C0117",
        "enable": true,
        "itemType": "D",
        "inAssume": false
      },
      {
        "_id": "employee-regularizedDate",
        "id": "regularizedDate",
        "name": "转正时间",
        "oldItemId": "E0340",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "employee-workLimit",
        "id": "workLimit",
        "name": "工作年限",
        "oldItemId": "A0152",
        "enable": true,
        "itemType": "N",
        "min": 0,
        "max": 11,
        "inAssume": false
      },
      {
        "_id": "employee-workPositionLimit",
        "id": "workPositionLimit",
        "name": "在当前岗位任职年限",
        "oldItemId": "W0104",
        "enable": true,
        "itemType": "C",
        "optionCode": "WD"
      },
      {
        "_id": "employee-pinyongFrom",
        "id": "pinyongFrom",
        "name": "人员录聘用来源",
        "oldItemId": "E0104",
        "enable": true,
        "itemType": "C",
        "optionCode": "HA"
      },
      {
        "_id": "employee-employmentForm",
        "id": "employmentForm",
        "name": "用工形式",
        "oldItemId": "A0154",
        "enable": true,
        "itemType": "C",
        "optionCode": "BI",
        "inAssume": false
      },
      {
        "_id": "employee-laborContractType",
        "id": "laborContractType",
        "name": "劳动合同制用人形式",
        "oldItemId": "A0155",
        "enable": true,
        "itemType": "C",
        "optionCode": "JI",
        "inAssume": false
      },
      {
        "_id": "employee-treatmentLevel",
        "id": "treatmentLevel",
        "name": "享受待遇级别",
        "oldItemId": "A0167",
        "enable": true,
        "itemType": "C",
        "optionCode": "AL",
        "inAssume": false
      },
      {
        "_id": "employee-oldCompany",
        "id": "oldCompany",
        "name": "原单位",
        "oldItemId": "C0111",
        "enable": true,
        "itemType": "S",
        "itemLen": 500
      },
      {
        "_id": "employee-oldCompanyYears",
        "id": "oldCompanyYears",
        "name": "原单位任职时间",
        "oldItemId": "C0112",
        "enable": true,
        "itemType": "D"
      },
      // 员工状态信息
      {
        "_id": "employee-status",
        "id": "status",
        "name": "员工状态",
        "oldItemId": "",
        "enable": true,
        "itemType": "C",
        "optionCode": "ZY",
        "inAssume": false
      },
      {
        "_id": "employee-jobStatus",
        "id": "jobStatus",
        "name": "在职状况",
        "oldItemId": "C0120",
        "enable": true,
        "itemType": "C",
        "optionCode": "ZS",
        "inAssume": false
      },
      {
        "_id": "employee-transferStatus",
        "id": "transferStatus",
        "name": "调出状况",
        "oldItemId": "C0134",
        "enable": true,
        "itemType": "C",
        "optionCode": "ZT"
      },
      {
        "_id": "employee-transferDate",
        "id": "transferDate",
        "name": "调出时间",
        "oldItemId": "C0138",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "employee-leaveStatus",
        "id": "leaveStatus",
        "name": "离职状况",
        "oldItemId": "C0133",
        "enable": true,
        "itemType": "C",
        "optionCode": "ZL"
      },
      {
        "_id": "employee-leaveDate",
        "id": "leaveDate",
        "name": "离职时间",
        "oldItemId": "C0105",
        "enable": true,
        "itemType": "D",
        "inAssume": false
      },
      {
        "_id": "employee-dieStatus",
        "id": "dieStatus",
        "name": "死亡状况",
        "oldItemId": "C0135",
        "enable": true,
        "itemType": "C",
        "optionCode": "ZU"
      },
      {
        "_id": "employee-dieDate",
        "id": "dieDate",
        "name": "死亡时间",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "employee-isRehire",
        "id": "isRehire",
        "name": "是否退休返聘",
        "oldItemId": "",
        "enable": true,
        "itemType": "C",
        "optionCode": "ZX"
      },
      {
        "_id": "employee-rehireDate",
        "id": "rehireDate",
        "name": "退休返聘时间",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "employee-sheetDate",
        "id": "sheetDate",
        "name": "填表时间",
        "oldItemId": "C0137",
        "enable": true,
        "itemType": "D"
      },
    ]
  },
  {
    "_id": "schoolingSubset",
    "id": "schoolingSubset",
    "name": "学历及学位子集",
    "oldSetId": "A04",
    "enable": true,
    "columnProps": [
      {
        "_id": "schoolingSubset-eduBackground",
        "id": "eduBackground",
        "name": "学历",
        "oldItemId": "A0405",
        "enable": true,
        "itemType": "C",
        "optionCode": "AM"
      },
      {
        "_id": "schoolingSubset-specialty",
        "id": "specialty",
        "name": "所学专业",
        "oldItemId": "A0410",
        "enable": true,
        "itemType": "C",
        "optionCode": "AI"
      },
      {
        "_id": "schoolingSubset-admissionDate",
        "id": "admissionDate",
        "name": "入学时间",
        "oldItemId": "A0415",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "schoolingSubset-learningForm",
        "id": "learningForm",
        "name": "学习形式",
        "oldItemId": "A0420",
        "enable": true,
        "itemType": "C",
        "optionCode": "BS"
      },
      {
        "_id": "schoolingSubset-eduSystem",
        "id": "eduSystem",
        "name": "学制",
        "oldItemId": "A0425",
        "enable": true,
        "itemType": "N",
        "min": 0,
        "max": 9
      },
      {
        "_id": "schoolingSubset-graduatedDate",
        "id": "graduatedDate",
        "name": "毕(肄)业时间",
        "oldItemId": "A0430",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "schoolingSubset-graduatedSchool",
        "id": "graduatedSchool",
        "name": "毕(肄)业学校及单位",
        "oldItemId": "A0435",
        "enable": true,
        "itemType": "S",
        "itemLen": 70
      },
      {
        "_id": "schoolingSubset-degree",
        "id": "degree",
        "name": "学位",
        "oldItemId": "A0440",
        "enable": true,
        "itemType": "C",
        "optionCode": "AN"
      },
      {
        "_id": "schoolingSubset-degreeDate",
        "id": "degreeDate",
        "name": "学位授予时间",
        "oldItemId": "A0445",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "schoolingSubset-degreeCountry",
        "id": "degreeCountry",
        "name": "学位授予国家(地区)",
        "oldItemId": "A0450",
        "enable": true,
        "itemType": "C",
        "optionCode": "AD"
      },
      {
        "_id": "schoolingSubset-degreeSchool",
        "id": "degreeSchool",
        "name": "学位授予单位",
        "oldItemId": "A0455",
        "enable": true,
        "itemType": "S",
        "itemLen": 70
      },
      {
        "_id": "schoolingSubset-eduType",
        "id": "eduType",
        "name": "教育类别",
        "oldItemId": "C0401",
        "enable": true,
        "itemType": "C",
        "optionCode": "ZE"
      },
      {
        "_id": "schoolingSubset-witness",
        "id": "witness",
        "name": "证明人",
        "oldItemId": "G0401",
        "enable": true,
        "itemType": "S",
        "itemLen": 10
      }
    ]
  },
  {
    "_id": "partisanDutyJobSubset",
    "id": "partisanDutyJobSubset",
    "name": "行政、党派职务子集",
    "oldSetId": "A07",
    "enable": true,
    "columnProps": [
      {
        "_id": "partisanDutyJobSubset-type",
        "id": "type",
        "name": "职务类别",
        "oldItemId": "A0701",
        "enable": true,
        "itemType": "C",
        "optionCode": "BQ"
      },
      {
        "_id": "partisanDutyJobSubset-name",
        "id": "name",
        "name": "职务名称",
        "oldItemId": "A0704",
        "enable": true,
        "itemType": "C",
        "optionCode": "AK"
      },
      {
        "_id": "partisanDutyJobSubset-date",
        "id": "date",
        "name": "任职时间",
        "oldItemId": "A0707",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "partisanDutyJobSubset-workplace",
        "id": "workplace",
        "name": "任职单位",
        "oldItemId": "A0711",
        "enable": true,
        "itemType": "S",
        "itemLen": 70
      },
      {
        "_id": "partisanDutyJobSubset-form",
        "id": "form",
        "name": "任职方式",
        "oldItemId": "A0714",
        "enable": true,
        "itemType": "C",
        "optionCode": "BL"
      },
      {
        "_id": "partisanDutyJobSubset-reason",
        "id": "reason",
        "name": "任职原因",
        "oldItemId": "A0717",
        "enable": true,
        "itemType": "C",
        "optionCode": "CQ"
      },
      {
        "_id": "partisanDutyJobSubset-refId",
        "id": "refId",
        "name": "任职文号",
        "oldItemId": "A0721",
        "enable": true,
        "itemType": "S",
        "itemLen": 24
      },
      {
        "_id": "partisanDutyJobSubset-level",
        "id": "level",
        "name": "职务级别",
        "oldItemId": "A0724",
        "enable": true,
        "itemType": "C",
        "optionCode": "AL"
      },
      {
        "_id": "partisanDutyJobSubset-category",
        "id": "category",
        "name": "职位分类",
        "oldItemId": "A0727",
        "enable": true,
        "itemType": "C",
        "optionCode": "AW"
      },
      {
        "_id": "partisanDutyJobSubset-approvedBy",
        "id": "approvedBy",
        "name": "任职批准单位",
        "oldItemId": "A0731",
        "enable": true,
        "itemType": "S",
        "itemLen": 70
      },
      {
        "_id": "partisanDutyJobSubset-changeType",
        "id": "changeType",
        "name": "职务变动类别",
        "oldItemId": "A0734",
        "enable": true,
        "itemType": "C",
        "optionCode": "BV"
      },
      {
        "_id": "partisanDutyJobSubset-status",
        "id": "status",
        "name": "当前任职状况",
        "oldItemId": "A0737",
        "enable": true,
        "itemType": "C",
        "optionCode": "BW"
      },
      {
        "_id": "partisanDutyJobSubset-sequence",
        "id": "sequence",
        "name": "职务排序",
        "oldItemId": "A0741",
        "enable": true,
        "itemType": "S",
        "itemLen": 1
      },
      {
        "_id": "partisanDutyJobSubset-workDetail",
        "id": "workDetail",
        "name": "主管或从事工作",
        "oldItemId": "A0744",
        "enable": true,
        "itemType": "S",
        "itemLen": 40
      },
      {
        "_id": "partisanDutyJobSubset-deposeDate",
        "id": "deposeDate",
        "name": "免职时间",
        "oldItemId": "A0747",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "partisanDutyJobSubset-deposeType",
        "id": "deposeType",
        "name": "免职方式",
        "oldItemId": "A0751",
        "enable": true,
        "itemType": "C",
        "optionCode": "BX"
      },
      {
        "_id": "partisanDutyJobSubset-deposeReason",
        "id": "deposeReason",
        "name": "免职原因",
        "oldItemId": "A0754",
        "enable": true,
        "itemType": "C",
        "optionCode": "CF"
      },
      {
        "_id": "partisanDutyJobSubset-deposeRefId",
        "id": "deposeRefId",
        "name": "免职文号",
        "oldItemId": "A0757",
        "enable": true,
        "itemType": "S",
        "itemLen": 24
      },
      {
        "_id": "partisanDutyJobSubset-deposedBy",
        "id": "deposedBy",
        "name": "免职批准单位",
        "oldItemId": "A0761",
        "enable": true,
        "itemType": "S",
        "itemLen": 70
      },
      {
        "_id": "partisanDutyJobSubset-validDate",
        "id": "validDate",
        "name": "职务生效时间",
        "oldItemId": "A0764",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "partisanDutyJobSubset-jobId",
        "id": "jobId",
        "name": "职务序号",
        "oldItemId": "A0767",
        "enable": true,
        "itemType": "N",
        "min": 0,
        "max": 10
      },
      {
        "_id": "partisanDutyJobSubset-demotionReason",
        "id": "demotionReason",
        "name": "降职原因",
        "oldItemId": "E0701",
        "enable": true,
        "itemType": "C",
        "optionCode": "HZ"
      },
      {
        "_id": "partisanDutyJobSubset-nextJobYear",
        "id": "nextJobYear",
        "name": "在下一级任职年限",
        "oldItemId": "E0703",
        "enable": true,
        "itemType": "C",
        "optionCode": "HU"
      },
      {
        "_id": "partisanDutyJobSubset-attr",
        "id": "attr",
        "name": "职务属性",
        "oldItemId": "E0705",
        "enable": true,
        "itemType": "C",
        "optionCode": "IR"
      },
      {
        "_id": "partisanDutyJobSubset-clerkLevel",
        "id": "clerkLevel",
        "name": "行员等级",
        "oldItemId": "E0711",
        "enable": true,
        "itemType": "C",
        "optionCode": "JP"
      },
      {
        "_id": "partisanDutyJobSubset-employeeLevel",
        "id": "employeeLevel",
        "name": "职员等级",
        "oldItemId": "E0714",
        "enable": true,
        "itemType": "C",
        "optionCode": "JQ"
      },
      {
        "_id": "partisanDutyJobSubset-oldJobName",
        "id": "oldJobName",
        "name": "原职务名称",
        "oldItemId": "G0702",
        "enable": true,
        "itemType": "C",
        "optionCode": "AK"
      },
      {
        "_id": "partisanDutyJobSubset-oldJobDate",
        "id": "oldJobDate",
        "name": "原任职时间",
        "oldItemId": "G0703",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "partisanDutyJobSubset-trialIntent",
        "id": "trialIntent",
        "name": "使用意向",
        "oldItemId": "G0704",
        "enable": true,
        "itemType": "S",
        "itemLen": 50
      }
    ]
  },
  {
    "_id": "specialtySubset",
    "id": "specialtySubset",
    "name": "专业技术职务子集",
    "oldSetId": "A10",
    "enable": true,
    "columnProps": [
      {
        "_id": "specialtySubset-qualName",
        "id": "qualName",
        "name": "专业技术资格名称",
        "oldItemId": "A1005",
        "enable": true,
        "itemType": "C",
        "optionCode": "AJ"
      },
      {
        "_id": "specialtySubset-qualMethod",
        "id": "qualMethod",
        "name": "取得资格途径",
        "oldItemId": "A1010",
        "enable": true,
        "itemType": "C",
        "optionCode": "BY"
      },
      {
        "_id": "specialtySubset-qualDate",
        "id": "qualDate",
        "name": "取得资格时间",
        "oldItemId": "A1015",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "specialtySubset-appointName",
        "id": "appointName",
        "name": "聘任专业技术职务名称",
        "oldItemId": "A1020",
        "enable": true,
        "itemType": "C",
        "optionCode": "AJ"
      },
      {
        "_id": "specialtySubset-appointStartDate",
        "id": "appointStartDate",
        "name": "聘任起始时间",
        "oldItemId": "A1025",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "specialtySubset-appointEndDate",
        "id": "appointEndDate",
        "name": "聘任终止时间",
        "oldItemId": "A1030",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "specialtySubset-appointedBy",
        "id": "appointedBy",
        "name": "聘任单位",
        "oldItemId": "A1035",
        "enable": true,
        "itemType": "S",
        "itemLen": 70
      },
      {
        "_id": "specialtySubset-appointStatus",
        "id": "appointStatus",
        "name": "聘任情况",
        "oldItemId": "A1040",
        "enable": true,
        "itemType": "C",
        "optionCode": "CL"
      },
      {
        "_id": "specialtySubset-specialty",
        "id": "specialty",
        "name": "有何种专长",
        "oldItemId": "E1003",
        "enable": true,
        "itemType": "S",
        "itemLen": 40
      },
      {
        "_id": "specialtySubset-qualedBy",
        "id": "qualedBy",
        "name": "资格审批单位",
        "oldItemId": "E1013",
        "enable": true,
        "itemType": "S",
        "itemLen": 70
      },
      {
        "_id": "specialtySubset-qualReview",
        "id": "qualReview",
        "name": "评审任职资格",
        "oldItemId": "G1009",
        "enable": true,
        "itemType": "S",
        "itemLen": 40
      }
    ]
  },
  {
    "_id": "workerSubset",
    "id": "workerSubset",
    "name": "工人技术等级及职务子集",
    "oldSetId": "A13",
    "enable": true,
    "columnProps": [
      {
        "_id": "workerSubset-levelName",
        "id": "levelName",
        "name": "工人技术等级名称",
        "oldItemId": "A1305",
        "enable": true,
        "itemType": "C",
        "optionCode": "BZ"
      },
      {
        "_id": "workerSubset-jobName",
        "id": "jobName",
        "name": "工人技术职务名称",
        "oldItemId": "A1310",
        "enable": true,
        "itemType": "C",
        "optionCode": "ZV"
      },
      {
        "_id": "workerSubset-jobDate",
        "id": "jobDate",
        "name": "取得技术职务时间",
        "oldItemId": "E1301",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "workerSubset-approvedBy",
        "id": "approvedBy",
        "name": "批准技术职务单位名称",
        "oldItemId": "E1303",
        "enable": true,
        "itemType": "S",
        "itemLen": 70
      },
      {
        "_id": "workerSubset-appointStartDate",
        "id": "appointStartDate",
        "name": "聘任起始时间",
        "oldItemId": "E1307",
        "enable": true,
        "itemType": "D"
      }
    ]
  },
  {
    "_id": "trialSubset",
    "id": "trialSubset",
    "name": "试用情况子集",
    "oldSetId": "A14",
    "enable": true,
    "columnProps": [
      {
        "_id": "trialSubset-trialType",
        "id": "trialType",
        "name": "试用类别",
        "oldItemId": "E1401",
        "enable": true,
        "itemType": "C",
        "optionCode": "ID"
      },
      {
        "_id": "trialSubset-trialStartDate",
        "id": "trialStartDate",
        "name": "试用开始时间",
        "oldItemId": "E1403",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "trialSubset-trialEndDate",
        "id": "trialEndDate",
        "name": "试用终止时间",
        "oldItemId": "E1405",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "trialSubset-trialScore",
        "id": "trialScore",
        "name": "试用期满成绩",
        "oldItemId": "E1407",
        "enable": true,
        "itemType": "C",
        "optionCode": "IE"
      }
    ]
  },
  {
    "_id": "contractSubset",
    "id": "contractSubset",
    "name": "合同信息子集",
    "oldSetId": "A15",
    "enable": true,
    "columnProps": [
      {
        "_id": "contractSubset-type",
        "id": "type",
        "name": "合同种类",
        "oldItemId": "E1501",
        "enable": true,
        "itemType": "C",
        "optionCode": "JI"
      },
      {
        "_id": "contractSubset-startDate",
        "id": "startDate",
        "name": "合同起始时间",
        "oldItemId": "E1503",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "contractSubset-endDate",
        "id": "endDate",
        "name": "合同终止时间",
        "oldItemId": "E1505",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "contractSubset-limit",
        "id": "limit",
        "name": "合同期限",
        "oldItemId": "E1507",
        "enable": true,
        "itemType": "N",
        "min": 0,
        "max": 11
      },
      {
        "_id": "contractSubset-abnormal",
        "id": "abnormal",
        "name": "异常登记",
        "oldItemId": "E1509",
        "enable": true,
        "itemType": "C",
        "optionCode": "JN"
      }
    ]
  },
  {
    "_id": "positionChangeSubset",
    "id": "positionChangeSubset",
    "name": "岗位变化子集",
    "oldSetId": "A17",
    "enable": true,
    "columnProps": [
      {
        "_id": "positionChangeSubset-oldPodition",
        "id": "oldPodition",
        "name": "原岗位",
        "oldItemId": "C1701",
        "enable": true,
        "itemType": "S",
        "itemLen": 100
      },
      {
        "_id": "positionChangeSubset-status",
        "id": "status",
        "name": "岗位变化情况",
        "oldItemId": "E1711",
        "enable": true,
        "itemType": "C",
        "optionCode": "HN"
      },
      {
        "_id": "positionChangeSubset-date",
        "id": "date",
        "name": "岗位变化时间",
        "oldItemId": "E1713",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "positionChangeSubset-inductionType",
        "id": "inductionType",
        "name": "公务员上岗方式",
        "oldItemId": "E1721",
        "enable": true,
        "itemType": "C",
        "optionCode": "KF"
      }
    ]
  },
  {
    "_id": "resumeSubset",
    "id": "resumeSubset",
    "name": "个人简历子集",
    "oldSetId": "A19",
    "enable": true,
    "columnProps": [
      {
        "_id": "resumeSubset-startDate",
        "id": "startDate",
        "name": "起始时间",
        "oldItemId": "A1905",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "resumeSubset-endDate",
        "id": "endDate",
        "name": "终止时间",
        "oldItemId": "A1910",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "resumeSubset-workplace",
        "id": "workplace",
        "name": "所在单位",
        "oldItemId": "A1915",
        "enable": true,
        "itemType": "S",
        "itemLen": 70
      },
      {
        "_id": "resumeSubset-work",
        "id": "work",
        "name": "从事工作或担任职务",
        "oldItemId": "A1920",
        "enable": true,
        "itemType": "S",
        "itemLen": 40
      },
      {
        "_id": "resumeSubset-witness",
        "id": "witness",
        "name": "证明人",
        "oldItemId": "A1925",
        "enable": true,
        "itemType": "S",
        "itemLen": 30
      },
      {
        "_id": "resumeSubset-phone",
        "id": "phone",
        "name": "联系电话",
        "oldItemId": "C1901",
        "enable": true,
        "itemType": "S",
        "itemLen": 50
      },
      {
        "_id": "resumeSubset-leaveDate",
        "id": "leaveDate",
        "name": "离职时间",
        "oldItemId": "C1902",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "resumeSubset-changeReason",
        "id": "changeReason",
        "name": "工作变动原因",
        "oldItemId": "G1901",
        "enable": true,
        "itemType": "S",
        "itemLen": 30
      },
      {
        "_id": "resumeSubset-limit",
        "id": "limit",
        "name": "工作年限",
        "oldItemId": "G1902",
        "enable": true,
        "itemType": "N",
        "min": 0,
        "max": 11
      },
      {
        "_id": "resumeSubset-job",
        "id": "job",
        "name": "担任职务",
        "oldItemId": "G1903",
        "enable": true,
        "itemType": "S",
        "itemLen": 30
      }
    ]
  },
  {
    "_id": "bypassSubset",
    "id": "bypassSubset",
    "name": "人员分流情况子集",
    "oldSetId": "A20",
    "enable": true,
    "columnProps": [
      {
        "_id": "bypassSubset-date",
        "id": "date",
        "name": "人员分流时间",
        "oldItemId": "E2001",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "bypassSubset-whereabouts",
        "id": "whereabouts",
        "name": "人员分流去向",
        "oldItemId": "E2005",
        "enable": true,
        "itemType": "C",
        "optionCode": "KH"
      }
    ]
  },
  {
    "_id": "politicalSubset",
    "id": "politicalSubset",
    "name": "政治面貌及党籍情况子集",
    "oldSetId": "A22",
    "enable": true,
    "columnProps": [
      {
        "_id": "politicalSubset-status",
        "id": "status",
        "name": "政治面貌",
        "oldItemId": "A2205",
        "enable": true,
        "itemType": "C",
        "optionCode": "AT"
      },
      {
        "_id": "politicalSubset-startDate",
        "id": "startDate",
        "name": "参加党派时间",
        "oldItemId": "A2210",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "politicalSubset-startWorkplace",
        "id": "startWorkplace",
        "name": "参加党派时所在单位",
        "oldItemId": "A2215",
        "enable": true,
        "itemType": "S",
        "itemLen": 70
      },
      {
        "_id": "politicalSubset-introducer",
        "id": "introducer",
        "name": "介绍人",
        "oldItemId": "A2220",
        "enable": true,
        "itemType": "S",
        "itemLen": 30
      },
      {
        "_id": "politicalSubset-regularizedDate",
        "id": "regularizedDate",
        "name": "转正时间",
        "oldItemId": "A2225",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "politicalSubset-abnormalType",
        "id": "abnormalType",
        "name": "异常类别",
        "oldItemId": "A2230",
        "enable": true,
        "itemType": "C",
        "optionCode": "CA"
      },
      {
        "_id": "politicalSubset-abnormalReason",
        "id": "abnormalReason",
        "name": "异常原因",
        "oldItemId": "A2235",
        "enable": true,
        "itemType": "S",
        "itemLen": 48
      },
      {
        "_id": "politicalSubset-partyJob",
        "id": "partyJob",
        "name": "党（团）职务",
        "oldItemId": "G2201",
        "enable": true,
        "itemType": "S",
        "itemLen": 20
      },
      {
        "_id": "politicalSubset-democraticJob",
        "id": "democraticJob",
        "name": "民主党派职务",
        "oldItemId": "G2202",
        "enable": true,
        "itemType": "S",
        "itemLen": 20
      }
    ]
  },
  {
    "_id": "rewardSubset",
    "id": "rewardSubset",
    "name": "奖励(行政及党内)子集",
    "oldSetId": "A28",
    "enable": true,
    "columnProps": [
      {
        "_id": "rewardSubset-type",
        "id": "type",
        "name": "奖励类别",
        "oldItemId": "E2801",
        "enable": true,
        "itemType": "C",
        "optionCode": "AZ"
      },
      {
        "_id": "rewardSubset-name",
        "id": "name",
        "name": "奖励名称",
        "oldItemId": "E2803",
        "enable": true,
        "itemType": "C",
        "optionCode": "AP"
      },
      {
        "_id": "rewardSubset-reason",
        "id": "reason",
        "name": "奖励原因",
        "oldItemId": "E2805",
        "enable": true,
        "itemType": "C",
        "optionCode": "HQ"
      },
      {
        "_id": "rewardSubset-date",
        "id": "date",
        "name": "奖励时间",
        "oldItemId": "E2807",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "rewardSubset-approvedBy",
        "id": "approvedBy",
        "name": "奖励批准单位",
        "oldItemId": "E2809",
        "enable": true,
        "itemType": "S",
        "itemLen": 70
      },
      {
        "_id": "rewardSubset-honorName",
        "id": "honorName",
        "name": "荣誉称号名称",
        "oldItemId": "E2811",
        "enable": true,
        "itemType": "C",
        "optionCode": "AQ"
      },
      {
        "_id": "rewardSubset-honorApprovedBy",
        "id": "honorApprovedBy",
        "name": "荣誉称号授予单位",
        "oldItemId": "E2813",
        "enable": true,
        "itemType": "C",
        "optionCode": "IC"
      },
      {
        "_id": "rewardSubset-cancelStatus",
        "id": "cancelStatus",
        "name": "奖励取消情况",
        "oldItemId": "E2815",
        "enable": true,
        "itemType": "S",
        "itemLen": 70
      }
    ]
  },
  {
    "_id": "punishmentSubset",
    "id": "punishmentSubset",
    "name": "惩罚(行政及党内)子集",
    "oldSetId": "A29",
    "enable": true,
    "columnProps": [
      {
        "_id": "punishmentSubset-type",
        "id": "type",
        "name": "处分类别",
        "oldItemId": "E2901",
        "enable": true,
        "itemType": "C",
        "optionCode": "HF"
      },
      {
        "_id": "punishmentSubset-name",
        "id": "name",
        "name": "处分名称",
        "oldItemId": "E2903",
        "enable": true,
        "itemType": "C",
        "optionCode": "AR"
      },
      {
        "_id": "punishmentSubset-reason",
        "id": "reason",
        "name": "处分原因",
        "oldItemId": "E2905",
        "enable": true,
        "itemType": "C",
        "optionCode": "HR"
      },
      {
        "_id": "punishmentSubset-date",
        "id": "date",
        "name": "受处分时间",
        "oldItemId": "E2907",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "punishmentSubset-givenBy",
        "id": "givenBy",
        "name": "受处分给予单位",
        "oldItemId": "E2909",
        "enable": true,
        "itemType": "S",
        "itemLen": 30
      },
      {
        "_id": "punishmentSubset-cancelDate",
        "id": "cancelDate",
        "name": "撤销处分时间",
        "oldItemId": "E2911",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "punishmentSubset-givenBySupervise",
        "id": "givenBySupervise",
        "name": "监察机关直接给予的",
        "oldItemId": "E2913",
        "enable": true,
        "itemType": "C",
        "optionCode": "HT"
      },
      {
        "_id": "punishmentSubset-cancelStatus",
        "id": "cancelStatus",
        "name": "惩罚取消情况",
        "oldItemId": "E2915",
        "enable": true,
        "itemType": "S",
        "itemLen": 70
      }
    ]
  },
  {
    "_id": "languageSubset",
    "id": "languageSubset",
    "name": "语言能力子集",
    "oldSetId": "A34",
    "enable": true,
    "columnProps": [
      {
        "_id": "languageSubset-name",
        "id": "name",
        "name": "语种",
        "oldItemId": "A3405",
        "enable": true,
        "itemType": "C",
        "optionCode": "AO"
      },
      {
        "_id": "languageSubset-proficiency",
        "id": "proficiency",
        "name": "语种熟练程度",
        "oldItemId": "A3410",
        "enable": true,
        "itemType": "C",
        "optionCode": "BJ"
      },
      {
        "_id": "languageSubset-level",
        "id": "level",
        "name": "掌握语种的级别",
        "oldItemId": "E3401",
        "enable": true,
        "itemType": "C",
        "optionCode": "II"
      }
    ]
  },
  {
    "_id": "eduTrainSubset",
    "id": "eduTrainSubset",
    "name": "教育培训子集",
    "oldSetId": "A37",
    "enable": true,
    "columnProps": [
      {
        "_id": "eduTrainSubset-property",
        "id": "property",
        "name": "教育培训性质",
        "oldItemId": "A3705",
        "enable": true,
        "itemType": "C",
        "optionCode": "CE"
      },
      {
        "_id": "eduTrainSubset-method",
        "id": "method",
        "name": "学习方式",
        "oldItemId": "A3710",
        "enable": true,
        "itemType": "C",
        "optionCode": "BM"
      },
      {
        "_id": "eduTrainSubset-startDate",
        "id": "startDate",
        "name": "学习起始时间",
        "oldItemId": "A3715",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "eduTrainSubset-endDate",
        "id": "endDate",
        "name": "学习终止时间",
        "oldItemId": "A3720",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "eduTrainSubset-hours",
        "id": "hours",
        "name": "总学时",
        "oldItemId": "A3725",
        "enable": true,
        "itemType": "N",
        "min": 0,
        "max": 8
      },
      {
        "_id": "eduTrainSubset-content",
        "id": "content",
        "name": "学习内容",
        "oldItemId": "A3730",
        "enable": true,
        "itemType": "S",
        "itemLen": 40
      },
      {
        "_id": "eduTrainSubset-className",
        "id": "className",
        "name": "培训班名称",
        "oldItemId": "A3735",
        "enable": true,
        "itemType": "S",
        "itemLen": 40
      },
      {
        "_id": "eduTrainSubset-organizer",
        "id": "organizer",
        "name": "主办单位",
        "oldItemId": "A3740",
        "enable": true,
        "itemType": "S",
        "itemLen": 70
      },
      {
        "_id": "eduTrainSubset-organizerProperty",
        "id": "organizerProperty",
        "name": "主办单位性质",
        "oldItemId": "A3745",
        "enable": true,
        "itemType": "C",
        "optionCode": "BD"
      },
      {
        "_id": "eduTrainSubset-learningUnit",
        "id": "learningUnit",
        "name": "在学单位",
        "oldItemId": "A3750",
        "enable": true,
        "itemType": "S",
        "itemLen": 70
      },
      {
        "_id": "eduTrainSubset-learningPlaceType",
        "id": "learningPlaceType",
        "name": "在学单位类别",
        "oldItemId": "A3755",
        "enable": true,
        "itemType": "C",
        "optionCode": "CG"
      },
      {
        "_id": "eduTrainSubset-achievement",
        "id": "achievement",
        "name": "教育培训结果",
        "oldItemId": "A3760",
        "enable": true,
        "itemType": "C",
        "optionCode": "HY"
      },
      {
        "_id": "eduTrainSubset-date",
        "id": "date",
        "name": "培训时间",
        "oldItemId": "E3725",
        "enable": true,
        "itemType": "C",
        "optionCode": "HU"
      },
      {
        "_id": "eduTrainSubset-type",
        "id": "type",
        "name": "培训类别",
        "oldItemId": "E3727",
        "enable": true,
        "itemType": "C",
        "optionCode": "HG"
      },
      {
        "_id": "eduTrainSubset-organizerType",
        "id": "organizerType",
        "name": "主办单位类别",
        "oldItemId": "E3731",
        "enable": true,
        "itemType": "C",
        "optionCode": "HE"
      },
      {
        "_id": "eduTrainSubset-abroadFlag",
        "id": "abroadFlag",
        "name": "参加出国出境培训标识",
        "oldItemId": "E3735",
        "enable": true,
        "itemType": "C",
        "optionCode": "IU"
      },
      {
        "_id": "eduTrainSubset-learningPlace",
        "id": "learningPlace",
        "name": "学习地点",
        "oldItemId": "G3701",
        "enable": true,
        "itemType": "S",
        "itemLen": 20
      },
      {
        "_id": "eduTrainSubset-witness",
        "id": "witness",
        "name": "证明人",
        "oldItemId": "G3702",
        "enable": true,
        "itemType": "S",
        "itemLen": 10
      },
      {
        "_id": "eduTrainSubset-degree",
        "id": "degree",
        "name": "留学学位",
        "oldItemId": "G3706",
        "enable": true,
        "itemType": "C",
        "optionCode": "AN"
      }
    ]
  },
  {
    "_id": "retiredSubset",
    "id": "retiredSubset",
    "name": "离休退休子集",
    "oldSetId": "A64",
    "enable": true,
    "columnProps": [
      {
        "_id": "retiredSubset-type",
        "id": "type",
        "name": "离退类别",
        "oldItemId": "A6405",
        "enable": true,
        "itemType": "C",
        "optionCode": "HD"
      },
      {
        "_id": "retiredSubset-date",
        "id": "date",
        "name": "离（退）休时间",
        "oldItemId": "A6410",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "retiredSubset-treatmentLevel",
        "id": "treatmentLevel",
        "name": "离（退）休后享受级别",
        "oldItemId": "A6415",
        "enable": true,
        "itemType": "C",
        "optionCode": "AL"
      },
      {
        "_id": "retiredSubset-paidBy",
        "id": "paidBy",
        "name": "离（退）休费支付单位",
        "oldItemId": "A6420",
        "enable": true,
        "itemType": "S",
        "itemLen": 70
      },
      {
        "_id": "retiredSubset-managedBy",
        "id": "managedBy",
        "name": "离（退）休后管理单位",
        "oldItemId": "A6425",
        "enable": true,
        "itemType": "S",
        "itemLen": 70
      },
      {
        "_id": "retiredSubset-relocation",
        "id": "relocation",
        "name": "异地安置",
        "oldItemId": "A6430",
        "enable": true,
        "itemType": "S",
        "itemLen": 40
      },
      {
        "_id": "retiredSubset-rehireStatus",
        "id": "rehireStatus",
        "name": "返聘情况",
        "oldItemId": "A6435",
        "enable": true,
        "itemType": "C",
        "optionCode": "IL"
      },
      {
        "_id": "retiredSubset-relocationFlag",
        "id": "relocationFlag",
        "name": "异地接收（安置）标识",
        "oldItemId": "E6401",
        "enable": true,
        "itemType": "C",
        "optionCode": "HI"
      },
      {
        "_id": "retiredSubset-relocationDate",
        "id": "relocationDate",
        "name": "异地接收（安置）时间",
        "oldItemId": "E6403",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "retiredSubset-attentActivity",
        "id": "attentActivity",
        "name": "参加各项活动",
        "oldItemId": "E6405",
        "enable": true,
        "itemType": "C",
        "optionCode": "IJ"
      },
      {
        "_id": "retiredSubset-dieDate",
        "id": "dieDate",
        "name": "离、退休死亡时间",
        "oldItemId": "E6407",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "retiredSubset-fee",
        "id": "fee",
        "name": "离退休费",
        "oldItemId": "E6423",
        "enable": true,
        "itemType": "N",
        "min": 0,
        "max": 13
      },
      {
        "_id": "retiredSubset-countryPercent",
        "id": "countryPercent",
        "name": "国家规定的基础退休费比例",
        "oldItemId": "G6401",
        "enable": true,
        "itemType": "N",
        "min": 0,
        "max": 8
      },
      {
        "_id": "retiredSubset-specialPercent",
        "id": "specialPercent",
        "name": "因特殊贡献提高的退休费比例",
        "oldItemId": "G6402",
        "enable": true,
        "itemType": "N",
        "min": 0,
        "max": 8
      },
      {
        "_id": "retiredSubset-otherPercent",
        "id": "otherPercent",
        "name": "因其它情况提高的退休费比例",
        "oldItemId": "G6403",
        "enable": true,
        "itemType": "N",
        "min": 0,
        "max": 8
      },
      {
        "_id": "retiredSubset-countryPercentReason",
        "id": "countryPercentReason",
        "name": "国家规定的基础退休费比例的理由及文件依据",
        "oldItemId": "G6405",
        "enable": true,
        "itemType": "S",
        "itemLen": 50
      },
      {
        "_id": "retiredSubset-specialPercentReason",
        "id": "specialPercentReason",
        "name": "因特殊贡献提高的退休费比例的理由及文件依",
        "oldItemId": "G6406",
        "enable": true,
        "itemType": "S",
        "itemLen": 50
      },
      {
        "_id": "retiredSubset-otherPercentReason",
        "id": "otherPercentReason",
        "name": "因其它情况提高的退休费比例的理由及文件依",
        "oldItemId": "G6407",
        "enable": true,
        "itemType": "S",
        "itemLen": 50
      },
      {
        "_id": "retiredSubset-wageSubsidy",
        "id": "wageSubsidy",
        "name": "按原工资计发的退休生活补贴金额",
        "oldItemId": "G6408",
        "enable": true,
        "itemType": "N",
        "min": 0,
        "max": 13
      },
      {
        "_id": "retiredSubset-wageSubsidyReason",
        "id": "wageSubsidyReason",
        "name": "按原工资计发的退休生活补贴文件依据",
        "oldItemId": "G6409",
        "enable": true,
        "itemType": "S",
        "itemLen": 50
      },
      {
        "_id": "retiredSubset-totalSubsidy",
        "id": "totalSubsidy",
        "name": "退休后各种固定补贴合计",
        "oldItemId": "G6410",
        "enable": true,
        "itemType": "N",
        "min": 0,
        "max": 13
      },
      {
        "_id": "retiredSubset-totalFeeSubsidy",
        "id": "totalFeeSubsidy",
        "name": "退休费加各种固定补贴总金额",
        "oldItemId": "G6411",
        "enable": true,
        "itemType": "N",
        "min": 0,
        "max": 13
      },
      {
        "_id": "retiredSubset-committeeComment",
        "id": "committeeComment",
        "name": "医院或医务劳动鉴定委员会意见",
        "oldItemId": "G6412",
        "enable": true,
        "itemType": "S",
        "itemLen": 50
      },
      {
        "_id": "retiredSubset-reporterComment",
        "id": "reporterComment",
        "name": "呈报单位意见",
        "oldItemId": "G6413",
        "enable": true,
        "itemType": "S",
        "itemLen": 10
      },
      {
        "_id": "retiredSubset-adminComment",
        "id": "adminComment",
        "name": "主管部门审查意见",
        "oldItemId": "G6414",
        "enable": true,
        "itemType": "S",
        "itemLen": 10
      },
      {
        "_id": "retiredSubset-approvalAuthorityComment",
        "id": "approvalAuthorityComment",
        "name": "批准机关意见",
        "oldItemId": "G6415",
        "enable": true,
        "itemType": "S",
        "itemLen": 10
      },
      {
        "_id": "retiredSubset-wageSubsidyPercent",
        "id": "wageSubsidyPercent",
        "name": "按原工资计发的退休生活补贴比例",
        "oldItemId": "G6416",
        "enable": true,
        "itemType": "N",
        "min": 0,
        "max": 11
      },
      {
        "_id": "retiredSubset-retireFee",
        "id": "retireFee",
        "name": "退休费",
        "oldItemId": "G6417",
        "enable": true,
        "itemType": "N",
        "min": 0,
        "max": 13
      },
      {
        "_id": "retiredSubset-retireAddress",
        "id": "retireAddress",
        "name": "退休后住址",
        "oldItemId": "G6418",
        "enable": true,
        "itemType": "S",
        "itemLen": 100
      },
      {
        "_id": "retiredSubset-retireLiveFee",
        "id": "retireLiveFee",
        "name": "退职生活费",
        "oldItemId": "G6419",
        "enable": true,
        "itemType": "N",
        "min": 0,
        "max": 13
      },
      {
        "_id": "retiredSubset-fullPercentFee",
        "id": "fullPercentFee",
        "name": "退休费计发100%情况",
        "oldItemId": "G6420",
        "enable": true,
        "itemType": "S",
        "itemLen": 20
      },
      {
        "_id": "retiredSubset-feePercent",
        "id": "feePercent",
        "name": "退休费计发比例",
        "oldItemId": "G6421",
        "enable": true,
        "itemType": "S",
        "itemLen": 8
      },
      {
        "_id": "retiredSubset-liveSubsidy",
        "id": "liveSubsidy",
        "name": "生活补贴",
        "oldItemId": "G6422",
        "enable": true,
        "itemType": "N",
        "min": 0,
        "max": 13
      },
      {
        "_id": "retiredSubset-wageBefore",
        "id": "wageBefore",
        "name": "退休前标准工资",
        "oldItemId": "G6423",
        "enable": true,
        "itemType": "N",
        "min": 0,
        "max": 13
      },
      {
        "_id": "retiredSubset-increaseDate",
        "id": "increaseDate",
        "name": "退休费增加时间",
        "oldItemId": "G6424",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "retiredSubset-increaseFee",
        "id": "increaseFee",
        "name": "退休费增加金额",
        "oldItemId": "G6425",
        "enable": true,
        "itemType": "N",
        "min": 0,
        "max": 13
      },
      {
        "_id": "retiredSubset-increaseReason",
        "id": "increaseReason",
        "name": "退休费增加金额依据文件",
        "oldItemId": "G6426",
        "enable": true,
        "itemType": "S",
        "itemLen": 30
      },
      {
        "_id": "retiredSubset-mechanismChangeDate",
        "id": "mechanismChangeDate",
        "name": "增长机制变动时间",
        "oldItemId": "G6427",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "retiredSubset-mechanismChangeFee",
        "id": "mechanismChangeFee",
        "name": "增长机制变动增加金额",
        "oldItemId": "G6428",
        "enable": true,
        "itemType": "N",
        "min": 0,
        "max": 13
      },
      {
        "_id": "retiredSubset-mechanismChangeReason",
        "id": "mechanismChangeReason",
        "name": "增长机制变动增加金额依据文件",
        "oldItemId": "G6429",
        "enable": true,
        "itemType": "S",
        "itemLen": 8
      },
      {
        "_id": "retiredSubset-retireJobWage",
        "id": "retireJobWage",
        "name": "退休后职务工资",
        "oldItemId": "G6430",
        "enable": true,
        "itemType": "N",
        "min": 0,
        "max": 25
      },
      {
        "_id": "retiredSubset-retireLevelWage",
        "id": "retireLevelWage",
        "name": "退休后级别工资",
        "oldItemId": "G6431",
        "enable": true,
        "itemType": "N",
        "min": 0,
        "max": 13
      }
    ]
  },
  {
    "_id": "relationshipSubset",
    "id": "relationshipSubset",
    "name": "家庭成员及社会关系子集",
    "oldSetId": "A79",
    "enable": true,
    "columnProps": [
      {
        "_id": "relationshipSubset-name",
        "id": "name",
        "name": "成员姓名",
        "oldItemId": "A7905",
        "enable": true,
        "itemType": "S",
        "itemLen": 30
      },
      {
        "_id": "relationshipSubset-relation",
        "id": "relation",
        "name": "与本人的关系",
        "oldItemId": "A7910",
        "enable": true,
        "itemType": "C",
        "optionCode": "AS"
      },
      {
        "_id": "relationshipSubset-birthday",
        "id": "birthday",
        "name": "成员出生日期",
        "oldItemId": "A7915",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "relationshipSubset-workplaceJob",
        "id": "workplaceJob",
        "name": "工作单位及职务",
        "oldItemId": "A7920",
        "enable": true,
        "itemType": "S",
        "itemLen": 40
      },
      {
        "_id": "relationshipSubset-city",
        "id": "city",
        "name": "所在城市",
        "oldItemId": "",
        "enable": true,
        "itemType": "C",
        "optionCode": "AB"
      },
      {
        "_id": "relationshipSubset-politicalStatus",
        "id": "politicalStatus",
        "name": "成员政治面貌",
        "oldItemId": "A7925",
        "enable": true,
        "itemType": "C",
        "optionCode": "AT"
      },
      {
        "_id": "relationshipSubset-separateStartDate",
        "id": "separateStartDate",
        "name": "夫妻分居起始时间",
        "oldItemId": "A7930",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "relationshipSubset-education",
        "id": "education",
        "name": "成员文化程度",
        "oldItemId": "E7901",
        "enable": true,
        "itemType": "C",
        "optionCode": "AM"
      },
      {
        "_id": "relationshipSubset-age",
        "id": "age",
        "name": "成员年龄",
        "oldItemId": "G7901",
        "enable": true,
        "itemType": "N",
        "min": 0,
        "max": 13
      },
      {
        "_id": "relationshipSubset-notes",
        "id": "notes",
        "name": "备注",
        "oldItemId": "G7902",
        "enable": true,
        "itemType": "S",
        "itemLen": 200
      }
    ]
  },
  {
    "_id": "archivesSubset",
    "id": "archivesSubset",
    "name": "人事档案管理子集",
    "oldSetId": "A85",
    "enable": true,
    "columnProps": [
      {
        "_id": "archivesSubset-archivesId",
        "id": "archivesId",
        "name": "档案编号",
        "oldItemId": "A8505",
        "enable": true,
        "itemType": "S",
        "itemLen": 6
      },
      {
        "_id": "archivesSubset-type",
        "id": "type",
        "name": "档案类别",
        "oldItemId": "A8510",
        "enable": true,
        "itemType": "C",
        "optionCode": "CO"
      },
      {
        "_id": "archivesSubset-inDate",
        "id": "inDate",
        "name": "档案转入时间",
        "oldItemId": "A8515",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "archivesSubset-inPlace",
        "id": "inPlace",
        "name": "档案来处",
        "oldItemId": "A8520",
        "enable": true,
        "itemType": "S",
        "itemLen": 70
      },
      {
        "_id": "archivesSubset-outDate",
        "id": "outDate",
        "name": "档案转出时间",
        "oldItemId": "A8525",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "archivesSubset-outPlace",
        "id": "outPlace",
        "name": "档案去处",
        "oldItemId": "A8530",
        "enable": true,
        "itemType": "S",
        "itemLen": 70
      }
    ]
  },
  {
    "_id": "professionQualSubset",
    "id": "professionQualSubset",
    "name": "职业资格子集",
    "oldSetId": "A86",
    "enable": true,
    "columnProps": [
      {
        "_id": "professionQualSubset-date",
        "id": "date",
        "name": "取得时间",
        "oldItemId": "C8601",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "professionQualSubset-name",
        "id": "name",
        "name": "资格证书名称",
        "oldItemId": "C8602",
        "enable": true,
        "itemType": "S",
        "itemLen": 800
      }
    ]
  },
  {
    "_id": "laborDisputeSubset",
    "id": "laborDisputeSubset",
    "name": "劳务纠纷处理子集",
    "oldSetId": "A87",
    "enable": true,
    "columnProps": [
      {
        "_id": "laborDisputeSubset-date",
        "id": "date",
        "name": "发生时间",
        "oldItemId": "C8701",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "laborDisputeSubset-department",
        "id": "department",
        "name": "发生部门",
        "oldItemId": "C8702",
        "enable": true,
        "itemType": "C",
        "optionCode": "M"
      },
      {
        "_id": "laborDisputeSubset-description",
        "id": "description",
        "name": "事件简要",
        "oldItemId": "C8703",
        "enable": true,
        "itemType": "M",
        "itemLen": 0
      },
      {
        "_id": "laborDisputeSubset-form",
        "id": "form",
        "name": "处理形式",
        "oldItemId": "C8704",
        "enable": true,
        "itemType": "C",
        "optionCode": "ZF"
      },
      {
        "_id": "laborDisputeSubset-result",
        "id": "result",
        "name": "处理结果",
        "oldItemId": "C8705",
        "enable": true,
        "itemType": "S",
        "itemLen": 4
      }
    ]
  },
  {
    "_id": "childSubset",
    "id": "childSubset",
    "name": "子女信息子集",
    "oldSetId": "A88",
    "enable": true,
    "columnProps": [
      {
        "_id": "childSubset-name",
        "id": "name",
        "name": "子女姓名",
        "oldItemId": "C8801",
        "enable": true,
        "itemType": "S",
        "itemLen": 100
      },
      {
        "_id": "childSubset-relation",
        "id": "relation",
        "name": "与本人关系",
        "oldItemId": "C8802",
        "enable": true,
        "itemType": "C",
        "optionCode": "AS"
      },
      {
        "_id": "childSubset-gender",
        "id": "gender",
        "name": "子女性别",
        "oldItemId": "C8803",
        "enable": true,
        "itemType": "C",
        "optionCode": "AX"
      },
      {
        "_id": "childSubset-birthday",
        "id": "birthday",
        "name": "出生年月",
        "oldItemId": "C8804",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "childSubset-onlyCertId",
        "id": "onlyCertId",
        "name": "独生子女证书号",
        "oldItemId": "C8805",
        "enable": true,
        "itemType": "S",
        "itemLen": 100
      },
      {
        "_id": "childSubset-isOnlyChild",
        "id": "isOnlyChild",
        "name": "是否独生子女",
        "oldItemId": "C8806",
        "enable": true,
        "itemType": "C",
        "optionCode": "ZG"
      }
    ]
  },
  {
    "_id": "jobSubset",
    "id": "jobSubset",
    "name": "职称信息子集",
    "oldSetId": "A89",
    "enable": true,
    "columnProps": [
      {
        "_id": "jobSubset-date",
        "id": "date",
        "name": "取得时间",
        "oldItemId": "C8901",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "jobSubset-level",
        "id": "level",
        "name": "职称等级",
        "oldItemId": "C8902",
        "enable": true,
        "itemType": "C",
        "optionCode": "ZH"
      },
      {
        "_id": "jobSubset-certName",
        "id": "certName",
        "name": "职称证书名称",
        "oldItemId": "C8903",
        "enable": true,
        "itemType": "S",
        "itemLen": 100
      }
    ]
  },
  {
    "_id": "trainInfoSubset",
    "id": "trainInfoSubset",
    "name": "培训信息子集",
    "oldSetId": "A90",
    "enable": true,
    "columnProps": [
      {
        "_id": "trainInfoSubset-startDate",
        "id": "startDate",
        "name": "培训起始时间",
        "oldItemId": "C9001",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "trainInfoSubset-content",
        "id": "content",
        "name": "培训内容",
        "oldItemId": "C9002",
        "enable": true,
        "itemType": "S",
        "itemLen": 500
      },
      {
        "_id": "trainInfoSubset-lessonHour",
        "id": "lessonHour",
        "name": "课时",
        "oldItemId": "C9003",
        "enable": true,
        "itemType": "N",
        "min": 0,
        "max": 8
      },
      {
        "_id": "trainInfoSubset-notes",
        "id": "notes",
        "name": "备注",
        "oldItemId": "C9004",
        "enable": true,
        "itemType": "M",
        "itemLen": 0
      },
      {
        "_id": "trainInfoSubset-endDate",
        "id": "endDate",
        "name": "培训结束时间",
        "oldItemId": "C9005",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "trainInfoSubset-lecturer",
        "id": "lecturer",
        "name": "主讲师",
        "oldItemId": "C9006",
        "enable": true,
        "itemType": "S",
        "itemLen": 500
      },
      {
        "_id": "trainInfoSubset-address",
        "id": "address",
        "name": "培训地址",
        "oldItemId": "C9007",
        "enable": true,
        "itemType": "S",
        "itemLen": 500
      }
    ]
  },
  {
    "_id": "shiyeWageSubset",
    "id": "shiyeWageSubset",
    "name": "事业编制工资子集",
    "oldSetId": "A91",
    "enable": true,
    "columnProps": [
      {
        "_id": "shiyeWageSubset-basicWage",
        "id": "basicWage",
        "name": "档案工资",
        "oldItemId": "C9101",
        "enable": true,
        "itemType": "N",
        "min": 0,
        "max": 13
      },
      {
        "_id": "shiyeWageSubset-attendanceBonus",
        "id": "attendanceBonus",
        "name": "岗位责任考勤奖",
        "oldItemId": "C9102",
        "enable": true,
        "itemType": "N",
        "min": 0,
        "max": 13
      },
      {
        "_id": "shiyeWageSubset-schoolAllowance",
        "id": "schoolAllowance",
        "name": "校内津贴",
        "oldItemId": "C9103",
        "enable": true,
        "itemType": "N",
        "min": 0,
        "max": 13
      },
      {
        "_id": "shiyeWageSubset-benefitBonus",
        "id": "benefitBonus",
        "name": "效益奖金",
        "oldItemId": "C9104",
        "enable": true,
        "itemType": "N",
        "min": 0,
        "max": 13
      },
      {
        "_id": "shiyeWageSubset-total",
        "id": "total",
        "name": "合计",
        "oldItemId": "C9105",
        "enable": true,
        "itemType": "N",
        "min": 0,
        "max": 13,
        "virtual": true
      }
    ]
  },
  {
    "_id": "pinyongWageSubset",
    "id": "pinyongWageSubset",
    "name": "聘用制工资子集",
    "oldSetId": "A92",
    "enable": true,
    "columnProps": [
      {
        "_id": "pinyongWageSubset-basicWage",
        "id": "basicWage",
        "name": "基本工资",
        "oldItemId": "C9201",
        "enable": true,
        "itemType": "N",
        "min": 0,
        "max": 13
      },
      {
        "_id": "pinyongWageSubset-jobAllowance",
        "id": "jobAllowance",
        "name": "职务津贴（人事代理）",
        "oldItemId": "C9202",
        "enable": true,
        "itemType": "N",
        "min": 0,
        "max": 13
      },
      {
        "_id": "pinyongWageSubset-benefitBonus",
        "id": "benefitBonus",
        "name": "效益奖金",
        "oldItemId": "C9203",
        "enable": true,
        "itemType": "N",
        "min": 0,
        "max": 13
      },
      {
        "_id": "pinyongWageSubset-total",
        "id": "total",
        "name": "合计",
        "oldItemId": "C9204",
        "enable": true,
        "itemType": "N",
        "min": 0,
        "max": 13,
        "virtual": true
      }
    ]
  },
  {
    "_id": "innerSwitchLibrary",
    "id": "innerSwitchLibrary",
    "name": "内部调转库",
    "oldSetId": "A93",
    "enable": true,
    "columnProps": [
      {
        "_id": "innerSwitchLibrary-inDate",
        "id": "inDate",
        "name": "调入时间",
        "oldItemId": "C9301",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "innerSwitchLibrary-outDate",
        "id": "outDate",
        "name": "调出时间",
        "oldItemId": "C9302",
        "enable": true,
        "itemType": "D"
      },
      {
        "_id": "innerSwitchLibrary-inDepartment",
        "id": "inDepartment",
        "name": "调入部门",
        "oldItemId": "C9303",
        "enable": true,
        "itemType": "C",
        "optionCode": "N"
      },
      {
        "_id": "innerSwitchLibrary-outDepartment",
        "id": "outDepartment",
        "name": "调出部门",
        "oldItemId": "C9304",
        "enable": true,
        "itemType": "C",
        "optionCode": "N"
      },
      {
        "_id": "innerSwitchLibrary-reason",
        "id": "reason",
        "name": "调转原因",
        "oldItemId": "C9305",
        "enable": true,
        "itemType": "S",
        "itemLen": 999
      }
    ]
  }
]