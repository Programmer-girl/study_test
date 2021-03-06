function SelfVue (options) {
    var self = this;
    this.data = options.data;
    this.methods = options.methods;
    console.log(this.data)
    Object.keys(this.data).forEach(function(key) {
        self.proxyKeys(key);
    });

    observe(this.data);

    // 执行编译器
    new Compile(options.el, this);

    options.mounted.call(this); // 所有事情处理好后执行mounted函数
}

SelfVue.prototype = {
    proxyKeys: function (key) {
        var self = this;
        Object.defineProperty(this, key, {
            enumerable: false,
            configurable: true,
            get: function getter () {
                console.log('sssgetter');
                return self.data[key];
            },
            set: function setter (newVal) {
                console.log('ssssetter');
                self.data[key] = newVal;
            }
        });
    }
}
