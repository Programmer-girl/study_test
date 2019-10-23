# vue 变化侦测原理分析

## js两种方法：Object.defineProperty 和 proxy

### 1. Object.defineProperty
```
function defineReactive (data, key, val) {
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            return val
        },
        set: function (newVal) {
            if(val === newVal){
                return
            }
            val = newVal
        }
    })
}
```
### 2. proxy