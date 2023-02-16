# 玩转 css 的艺术之美

这本册子让我觉得`css`并没有那么想象中那么简单。当买了之后，差不多都看了一遍，后边也抽内容看了几次。这次做个笔记

在项目中比较“头痛”的就是怎么修改三方组件库的样式，如果使用 `element` 例如

使用 `deep` 来深度选择

```scss
/deep/ .el-card__body {
  padding: 0px;
  padding-bottom: 10px;
}
/deep/ .table-container {
  margin-top: 0px;
}
```

要么就是使用 `important`，增加权重计算值

```scss
.el-table:not(.el-table--scrollable-x) {
  .el-table__fixed-right {
    height: 100% !important;
  }
}
```

当然了`css`并不是只做这些，
先达成一致的观念，css 是值得看的

作者让使用`@yangzw/bruce-app` 初始化项目，**我觉得可以不用**
作者让在`vscode` 的编辑器安装 `Stylelint` [https://github.com/stylelint/stylelint](https://github.com/stylelint/stylelint) **我觉得有必要** 这个是格式化 css 代码的

1、能用 css 时实现的效果都优先使用

说实话，在其它书中也谈到`浏览器`的历史，我曾经想弄一个箭头，梳理一下发展史。不过浏览器的发展比较曲折离奇，这里我们知道谷歌浏览器就行了，css 的样式可以在浏览器中的页面看到效果

1、浏览器中有`解析器` 将 css 解析为 `CSS OM 树结构`
2、回流：改变几何属性的渲染
3、重绘：改变外观属性
4、回流的时候几何发生变化、随之重绘就发生了；重绘的时候有可能只是颜色变化了，回流不一定发生
5、兼容性：网页兼容性

> 怎么磨平浏览器中的默认样式？

```css
* {
  margin: 0;
  padding: 0;
}
```

看一看 `normalize.css`

1、文档相关

```css
html {
  /* html 的文档行高 1.15 */
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}
```

2、块状视图

```css
body {
  /* 把body 的margin 去除 */
  margin: 0;
}
```

```css
main {
  /* 除了 Internet Explorer，所有主流浏览器都支持 <main> 标签。 */
  display: block;
}
```

```css
/* 纠正 "section "和 "article "中的 "h1 "元素的字体大小和空白。
* 在Chrome、Firefox和Safari浏览器中的 "文章 "上下文中的 "h1 "元素的字体大小和边距。 */
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
```

写一些浏览器的私有属性

```css
/* 标准的写法放在最后边 */
transform: translate(10px, 10px);
```

元素的大小发生了变化：`margin` `padding` `border` `width` `height`
布局：`display` `float` `position` `flex` `grid`

## 4 盒模型 box-sizing

1、盒子模型

- `content-box` 默认是标准盒模型 W3C 的标准
- `border-box` 怪异盒模型 IE 盒子模型

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

盒模型计算盒子尺寸的大小，一般开发中不使用默认盒模型

2、`display` 视觉格式化模型

- 块级元素：block、list-item、table、flex 、grid
- 行内元素：inline inline-block 、inline-table inline-flex inline-grid 行内元素默认宽度 auto

3、格式化上下文

- `BFC` 网页中一个独立隔离的渲染区域、容器中的子节点不会在布局中影响到外面的节点
- `IFC` 行内格式化上下文
- `FFc` 弹性格式化上下文
- `GFC` 格栅格式化上下文

4、文档流

文档流的排列方式、会有排版 5px 的空隙、行内元素统一底边垂直对齐、以及脱离文档流、

浮动元素：`float:left/right`
定位布局：`position:absolute/fixed`

5、节点的显示隐藏问题

- visibility:hidden
- display:none
- opacity:0
- position:absolute;opacity:0

6、层叠上下文

[阶段小结]这块提到很多名词的成因，造成的影响，等真正在页面中才好体会

## 5 样式计算

1、样式写在标签内，不利于 SEO 和后期的维护

```html
<p style="color:#fff">is p</p>
```

2、接着就是**权重** 的不同值，

- 10000 !important
- 1000 内联
- 100 ID
- 10 类选择器 伪类选择器 属性选择器
- 1 标签选择器、伪元素选择器
- 0 通配符 、兄弟、后代选择器

3、长度单位

css 延伸出越来越多的长度单位 `px` `mm` `cm` `em` `rem`

4、屏幕分辨率

屏幕分辨率指的是 横向纵向中的像素点、单位 px 分辨率确定计算机屏幕中显示多少信息，水平与垂直像素衡量

1920 1080 水平方向 1920 个像素数、垂直方向 1080 像素数。同一网页中以 px 作为长度单位 在不同的分辨率中显示的大小可能不同

- `em` 当前节点字体的宽度、一个`M`的宽度 相对父节点
- `rem` 默认字体宽度 准确来说是一个 相对根节点

[阶段小结]

## 6 布局方式

1、普通的布局方式：`display:block/inline`
2、浮动布局：`float:left/right`
3、定位布局：`position`
4、表格布局
5、弹性布局
6、多列布局
7、格栅布局
8、响应式布局

## 7 函数计算

- 基础函数 url rgb rgba
- 其他函数 calc cubic-bezier linear-gradient

颜色函数 rgb hsl hsla color
属性函数 attr var
数学函数 calc max min
背景函数 url element image-set
滤镜函数 blur
图形函数 circle inset path
变换函数

- matrix 矩阵
- matrix3d 3D 矩阵
- rotate() 旋转
- rotate3d 3D 旋转
- rotateX X 轴旋转
- rotateY Y 轴旋转
- rotateZ Z 轴旋转
- scale 缩放
- scale3d 3D 缩放
- scalex x 轴缩放
- scaley y 轴缩放
- scaleZ Z
- skew 扭曲
- skewx X 轴扭曲
- skewY Y 轴扭曲
- translateX X 轴位移
- translateY Y 轴位移
- translayeZ Z 轴位移

可以通过下面的方式画一个五角星

```html
<li class="star" style="--index: 0"></li>
```

```css
li {
  --angle: calc(var(--index) / var(--count) * 1turn);
  margin: 10px;
  width: 100px;
  height: 100px;
  background-color: #3c9;
  filter: hue-rotate(var(--angle));
}
li.star {
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
}
```

## 8 变量计算

`css变量` 又称 css 自定义属性
变量的好处
1、减少样式代码的复用性
2、增加样式代码的扩展性
3、浏览器原生特性、无需经过任何转译直接运行
4、dom 对象一员、便利 css 与 js 之间的联系
