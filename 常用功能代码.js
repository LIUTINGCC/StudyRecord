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

// 取局部样式
// className={styles['last-half-row']}

// 取全局样式
//  className="classname"
//  className={classnames('last-form-item', 'half-row')}

//getFieldDecorator用法
// 需要同时使用Form.create()
const { getFieldDecorator } = this.props.form;
{
  getFieldDecorator(dataIndex, {
    rules: [
      {
        required: true,
        message: `Please Input ${title}!`
      }
    ],
    initialValue: record[dataIndex]
  })(this.getInput());
}

//提示框
<Popconfirm title="Sure to cancel?" onConfirm={() => this.cancel(record.key)}>
  <a>Cancel</a>
</Popconfirm>;

//表单校验, 必输字段为空时返回undefined
form.validateFields((error, row) => {
  if (!error) {
    // do something
    return;
  }
});

// 行内渲染
const columns = {
  title: '操作',
  width: 100,
  dataIndex: 'operation',
  render: (text, record, index) => {
    const isEdting = this.isEdting(index);
    return isEdting ? (
      <span>
        <a onClick={() => this.onSave(index)} style={{ marginRight: 8 }}>
        保存
        </a>
        <Popconfirm title="取消编辑?" onConfirm={() => this.onCancel(index)}>
          <a>取消</a>
        </Popconfirm>
      </span>
      ) : (
      <span>
        <a href="javascript:;" onClick={() => this.onEdit(index)} style={{ marginRight: 8 }}>
        编辑
        </a>
        <a href="javascript:;">删除</a>
      </span>
    );
  },
},
  
  