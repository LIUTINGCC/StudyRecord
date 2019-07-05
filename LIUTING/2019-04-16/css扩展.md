## Sass/LESS/Stylus
[Sass](#sass)

[LESS](#less)

[Stylus](#stylus)


## Sass
### 语法
- 扩展名`.sass`
- 同时支持老的CSS语法(格式严格)
- 可以省略大括号和分号
- 完全依靠严格缩进格式化代码

#### 变量
- 声明变量: `$mainColor: #963`
- 使用变量: `body{ color: $mainColor }`

#### 作用域
- 没有全局变量/所有变量都是全局的

```css
$color: black;
.div1{
    $bg: blue;
    $color: white;
    color: $color; // white
    background-color: $bg; // blue
}
.div2{
    color: $color; // white
}
```

#### 混合/调用

```css
/* 声明 */
@mixin error($border: 1px) {
  border: $border solid #000;
  color: #333;
}
/* 调用 */
.div1-error {
  /* 直接调用 */
  @include error();
}
.div2-error {
  /* 传参调用 */
  @include error(5px)
}

```

### 嵌套

```css
section {
  margin: 10px;
  nav {
    height: 25px;
    a {
      color: #333;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
```

### 继承
- 格式 `@extend + 选择器`

```css
.div1 {
  margin: 10px;
  padding: 5px;
}
p {
  /* 继承div1下的所有样式 */
  @extend .div1;
  color: yellow;
}
```

### 运算
- 可以进行各类运算,包括 加减乘除/与非逻辑运算等

### 颜色函数
- 可以用于任何使用颜色的属性中

```css
/* 变亮10% */
lighten($color, 10%);
/* 变暗10%  */
darken($color, 10%);
/* 饱和度增加10% */
saturate($color, 10%);
/* 饱和度减少10% */
desaturate($color, 10%);
/* 返回灰度色 */
grayscale($color);
/* 返回补色 */
complement($color);
/* 返回反相色 */
invert($color;)
/* 返回两个颜色的50%混合色 */
mix($color1, $color2, 50%)
```

### 导入方式
三者导入方式一样
- `@import "xxx.css"`
- `@import "xxx.sass"`
- `@import "xxx.less"`
- `@import "xxx.stylus"`

### 注释

```css
//这样注释 
```

## 高级应用
### 条件语句
- `@if, @else if, @else`

```css
p {
  @if 1+1 == 2 {
    /* 最终输出 */
    border: 1px solid;
  }
  @if 5 == 3 {
    border: 2px solid;
  }
  @if null {
    border: 3px solid;
  }
}
```

- 支持`@for`循环

```css
@for $i from 1 through 3 {
  .item-#{$i} {
    width:10px * $i;
  }
}
/* 输出 */
.item-1 { width: 10px; }
.item-2 { width: 20px; }
.item-3 { width: 30px; }
```

- 支持`@each` 和 `@while`

```css
@each $item in cat,dog,fish {
  .#{$item}-icon {
    background-image: url('/images/#{$item}.png')
  }
}
/* 输出 */
.cat-icon { ...cat.png }
.dog-icon { ...dog.png }
.fish-icon { ...fish.png }
```

- 支持`@while`

```css
$i: 3;
@while $i > 0 {
  .item-#{$i} {
    width: 10px * $i;
    $i: $i-1;
  }
}
/* 输出 */
.item-3 {
  width: 30px;
}
.item-2 {
  width: 20px;
}
.item-1 {
  width: 10px;
}
```

## LESS
### 语法

- 扩展名`.less`
- CSS的扩展形式,在现有基础上添加了很多额外功能
- 使用CSS标准语法(不可以省略大括号和分号)

#### 变量

- 声明变量: `@mainColor: #963`
- 使用变量: `body{ color: @mainColor }`

#### 作用域

- 和其他语言的作用域类似,从局部到全局依次查找

```css
@color: black;
.div1 {
  @bg: blue;
  @color: white;
  /* white */
  color: @color;
  /* blue */
  background-color: @bg;
}
.div2 {
  color: @color // black
}
```

#### 混合/调用

```css
/* 声明 */
.error(@border: 1px) {
  border:@border solid #666;
  color: #333;
}
/* 直接调用 */
.div1-error {
  .error();
}
/* 传参调用 */
.div2-error {
  .error(5px);
}
```

### 嵌套

```css
section {
  margin: 10px;
  nav {
    height: 25px;
    a {
      color: #333;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
```

### 继承

- 将mixin的样式嵌套到每个选择器
- 缺点是会有重复样式, 这时会出现优先级问题

```css
.div1 {
  margin: 10px;
  padding: 5px;
}
p {
  /* 继承div1所有样式 */
  .div1;
  color: #333;
}
```

### 运算

```css
@baseMargin: 10px;
@doubleMargin: @baseMargin * 2;
@fullPage: 960px;
@halfPage: @fullPage / 2;
```

### 颜色函数
- 和Sass类似,使用@符号
- 可以在任何颜色属性中使用
- 和Sass不同的地方

```css
/* 色调+10 */
spin(@color, 10);
/* //色调-10 */
spin(@color, -10);
/* //混色 */
mix(@color1, @color2);
```

### 注释

```css
//这样注释 
```

## 高级应用
### 条件语句

- 和其他常见关键词不同, 关键词为`when`

```css
.mixin(@a) when (@a >= 10) {
  background-color: black;
}
.mixin (@a) when (@a < 10) {
  background-color: white;
}
//black
.class1 { .mixin(12) }
//white
.class2 { .mixin(6) }
```

- 其他判断表达:
  - `iscolor`
  - `isnumber`
  - `isstring`
  - `iskeyword`
  - `isurl`
  
- 其他条件表达:
  - `and`,`not`,`or`

### 循环语句

- 不支持`for`循环, 但可以用`when`模拟

```css
.loop (@index) when (@index > 0) {
  .myclass {
    z-index: @index;
  }
  //递归
  .loop(@index-1);
}
//停止循环
.loop (0) {}
.loop (3);
//输出
.myclass { z-index:3 }
.myclass { z-index:2 }
.myclass { z-index:1 }
```

## Stylus
### 语法

- 扩展名`.styl`
- 使用缩进控制
- 可以省略大括号和分号
- 同一文件中可以使用不同语法规则

#### 变量

- 声明变量: `mainColor = #963`
- 使用变量: `body{ color mainColor }`
- 也可以直接定义:

```css
#logo
  width w = 100px
  height h = 80px
  margin-left -(w/2)
  margin-top -(h/2)
```

#### 作用域

- 和LESS一样, 从局部到全局

#### 混合/调用

```css
/* //声明 */
error(border = 1px) {
  border: border solid #666;
  color: 333;
}
/* //直接调用 */
.div1-error {
  error();
}
/* //传参调用 */
.div2-error {
  error(5px);
}
```

### 嵌套

```css
section {
  margin: 10px;
  nav {
    height: 25px;
    a {
      color: #333;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
```

### 继承
- 格式 `@extend + 选择器`

```css
.div1 {
  margin: 10px;
  padding: 5px;
}
p {
  /* //继承div1下的所有样式 */
  @extend .div1;
  color: yellow;
}
```

### 颜色函数

- 和其他两者类似, 但不使用符号

### 注释

- 第一种: 使用`//`

```css
//这样注释
```

- 第二种: 使用`/*!  */`

```css
/*!
 *这样也可以注释
 */
```

## 高级应用
### 条件语句

- 和其他类似,但可以省略大括号和分号

```css
box(x, y, margin = false)
  padding y x
  if margin
    margin y x
  body
    box(5px, 10px, true)
```

- 处理条件语句, 还支持后缀条件语句

```css
negative(n)
  error('无效') unless n is a 'unit'
  return yes if n < 0
  no
```

- 支持`for/in`循环

```css
body
  for num in 1 2 3
    foo num
//输出
body {
  foo: 1;
  foo: 2;
  foo: 3;
}
```

- `for/in` 循环中使用 `key-name`

```css
body
  fonts = Impact Arial sans-serif
  for fonts,iin fonts
    foo i fonts
//输出
body{
  foo: 0 Impact;
  foo: 1 Arial;
  foo: 2 sans-serif
}
```