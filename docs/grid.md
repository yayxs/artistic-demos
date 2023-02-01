译文 一份 CSS 网格的完整指南

## 介绍 CSS Grid

CSS 网格布局（又称 "网格 "或 "CSS 网格"），是一种基于二维网格的布局系统，与过去的任何网页布局系统相比，它完全改变了我们设计用户界面的方式。CSS 一直被用来布局我们的网页，但它从来没有做得非常好。首先，我们使用了表格，然后是浮动、定位和 inline-block，但所有这些方法本质上都是黑科技，遗漏了很多重要功能（比如垂直居中）。Flexbox 也是一个非常棒的布局工具，但它的单向流有不同的使用情况--而且它们实际上配合得相当好 Grid 是第一个专门为解决布局问题而创建的 CSS 模块，在我们制作网站的过程中，我们一直在用黑客手段来解决这些问题

## 初步认识 CSS Grid

截至 **2017 年 3 月**，大多数浏览器都对 CSS 网格提供了原生的、未修复的支持。Chrome（包括安卓系统）、Firefox、Safari（包括 iOS 系统）和 Opera。另一方面，Internet Explorer 10 和 11 支持它，但它是一个过时的语法的旧实现。现在是使用网格构建的时候了!

要开始使用，你必须用 `display: grid` 定义一个容器元素为网格，用 `grid-template-columns` 和 `grid-template-rows` 设置列和行的大小，然后用 `grid-column` 和 `grid-row` 将其子元素放入网格。与 flexbox 类似，网格项的源顺序并不重要。你的 CSS 可以以任何顺序放置它们，这使得用媒体查询重新排列你的网格变得非常容易。想象一下，定义整个页面的布局，然后完全重新排列以适应不同的屏幕宽度，只需几行 CSS 即可。网格是有史以来最强大的 CSS 模块之一。

1、一个网格可以用行和列来定义。你可以选择如何确定这些行和列的大小
2、网格容器的直接子元素将被自动放置在这个网格上
3、网格上的线和区域都可以被命名

## 网格布局中的重要概念术语

1、网格容器 **Grid Container**

```css
.container {
  display: grid;
}
```

```html
<div class="container">
  <div class="item item-1"></div>
  <div class="item item-2"></div>
  <div class="item item-3"></div>
</div>
```

2、直接网格子项目。其中`sub-item-1` 并不是网格项目

```html
<div class="item item-1"></div>
```

```html
<div class="container">
  <div class="item item-1">
    <div class="sub-item-1"></div>
  </div>
  <div class="item item-2"></div>
  <div class="item item-3"></div>
</div>
```

3、网格线 **Grid Lines**

构成网格结构的分割线。它们可以是垂直的（"列网格线"）或水平的（"行网格线"），位于行或列的两侧。这里的黄线就是列网格线的一个例子。（列网格线：column grid lines）（水平网格线：row grid lines）
线在水平和垂直方向上运行。网格有四列，有五条列显，包括最后一列之后的那条线

4、`Grid tracks`

轨迹是指两条网格线之间的空间，一条行轨道位于两条行线之间，一条列轨道位于两条列线之间，

5、`Grid cell`

网格单元是网格上最小空间。由行轨和列轨的交叉点定义。像表格的单元格。

6、`Grid area`

几个 `Grid cell` 单元在一起。网格区域是通过使一个项目横跨多个轨道创建的

7、`Gaps`
tracks 之间的间隔

8、`Rows and columns`

```css

```

## CSS Grid 属性

### 应用在 Grid Container 上的属性

1、`display`

`grid` 生成块状的网格
`inline-grid` 生成内联级的网格

2、`grid-template-columns` `grid-template-rows`
用一个以空格分隔的数值列表定义网格的列和行。这些值代表轨道的大小，它们之间的空间代表网格线。

3、`grid-template-areas`
通过引用用 grid-area 属性指定的网格区域的名称，定义一个网格模板。重复一个网格区域的名称会使内容跨越这些单元格。一个句号表示一个空单元。语法本身提供了一个可视化的网格结构。

4、`grid-template`

在一个声明中设置 grid-template-rows、grid-template-columns 和 grid-template-areas 的简写。

### 应用在 Grid item 上的属性

https://cssgrid-generator.netlify.app/
https://css-tricks.com/snippets/css/complete-guide-grid/
