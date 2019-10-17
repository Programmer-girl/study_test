## 二次分享接口

### 用法

#### 在index.html引入   

``` js
<script type="text/javascript" src="https://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
```

#### 在相关vue引入

``` js
import wxshare from '@/assets/js/wxshare/wxshare.js'
```

#### 调用接口

``` js
wxshare({
    title: 'title',
    link: 'href',
    desc: '描述', 
    imgUrl: 'https://imgsa.baidu.com/fex/pic/item/c995d143ad4bd113da12bb1f51afa40f4bfb053b.jpg'
});
```