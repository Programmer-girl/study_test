<template>
    <div class="swiper-container">
        <div
            class="swiper-touch"
            ref="touch"
            @touchstart="touchStart"
            @touchmove="touchMove"
            @touchend="touchEnd"
        >
            <div
                class="swiper-wrapper"
                ref="wrapper"
                :style="{'transform': 'translate3d('+slideEffect+'px, 0px, 0px)','transitionDuration': tduration+'ms','width': count+'00%'}"
            >
                <slot name="swiper-item"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Swiper",
    data() {
        return {
            startX: 0, //开始触摸的位置
            startY: 0, //开始触摸的位置
            moveX: 0, //滑动时的位置
            moveY: 0, //滑动时的位置
            endX: 0, //结束触摸的位置
            disX: 0, //移动距离
            disY: 0, //移动距离
            slideEffect: "0",
            btnWidth: 0,
            currantIndex: 1,
            isPausePlay: false,
            endplace: 0,
            tduration: 0,
            error1: false,
            error2: 0,
            error3: false,
            error4: false
        };
    },

    mounted: function() {
        this.btnWidth = this.$refs.touch.offsetWidth; //320
        if (this.isAutoPlay) {
            this.autoPlay(this.autoTime);
        }
    },
    methods: {
        autoPlay: function(timer) {
            var self = this;
            setInterval(function() {
                if (self.currantIndex < self.count) {
                    self.currantIndex++;
                } else if ((self.currantIndex = self.count)) {
                    self.currantIndex = 1;
                }
                self.slideEffect = -(self.currantIndex - 1) * self.btnWidth;
            }, timer);
        },
        touchStart: function(ev) {
            ev = ev || event;
            // ev.preventDefault();//会影响点击事件
            if (ev.touches.length == 1) {
                this.startX = ev.touches[0].clientX; // 记录开始位置
                this.startY = ev.touches[0].clientY; // 记录开始位置
            }
            document.addEventListener("touchmove", this._onTouchMove, {
                passive: false
            });
            document.addEventListener("touchend", this._onTouchEnd, {
                passive: false
            });
        },
        touchMove: function(ev) {
            ev = ev || event;
            document.addEventListener("preventDefault", this.preventDefault);
            if (ev.touches.length == 1) {
                //滑动时距离浏览器左侧的距离
                this.moveX = ev.touches[0].clientX;
                this.moveY = ev.touches[0].clientY;
                //实时的滑动的距离-起始位置=实时移动的位置
                this.disX = this.moveX - this.startX;
                this.disY = this.moveY - this.startY;
                this.tduration = 0;
                if (Math.abs(this.disX / this.disY) > 1) {
                    // 角度大于45度，x/y>1
                    if (this.currantIndex == 1) {
                        if (this.disX > 0) {
                            if (Math.abs(this.disX) < this.btnWidth / 5) {
                                this.slideEffect = this.endplace + this.disX;
                            } else {
                                this.slideEffect = this.btnWidth / 5;
                            }
                        } else if (this.disX < 0) {
                            if (this.count > this.currantIndex) {
                                //如果不是最后一页的时候左滑，是想滑进下一页
                                this.slideEffect = this.endplace + this.disX;
                            } else {
                                if (Math.abs(this.disX) < this.btnWidth / 5) {
                                    this.slideEffect =
                                        this.endplace + this.disX;
                                } else {
                                    this.slideEffect = -this.btnWidth / 5;
                                }
                            }
                        }
                    }

                    if (this.count > 1 && this.currantIndex == this.count) {
                        if (this.disX < 0) {
                            if (Math.abs(this.disX) < this.btnWidth / 5) {
                                this.slideEffect = this.endplace + this.disX;
                            } else if (
                                Math.abs(this.disX) >
                                this.btnWidth / 5
                            ) {
                                this.slideEffect =
                                    -this.btnWidth - this.btnWidth / 5;
                            }
                        } else {
                            this.slideEffect = this.endplace + this.disX;
                        }
                    }
                }
            } else {
                // this.error1=true;
            }
            // document.removeEventListener('preventDefault', this.preventDefault);
        },
        preventDefault() {
            ev.preventDefault();
        },
        touchEnd(ev) {
            ev = ev || event;

            // document.addEventListener('preventDefault', this.preventDefault);

            this.endX = ev.changedTouches[0].clientX;
            if (this.disX > 0) {
                //右滑
                if (this.disX < this.btnWidth / 4 || this.currantIndex == 1) {
                    //如果滑动的位置小于半屏
                    this.tduration = 300;
                    this.slideEffect = -(this.currantIndex - 1) * this.btnWidth;
                } else if (
                    this.currantIndex !== 1 &&
                    this.currantIndex <= this.count
                ) {
                    this.currantIndex--;
                    this.$emit("listenCurrant", this.currantIndex);
                    this.tduration = 300;
                    this.slideEffect = -(this.currantIndex - 1) * this.btnWidth;
                }
            } else if (this.disX < 0) {
                //左滑
                if (
                    -this.disX < this.btnWidth / 4 ||
                    this.currantIndex >= this.count
                ) {
                    this.tduration = 300;
                    this.slideEffect = -(this.currantIndex - 1) * this.btnWidth;
                } else if (this.currantIndex < this.count) {
                    this.currantIndex++;
                    this.$emit("listenCurrant", this.currantIndex);
                    this.tduration = 300;
                    this.slideEffect = -(this.currantIndex - 1) * this.btnWidth;
                }
            } else {
            }
            this.endplace = this.slideEffect;
            // document.removeEventListener('preventDefault', this.preventDefault);

            document.removeEventListener("touchmove", this._onTouchMove);
            document.removeEventListener("touchend", this._onTouchEnd);
        }
    },
    props: {
        // 轮播商品数量
        count: {
            type: Number,
            required: 1
        },
        // 是否展示默认按钮
        isShowIndexBtn: {
            type: Boolean,
            default: false
        },
        // 是否自动播放
        isAutoPlay: {
            type: Boolean,
            default: false
        },
        // 自动播放时间
        autoTime: {
            type: Number,
            default: 1000
        }
    }
};
</script>
<style lang="stylus">
@import '~tb-ui/variable.styl';
@import '~tb-ui/mixins.styl';

.swiper-container {
    margin: 0 auto;
    overflow: hidden;
    z-index: 1;
    width: 100%;
    position: relative;
    white-space: nowrap;
}

.swiper-touch {
    width: 100%;

    .swiper-wrapper {
        display: flex;
        position: relative;
        transition-property: transform, height, -webkit-transform, -moz-transform, -o-transform;
    }
}
</style>
