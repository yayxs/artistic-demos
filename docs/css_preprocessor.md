---
title: CSS预处理器与企业级通用Mixin
---

# CSS 预处理器与企业级通用 Mixin

## 写在前面

或多或少我们都知道`sass`很便捷，支持嵌套的语法，接下来的内容重点分享`less` 与`sass` 简单说说三者的联系与区别

```scss
body {
  background-color: pink;
  ul {
    li {
      font-size: 20px;
    }
  }
}
```

编译之后，还是一般的 css

```css
body {
  background-color: pink;
}
body ul li {
  font-size: 20px;
}
```

- css 用一门专门的编程语言，进行 web 页面的样式设计，然后再编译成正常的 css 文件，以供项目是用，
- 让 css 更加的简洁，适应性更强、可读性更佳、更易于代码的维护

## 核心特性用法

- 嵌套
- 变量和计算 减少重复的代码
- extend 和 mixin 代码片段
- 循环 适用于复杂的样式
- import css 文件的模块化

## 安装

### less 的安装

```
<!-- 可以全局安装 -->
npm i -g less
```

### sass 的安装

对于前端开发者来说,可以直接在`node`环境安装,文件的后缀名为`scss`

```bash
 npm install -g sass
# 或者 npm i node-sass
 sass --version  // 1.29.0 compiled with dart2js 2.10.3
```

在基于`node` 的环境下，直接全局安装就可以使用，当然在`windows`以及`mac` 平台上又有一些差异，这里可以查阅官网
[sass 英文官方网站](https://sass-lang.com/install)

**安装完成**
![20200205182552.png](https://raw.githubusercontent.com/yayxs/Pics/master/img/20200205182552.png)

## 嵌套

- 目的：便于维护、层次分明、可视化
- 使用：直接一层一层的嵌套

### less 的嵌套

和`sass` 大致相同

### sass 的嵌套

```scss
li {
  a {
    display: block;
    &:hover {
      background-color: pink;
    }
  }
}
```

**编译后的结果如下**

```css
li a {
  display: block;
}
li a:hover {
  background-color: pink;
}
li li-text {
  font-size: 20px;
}

/*# sourceMappingURL=demo.css.map */
```

## 变量

- 目的 ：为了能够在样式表中方便的访问
- 使用：存储颜色、字体，背景颜色等等，

### less 中变量

注：以下案例中的`lighten()`是一个颜色函数，相似的还有

```scss
$light-color: lighten($base-color, 30%);
$dark-color: darken($base-color, 30%);

$saturate-color: saturate($base-color, 50%);
```

```less
// 变量部分 以`@`开头
@fontSize: 12px;
@bgColor: red;

body {
  padding: 0;
  margin: 0;
}

.wrapper {
  background: lighten(@bgColor, 40%);

  .nav {
    font-size: @fontSize;
  }
  .content {
    // 使用计算
    font-size: @fontSize + 2px;
    &:hover {
      background: @bgColor;
    }
  }
}
```

### sass 中的变量

## mixin

### less 中的 mixin

```less
// 定义混入 假使我们定义一个块
.block(@fontSize) {
  font-size: @fontSize;
  border: 1px solid #ccc;
  border-radius: 4px;
}

// 使用混入
div {
  .block(@fontSize + 22px);
}
```

## extend

### less 中的 extend

```less
@fontSize: 12px;
@bgColor: red;

.block {
  font-size: @fontSize;
  border: 1px solid #ccc;
  border-radius: 4px;
}

body {
  padding: 0;
  margin: 0;
}

.wrapper {
  background: lighten(@bgColor, 40%);

  .nav:extend(.block) {
    color: #333;
  }
  .content {
    &:extend(.block);
    &:hover {
      background: red;
    }
  }
}
```

### sass 中的 extend

```scss
.wrapper {
  background: lighten($bgColor, 40%);

  .nav {
    @extend .block;
    color: #333;
  }
  .content {
    @extend .block;
    &:hover {
      background: red;
    }
  }
}
```

## import

首先默认的 css 也是可以`@import` 但是默认是不会做过多的处理，这就会造成过多的`http` 连接数

### less 中的 import

```less
@import "xxx.less";
```

### sass 中的 import

和`less` 大体一样，不过多的分析

## 扩展：企业级项目中的`Mixin`

### 文本溢出不换行

```css
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

### 修改滚动条的样式

```scss
@mixin scrollbar {
  max-height: 88vh;
  margin-bottom: 0.5vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(144, 147, 153, 0.3);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(144, 147, 153, 0.3);
  }
}

@mixin base-scrollbar {
  &::-webkit-scrollbar {
    width: 13px;
    height: 13px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.4);
    background-clip: padding-box;
    border: 3px solid transparent;
    border-radius: 7px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-track:hover {
    background-color: #f8fafc;
  }
}
```

### Vue 项目的过度动画

```scss
@charset "utf-8";

.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: $base-transition;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
```

### 弹性盒

```scss
@mixin flexbox($jc: space-between, $ai: center, $fd: row, $fw: nowrap) {
  display: flex;
  display: -webkit-flex;
  flex: 1;
  justify-content: $jc;
  -webkit-justify-content: $jc;
  align-items: $ai;
  -webkit-align-items: $ai;
  flex-direction: $fd;
  -webkit-flex-direction: $fd;
  flex-wrap: $fw;
  -webkit-flex-wrap: $fw;
}
```
