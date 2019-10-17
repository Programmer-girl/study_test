## Slider组件

### 使用方法

```js
import Swiper from 'commonUI'
import vue from 'Vue'

vue.component('Swiper', commonUI.Swiper) 
```

```vue
<template>
<div>
<Swiper
      ref="Swiper"
      :count="Object.keys(someList).length"
      v-on:listenCurrant="switchCurrant"
    >
      <slot slot="swiper-item" v-for="(item,index) in someList">
        // 插入需要轮播的节点 
      </slot>
      <slot slot="swiper_btn_item" v-for="(item,index) in someList">
        // 插入轮播索引的节点及选中样式 <div class="Swiper_btn_item" :class="{'active': ...}"></div>
      </slot>
    </Swiper>
</div>
</template>
```

参数介绍：
- `count`: 轮播dom的数量
- `switchCurrant`: 切换后的事件
两个slot：
- `slot="swiper-item"`：轮播主体内容
- `slot="swiper_btn_item"`: 轮播索引样式
