- 衬线字体 serif 宋体
- 非衬线字体 微软雅黑

### font-family

字体族名
通用字体族名

```css
font-family: Avenir, Helvetica, Arial, sans-serif;
```

```css
font-family: system-ui, -apple-system, BlinkMacSystemFont, segoe ui, Roboto,
  Helvetica, Arial, sans-serif;
```

- sans-serif 兜底的方案

- **PingFang SC** 无衬线的字体 中文文字的排版

### 字体和字体族@font-face

保证字体能够显示，一般情况下不使用中文字体，一个字体找不到接着找来进行渲染，也可以显示自定义的字体（网络字体）

```css
body {
  /* 单个的平台独有  多个平台都有 字体族 */
  font-family: 'aa', 'bbb', // 系统找不到就接着往后找,但是字体族是不加引号的;;
}
```

### 自定义的字体

```css
@font-face {
  /* 自己定义的名字是 my */
  font-family: 'CUSTOM';
  /* format 是字体的格式化类似于 */
  src: url('./xxx.ttf'); // url 可以是远程的地址
}
h3 {
  font-family: CUSTOM;
}
```

https://learn.microsoft.com/zh-cn/typography/
