## Suggest组件

> 在搜索输入框中输入，会根据搜索结果向服务器请求匹配的数据，最后返回。在Suggest中间可以自定义列表组件的内容
>
### 使用方法

```js
import Suggest from 'commonUI'
import vue from 'Vue'

vue.component('Suggest', commonUI.Suggest) 
```

```vue
<template>
<div>
    <Suggest
        v-model="suggestValue"
        item-key="id"
        placeholder="搜索"
        no-result-text="暂无数据"
        :options="options"
        :clear-input-on-blur="false"
        :is-show-list-on-focus="false"
        :is-show-list-on-blur="false"
        :is-show-list-on-cancel="false"
        :is-show-list-on-select="false"
        :is-show-search-icon="true"
        :input-class="inputClass"
        :list-class="listClass"
        :item-class="itemClass"
        :no-result-class="noResultClass"
        @searchKeyChange="getOpitons"
        @select="onSelect"
        @cancel="onCancel"
        @focus="onFocus"
        @blur="onBlur"
        class="suggest-component">
        <template slot="suggest-item" slot-scope="item">
            <div class="portrait" :style="{backgroundImage: 'url(' + item.portrait + ')'}"></div>
            <div class="user-name">{{ item.user_nickname || item.user_name || item.show_name}}</div>
        </template>
      </Suggest>
</div>
</template>
```

参数介绍：
- `v-model`: 用户在搜索框中输入的关键词，会实时的绑定到v-model指定的变量中。当用户最后点击选择一个suggest-item时，由于每一个suggest-item的内容需要父组件中定义，所以Suggest无法确定最后的内容。所以在@select事件中，应该设置suggestValue值，如：this.suggestValue=item.username
- `item-key`: 每一个item的key值。如果是使用默认的list，其默认值为item在options的中的index
- `placeholder` &lt; String &gt; 设置输入框中的placeholder值
- `no-result-text` &lt; String &gt; 设置搜索无匹配项时的提示文案
- `options` &lt; Array &gt; suggest列表中需要显示的值。在父组件中请求数据，返回的数据提取数组赋值到options，suggest-item则会据此显示
- `clear-input-on-blur` &lt; Boolean &gt; 为`false`时，当input失去焦点时清空输入框的内容
- `is-show-list-on-focus="false"` &lt; Boolean &gt; 当input获得焦点时是否显示Suggest list，默认为true
- `is-show-list-on-blur="false"` &lt; Boolean &gt; 当input失去焦点时是否显示Suggest list，默认为false
- `is-show-list-on-cancel="false"`&lt; Boolean &gt; 当点击取消按钮时是否显示Suggest list，默认为false
- `is-show-list-on-select="false"`&lt; Boolean &gt; 当选中Suggest item后是否显示Suggest list，默认为false
- `is-show-search-icon` &lt; Boolean &gt; 为`true`时，显示搜索框中左侧搜索icon
- `input-Class` &lt; Object &gt; 配置输入框的样式
- `list-Class` &lt; Object &gt; 配置列表ul的样式
- `item-Class` &lt; Object &gt; 配置列表li的样式
- `no-result-Class` &lt; Object &gt; 配置列表搜索为空时的li的样式
- `searchKeyChange` 当搜索框中的内容发生变化时触发，传递过来的参数是用户输入的内容，当然也可以直接在v-model绑定的变量中直接读取
- `select` 当用户点击选择一个suggest-item时触发，传递过来的参数是这个suggest-item的数据，也就是options数组中的一个元素
- `cancel` 当用户点击右侧取消按钮时触发
- `focus` 当input输入框获得焦点时触发
- `blur` 当input输入框失去焦点时触发。如果是select和cancel时，就不再单独触发blur事件

四个slot：
- `slot="history"`：展现搜索历史，逻辑、内容都需要自己配置，只提供一个插槽
- `slot="suggest-item"`: 列表item的内容，通过制定slot-scope可以获取这个item对应的数据，也就是options数组中的一个元素
- `slot="no-result-item"`: 列表为空时显示的item的内容 
- `slot="suggest-list"`: 完全由用户自定义整个list，此时使用方式略有差别，需要用户自己控制列表的显示与隐藏，搜索结果为空的展示逻辑仍由Suggest完成，focus和blur等事件也会正常触发，如下面的例子

```vue
<Suggest
    v-model="suggestValue"
    item-key="open_id"
    placeholder="搜索"
    :options="options"
    :is-show-search-icon="true"
    :is-show-list-on-blur="true"
    :clear-input-on-blur="false"
    @searchKeyChange="getOpitons"
    @cancel="onCancel"
    @focus="onFocus"
    class="suggest-component"
    :itemClass="itemClass"
>
    <template slot="suggest-list" slot-scope="options">
        <ul v-if="isShowList">
            <li v-for="item in options" @click="itemClick(item)">{{ item.name || item.user_nickname }}</li>
        </ul>
    </template>
    <div class="no-result-item" slot="no-result">
        <div class="no-data"><img src="../../assets/img/tbean/pic_emotion_05.png"></div>
        无搜索结果
    </div>
</Suggest>
```
需要注意的几个地方：
* options还是要传入，因为Suggest组件要通过options组件来判断是否展示no-result，在slot-scope中可以获取options
* clear-input-on-blur需要定义为false，否则默认的清空逻辑，会导致设置suggestValue时的值马上被清空。其他的几个控制list显示的逻辑根据业务需求设置。这里设置的是组件外层的展示逻辑，为了与默认的组件形式兼容
* 自己定义的slot中的list的显示与隐藏，就需要自己配置了
* 总的来说，如果是淡出自己写suggest-list的话，除了需要自己写列表内容的处理逻辑（展示、click）之外，还要考虑一些兼容性，主要是通过focus、blur事件以及is-show-list-on-xxx几个属性配置