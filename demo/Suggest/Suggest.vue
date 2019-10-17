<template>
    <div class="suggest-box">
        <div class="input-block">
            <i class="search-icon" v-if="isShowSearchIcon"></i>
            <input
                type="text"
                class="search-input"
                :class="{ 'icon-padding': isShowSearchIcon }"
                :style="inputClass"
                :placeholder="placeholder"
                :value="value"
                @input="onSearchChange"
                @focus="onFocus"
                @blur="onBlur"
            />
            <i class="icon-close" v-if="value !== ''" @mousedown="onCancel" @touchstart="onCancel"></i>
        </div>
        <slot name="history"></slot>
        <slot name="suggest-list" v-if="isShowList" v-bind="options">
            <ul class="inner-suggest-list" :style="listClass">
                <li
                    v-for="(item, index) in options"
                    :key="itemKey ? item[itemKey] : index"
                    class="list-item"
                    @mousedown="onSelectItem(item)"
                    @touchStart="onSelectItem(item)"
                    :style="itemClass"
                >
                    <slot name="suggest-item" v-bind="item"></slot>
                </li>
            </ul>
        </slot>
        <slot name="no-result" v-if="isNoresultShow">
            <div class="inner-no-result-item">
                {{ noResultText }}
            </div>
        </slot>
    </div>
</template>

<script>
export default {
    name: "Suggest",
    model: {
        prop: "value",
        event: "input"
    },
    props: {
        value: {
            type: String,
            required: true
        },
        itemKey: {
            type: String,
            default: ""
        },
        placeholder: {
            type: String,
            default: "请输入关键字开始搜索"
        },
        noResultText: {
            type: String,
            default: "无搜索结果"
        },
        isShowSearchIcon: {
            type: Boolean,
            default: false
        },
        isShowListOnFocus: {
            type: Boolean,
            default: true
        },
        isShowListOnBlur: {
            type: Boolean,
            default: false
        },
        isShowListOnCancel: {
            type: Boolean,
            default: false
        },
        isShowListOnSelect: {
            type: Boolean,
            default: false
        },
        clearInputOnBlur: {
            type: Boolean,
            default: true
        },
        options: {
            type: Array,
            default: []
        },
        disabled: false,
        // 自定义输入框的样式
        inputClass: Object,
        // 自定义列表的样式
        listClass: Object,
        // 自定义列表选项的样式
        itemClass: Object,
        // 列表为空时的item的显示样式
        noResultClass: Object
    },

    data() {
        return {
            isShowList: true,
            isNoresultShow: false,
            notFireBlur: false,
            inputDebounce: ''
        };
    },

    watch: {
        options(newVal, oldVal) {
            this.isNoresultShow = !newVal.length;
        }
    },

    methods: {
        onSearchChange(event) {
            clearTimeout(this.inputDebounce);
            this.inputDebounce = setTimeout(() => {
                let searchKey = event.target.value.trim();
                this.$emit("input", searchKey);
                this.$emit("searchKeyChange", searchKey);
            }, 300);
        },

        onSelectItem(item) {
            this.$emit("select", item);
            this.isShowList = this.isShowListOnSelect;
            this.notFireBlur = true;
        },

        onFocus() {
            this.isShowList = this.isShowListOnFocus;
            this.$emit("focus");
            this.notFireBlur = false;
        },

        onBlur() {
            // 如果触发了select和cancel，就不再重复重发blur
            if (this.notFireBlur) {
                return;
            }
            if (this.clearInputOnBlur) {
                this.$emit("input", "");
            }
            this.isShowList = this.isShowListOnBlur;
            this.$emit("blur");
        },

        // 为了能让cancel和select先于blur执行，监听mousedown和touchstart事件
        onCancel() {
            this.isShowList = this.isShowListOnCancel;
            this.notFireBlur = true;
            this.$emit("input", "");
            this.$emit("cancel");
        }
    }
};
</script>

<style lang="stylus">
@import '~tb-ui/variable.styl'
@import '~tb-ui/mixins.styl'
.suggest-box
    position relative
    font-size 14px
    .input-block
        position relative
        .search-icon
            position absolute
            top 50%
            margin-top -7px
            left 10px
            width 14px
            height 14px
            background-image url('../../assets/img/tbean/search.png')
            background-position center
            background-repeat no-repeat
            background-size cover
        input[type="text"] {
            -webkit-appearance none
        }
        textarea{
            -webkit-appearance none
        }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button
            -webkit-appearance none
        input[type="number"]
            -moz-appearance textfield
        input::input-placeholder
            color  #A8A8A8
            margin-top 11px
            margin-left 21px
        input::-webkit-input-placeholder
            color #A8A8A8
        input:-moz-placeholder
            color #A8A8A8
        input::-moz-placeholder
            color #A8A8A8
        input:-ms-input-placeholder
            color #A8A8A8
        .search-input
            -webkit-box-shadow inset 0 0px 0px rgba(0, 0, 0, .075), 1px 0px 5px rgba(0, 0, 0, .1)
            box-shadow inset 0px 0px 0px rgba(0,0,0,0.075), 1px 0px 5px rgba(0,0,0,0.1)
            width 100%
            line-height 33px
            height 32px
            background #fff
            border 1px solid #E8E8E8
            color #000
            padding 0px 32px
            box-sizing border-box
            border-radius 6px
            outline none
        .icon-padding
            padding-left 34px
        .icon-close
            position absolute
            top 50%
            margin-top -7px
            right 9px
            width 14px
            height 14px
            background-image url('../../assets/img/tbean/icon_search_second_close.png')
            background-position center
            background-repeat no-repeat
            background-size cover
    .inner-suggest-list
        position absolute
        width 100%
        top 46px
        left 0
        overflow auto
    .inner-no-result-item
        position absolute
        width 100%
        top 46px
        left 0
        overflow auto
        font-size 16px
        color #000
        line-height 40px
        padding-left 10px
</style>
