## **linear-gradient() 渐变函数**

1、渐变指两种或多种颜色在特定区域内平滑过渡的效果，值得注意的是每个渐变函数都必须在 `background` 或 `background-image` 上使用，
<br />

2、渐变通常是一种颜色逐渐淡入另一种颜色，但在 CSS 中，您可以控制渐变发生的各个方面，从颜色方向（任意数量）到颜色变化发生的位置

[https://css-tricks.com/css3-gradients/](https://css-tricks.com/css3-gradients/)

<br />

3、最常见和最有用的渐变类型是 linear-gradient() 。渐变“轴”可以从左到右、从上到下或您选择的任何角度

### 渐变色彩

```scss
.box {
  width: 500px;
  height: 100px;
  /* to right 等价于 90deg */
  background-image: linear-gradient(to right, red, yellow, green);
}
```

![](D:\gh-code\frontend-thick-talk\assets\images\css3\Snipaste_2020-11-28_20-07-41.png)

### 渐变背景

```scss

```

## 资料

1、[https://cssgradient.io/](https://cssgradient.io/)
