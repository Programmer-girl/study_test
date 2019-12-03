# canvas

- 如果我们想要制定canvas的大小，一般要这样写

```<canvas id="canvas" width="200" height="300" style="border:1px solid #fff;"></canvas>```

不建议使用css方式给canvas指定大小，这是因为css实际上指定的是canvas画布显示的大小，但是对于canvas来说除此之外，还包括它内里的显示的图画的分辨率的大小，采用上面这种方式，相当于一同把大小都指定出来