# 4/10 学习

## markdown

# 标题1
## 标题2
### 标题3
#### 标题4
##### 标题5
###### 标题6

### 段落
段落的前后必须是空行
段落1段落内换行<br>第二行<br>第三行

段落2

### 代码或引用内容
- 代码
  ```html
      <div>
          <span></span>
      </div>
      <div></div>
  ```
- 引用
  > 引用
  >>引用嵌套


### 列表
* 无序列表1
  * 二级
    * 三级
    * 最多三级
+ 无序2
  + 二级
    + 三级
- 无序3

1. 有序1
   1. 二级
      1. 三级
   2. 二级
2. 有序2
   1. 二级
   2. 二级
3. 有序3
   
### 分割线,至少三个
***
---
___


### 链接
- 普通链接: [Google](http://www.google.com/)

- 短链接: <http://www.google.com/>

- 插入图片/链接前一个叹号
![GitHub](https://avatars2.githubusercontent.com/u/3265208?v=3&s=100 "GitHub,Social Coding")

- 图片链接: ![GitHub][github](https://avatars2.githubusercontent.com/u/3265208?v=3&s=100 "GitHub,Social Coding")
  
- 本地图片: [icon.jpg](../images/ccc.png)

- 斜体文字
*斜体* _斜体_

- 加粗文字
**加粗** __加粗__

- 删除线
~~内容~~

### 表格
| 表头 | 表头 | 表头 | 表头 |
| :---- | ----: | :----: | ----- |
| 单元格 | 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格 | 单元格 |

### 任务列表
- [ ] Eat
- [x] Code
  - [x] HTML
  - [x] CSS
  - [x] JavaScript
- [ ] Sleep



----

## UI规范

### 表单部分
1. 表单比例：
    ```css
      labelCol: { span: 9 },
      wrapperCol: { span: 15 }
    ```
2. 水槽：`gutter={12}`
3. 按钮组：只需加`className="search-btn-more"`
   1. 距左侧30px
   2. 按钮间：`margin-right: 8px`
   3. 更多查询/收起查询
   4. 主按钮居右原则
   5. 只有顶部按钮要图标，表格内和content中按钮不要图标，纯文字
4. `more-fields-form`: `表单内容width = 100%; margin-bottom = 16px`

### 表格部分
1. 除开金额居右，所有列居左
2. 表头不允许换行，要考虑低分辨率下列宽
3. 关于scrollX

### 详情页的表单部分

#### 表单比例和颜色
1. 表单比例**9: 15, label居左**(详情页的表单和展开栏我写全局样式todo)
2. 颜色`#666: #333`
3. 较长的输入框和文本域整个表单占`50%`,视情况给span={14-16}

#### 关于只读和可写
1. 禁用状态就是展示态(所以不存在必输)，输入和非输入状态严格区分
2. [参考](http://localhost:8000/sfin/payable-invoice-apply/centralizedDetail/177)

#### 关于内容区块间距和行高
1. 折叠面板文字距左边16px，下面label对齐，右侧展开和图标间以8px按钮间距
2. 大块间间隔24px(折叠面板间),内容距边框16px
3. 只读内容`height=fontSize + 8px + marginBottom 16px`
4. 可写行高与表单高度一致，垂直对齐
5. `ant-tabs-tab-active ant-tabs-tab: margin: 0 16px 0 0;`

----

## JavaScript知识补充
- parseInt 从第一位开始解析数字, 如果第一位非数字, 则返回NaN
```js
parseInt('string',10) // 第二个参数指定数字的进制
```

- parseFloat 没有第二个参数, 且只解析第一个小数点后的数字, 遇到第二个小数点则停止解析
```js
parseFloat('string') // 只解析十进制数, 没有第二个参数
```


- 在调用数值的 toString()方法时，可以传递一个参数：输出数值的基数。默认情况下，toString()方法以十进制格式返回数值的字符串表示。而通过传递基数，toString()可以输出以二进制、八进制、十六进制，乃至其他任意有效进制格式表示的字符串值。
```js
var num = 10; 
alert(num.toString()); // "10" 
alert(num.toString(2)); // "1010" 
alert(num.toString(8)); // "12" 
alert(num.toString(10)); // "10" 
alert(num.toString(16)); // "a" 
```

- String() 能够将任何类型的值转换为字符串
```js
var value1 = 10; 
var value2 = true; 
var value3 = null; 
var value4; 
alert(String(value1)); // "10" 
alert(String(value2)); // "true" 
alert(String(value3)); // "null" 
alert(String(value4)); // "undefined" 
```

- 加减运算符
  **在对非数值应用一元加操作符时，该操作符会像 Number()转型函数一样对这个值执行转换:**
  - 在应用于一个包含有效数字字符的字符串时，先将其转换为数字值，字
符串变量变成数值变量
  - 在应用于一个不包含有效数字字符的字符串时，将变量的值设置为 NaN。字符串变量变成数值变量
  - 在应用于布尔值时，先将其转换为 0 或 1 再执行加减 1 的操作。布尔值变量变成数值变量。
  - 在应用于浮点数值时，执行加减 1 的操作
  - 在应用于对象时，先调用对象的 valueOf()方法以取得一个可供操作的值。然后对该值应用前述规则。如果结果是 NaN，则在调用 toString()方法后再应用前述规则。对象变量变成数值变量

-  逻辑非
**可以应用于 ECMAScript 中的任何值。无论这个值是什么数据类型，这个操作符都会返回一个布尔值。逻辑非操作符首先会将它的操作数转换为一个布尔值，然后再对其求反。**
   - 如果操作数是一个对象，返回 false；
   - 如果操作数是一个空字符串，返回 true；
   - 如果操作数是一个非空字符串，返回 false；
   - 如果操作数是数值 0，返回 true；
   - 如果操作数是任意非 0 数值（包括 Infinity），返回 false；
   - 如果操作数是 null，返回 true；
   - 如果操作数是 NaN，返回 true；
   - 如果操作数是 undefined，返回 true。

    ```js
    alert(!false); // true 
    alert(!"blue"); // false 
    alert(!0); // true 
    alert(!NaN); // true 
    alert(!""); // true 
    alert(!12345); // false 
    ```


