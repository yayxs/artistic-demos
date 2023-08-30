单单从 CSS 的书籍来看不像 HTML 比较少。 看 css 的话有几本不错的书，比如《css 揭秘》等。那看一下仓库呢

- [https://github.com/search?o=desc&q=css&s=stars&type=Repositories](https://github.com/search?o=desc&q=css&s=stars&type=Repositories)

## animate-css/animate.css

一个跨浏览器的 CSS 动画库。就像一件简单的事情一样容易使用。

- [https://github.com/animate-css/animate.css](https://github.com/animate-css/animate.css)

在元素上添加一个类名，`animate__animated`。源码中有个文件 `startAnimations.mjs`

```js
const startAnimation = () => {
  const title = document.querySelector(".callout-title");
  const subTitle = document.querySelector(".callout-subtitle");
  const sidebar = document.querySelector(".animation-list");
  const button = document.querySelector(".callout-showList");

  const titleAnimation = "zoomInDown";
  const subTitleAnimation = "zoomInDown";
  const buttonAnimation = "zoomInUp";
  const sidebarAnimation = "fadeInRight";

  title.classList.add("animate__animated", `animate__${titleAnimation}`);
  subTitle.classList.add("animate__animated", `animate__${subTitleAnimation}`);
  button.classList.add("animate__animated", `animate__${buttonAnimation}`);
  sidebar.classList.add("animate__animated", `animate__${sidebarAnimation}`);
};
```

所有的源代码在`source` 文件夹下，比如 `zooming_entrances/zoomIn.css`

```css
@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}

.zoomIn {
  animation-name: zoomIn;
}
```

## CSS guidelines

1、两个空格不使用`tab`
2、80 个字
3、多行 css
4、有效使用空格
5、开始一个新的

```css
/*------------------------------------*\
  #SECTION-TITLE
\*------------------------------------*/

.selector {
}
```

6、命名的惯例非常简单，使用 `-` 横线

```css
.sub-content {
}
```

```css
.person {
}
/* 是一个元素 */
.person__head {
}
/* 是一个修饰词 */
.person--tall {
}

.page {
}
.content {
}
.sub-content {
}
.footer {
}
.footer__conyright {
}
```
