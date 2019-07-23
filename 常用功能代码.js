// Lov的使用
<Form.Item>
  {getFieldDecorator("companyName")(
    <Lov code="SSRC.USER_ORGANIZATIONS" queryParams={{ userId }} />
  )}
</Form.Item>;

// 各种遍历方法的使用(需要补充)
// map
array.map(item => {
  return {
    team: item.teamMeaning,
    ...item
  };
});

// 简洁写法
array.map(item => ({
  team: item.teamMeaning,
  ...item
}));

// 时间选择框
const columns = [
  {
    title: intl.get(`${promptCode}.modal.inquiryHall.startTime`).d("开始时间"),
    dataIndex: "quotationStartDate",
    width: 120,
    render: val => dateTimeRender(val)
  }
];

// 表格条件渲染
if (subjectMatterRule === "PACK") {
  const columnsArr = [
    {
      title: intl
        .get(`${promptCode}.modal.inquiryHall.sectionNum`)
        .d("标段/包编号"),
      dataIndex: "sectionNum",
      width: 150
    },
    {
      title: intl
        .get(`${promptCode}.modal.inquiryHall.sectionName`)
        .d("标段/包名称"),
      dataIndex: "sectionName",
      width: 150
    }
  ];
  columns.splice(1, 0, ...columnsArr);
}

// 值集的用法
const tableCode = {
  expertMemberMeaning: "SSRC.EXPERT_MEMBER",
  leaderFlag: "SSRC.EXPERT_LEADER",
  teamMeaning: "SSRC.EXPERT_TEAM"
};

const columns = [
  {
    title: intl.get(`${promptCode}.modal.inquiryHall.startTime`).d("开始时间"),
    dataIndex: "quotationStartDate",
    width: 120,
    render: (val, record) => {
      getFieldDecorator("leaderFlag", {})(
        <Select>
          {tableCode.leaderFlag.map(item => (
            <Option key={item.value} value={item.value}>
              {item.meaning}
            </Option>
          ))}
        </Select>
      );
    }
  }
];

// 请求接口
// query: 查询参数

// ID放入path里
// ${params.consumerGroupId}

// 删除保存: 数据放入body