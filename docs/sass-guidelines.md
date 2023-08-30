说起`sass`，（或者说 scss）我也有一些学习过程中的误区，在这里分享给大家。整理这篇是因为我在看 `github-awesome-css` 发现了一篇 [https://sass-guidelin.es/zh/](https://sass-guidelin.es/zh/)

在写`vue` 项目的时候，大多是使用`scss`。大概像这样使用：在 vue 中有相关的描述 **单文件组件 CSS 功能**

```scss
<style lang="scss" scoped>
.tab-wrapper {
  background-color: #fff;
  padding: 0 20px 0 10px;
}
<style>
```

使用时有一些注意事项，不过好处是不需要任何的 polyfill。关于预处理器 [预处理器](https://cn.vuejs.org/api/sfc-spec.html#pre-processors)

> lang 在任意块上都能使用，比如我们可以在 <style> 标签中使用 Sass 或是 <template> 中使用 Pug：

```scss
<style lang="scss">
  $primary-color: #333;
  body {
    color: $primary-color;
  }
</style>
```

随着写`scss` 写的多了，在深度了解的过程中有几个误区：

1、没有明白 `scss` 或者 `less` 都是基于 css 的，不应花较多的时间在学习上层样式方案上

2、尝试看了一些视频教程，但是没有过多的实际操练

接下来就看看有关 `scss` 的一些基本指南

## 基本概念

在实际项目开发中，我们已经渐渐的不去使用原始的`css`，反而使用较为方便的预处理器`sass`，`less`，也就是下文咱们即将要提到的。既然是前端开发者不得不掌握的一门技术：写样式，即使现在是`工程化` `模块化` 开发，不过我们逃不开的还是最基础的样式。我们知道常见的`css预处理器` 有三种（其核心没有本质的区别）：

- `sass` :scss 编译稍慢 是一种动态样式语言，语法是缩排的，比 css 多出好些功能，像变量、嵌套、运算、混入、继承、颜色出路、函数等
- `less`: 基于 node 入门简单些 less 也是一种动态的样式语言，受 sass 影响较大，赋予了动态语言的特性，如变量，继承，运算，函数，less，既可以在客户端运行，也可以在服务器端运行
- `stylus`:产生于 node 社区，人气相对来说低一点，但是也是一种革命性的新语言，提供一个高效，动态、和使用表达方式来产生 css，支持缩进和常规的样式书写规则

主要是为了解决一些权重的问题等等，不过最终使用的还是 css 样式 只是借助第三方的方式更便捷的写样式而已。是基于`css` 的另一种语言。通过工具编译为`css`，添加了很多 css 的不具备的特性，其意义是提升 css 文件的组织

- 从变量的角度

  - sass 声明变量是`$`开头 尽量避免混淆
  - less 是用`@`开头 尽量接近 css 的习惯
  - stylus 声明变量没有什么限定

- 从`mixin`的角度，详见上文描述
- 作用域
  - sass:三者最差、不存在全局变量的概念、
  - less:最近的一次更新的变量有效
  - stylus：sass 的处理方式与 stylus 相同

## 有关 sass

Sass 是一种被编译为 CSS 的样式表语言。它允许你使用变量、嵌套规则、混合元素、函数等等，所有这些都是与 CSS 完全兼容的语法。Sass 有助于保持大型样式表的井然有序，并使其易于在项目内和项目间共享设计。

如果你想在非 Ruby 项目中使用，比如 NodeJS，`node-sass` 会是个不错的选择。使用 LibSass 最主要的优势还是因为它的速度，而且比 Ruby Sass 更快。

## Sass 与 SCSS 是什么关系

sass 的缩排语法，对于写惯了 css 的前端开发者来说，也不能将 css 代码加入到 sass 里，sass3 就变成了 scss，与之前兼容 ，只是用`{}`取代了原来的缩进

- `sass` 空白敏感语法通过缩进以摆脱大括号、分号和其他符号，从而实现了简洁凝练的语法格式
- `scss` SCSS 则更容易学习，因为它只是在 CSS 上添加了一点点额外的功能。

## 预处理器

相对于 `css` 而言更强大了一些，因为在 css 的预处理器中添加了类似于编程语言的一些特性，比如说变量、混合宏、扩展、逻辑运算等。就早期而言，写 css 是不存在这些的这些特性给我们写 Css 和维护带来了很大的方便之处。至于`sass` 的主要竞争对手是 `less`

- less 是因为在 `bootstrap v4` 中被使用 声名鹊起
- stylus 学习难度稍高

## 后处理器工具

本篇不详细说后处理器，例如 `postCSS` `cssnext`

## 一些语法

1、基础的样式语法格式

```css
.foo {
  /* 长度在80个字符宽度 */
  display: block;
  overflow: hidden;
  /* 使用两个空格代表缩进、不使用tab键 */
}
```

2、在入口文件使用 `@charset` 指令使用 `utf-8` 文件的第一句

```scss
@charset 'utf-8';
```

3、作为 css 的值

```scss
// Yep
$font-type: sans-serif;

// Nope
$font-type: "sans-serif";
```

4、命名使用 `CSS-y`

以`$`开头

```scss
$my-color: #fff;
$my-border: 1px solid $my-color;
.box {
  background-color: $my-color;
}
h1 {
  border: $my-border;
}
```

```scss
$name-baseline: 1.5rem;

@mixin hide($clamp: 1) {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: $clamp;
  /*! autoprefixer: ignore next */
  -webkit-box-orient: vertical;
}

@function opposite-direction($direction) {
  // …
}
```

5、命名空间

```scss
@function su-rainbow($unicorn) {
  // …
}
```

6、注释

```scss
/**
 * Helper class to truncate and add ellipsis to a string too long for it to fit
 * on a single line.
 * 1. Prevent content from wrapping, forcing it on a single line.
 * 2. Add ellipsis at the end of the line.
 */
.ellipsis {
  white-space: nowrap; /* 1 */
  text-overflow: ellipsis; /* 2 */
  overflow: hidden;
}
```

7、结构

`sass` 重载了`@import` 指令

8、混合宏

常用的功能之一，减少重复组件的关键。它们可以包含所有的 CSS 规则，并且在 Sass 文档允许的任何地方都表现良好。它们甚至可以像函数一样接受参数。不用多说，充满了无尽的可能。

```scss
/// 清除浮动
@mixin clearfix {
  &::after {
    content: "";
    display: table;
    clear: both;
  }
}
```

```css
.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  clear: both;
  height: 0;
  content: "";
}
```

设置大小

```scss
@mixin size($width, $height: $width) {
  width: $width;
  height: $height;
}
```

9、无参数混合宏和有参数的混合宏

```scss
// Yep
.foo {
  @include center;
}
```

```scss
.wrapper {
  background: lighten($bgColor, 40%);

  .nav {
    // 显示的调用
    @include block($fontSize);
  }
  .content {
    @include block($fontSize + 2px);
    &:hover {
      background: red;
    }
  }
}
```
