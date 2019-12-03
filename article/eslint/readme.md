# eslint baidu规范

- [强制] `if / else / for / while / function / switch / do / try / catch / finally` 关键字后，必须有一个空格。

**from**  [to eslint.cn](https://eslint.org/docs/rules/space-before-function-paren#require-or-disallow-a-space-before-function-parenthesis-space-before-function-paren)

```

"space-before-function-paren": ["error", "always"],
// or
"space-before-function-paren": ["error", {
  "anonymous": "always",
  "named": "always",
  "asyncArrow": "always"
}],
```

- [强制] 单行声明的数组与对象，如果包含元素，`{}` 和 `[]` 内紧贴括号部分不允许包含空格。

**from**  [to eslint.cn](https://eslint.org/docs/rules/space-before-function-paren#require-or-disallow-a-space-before-function-parenthesis-space-before-function-paren)

```
'array-bracket-spacing': ['error', 'never'], // 数组紧贴括号部分不允许包含空格。
'object-curly-spacing': ['error', 'never'], // 对象紧贴花括号部分不允许包含空格。
```



https://www.npmjs.com/package/eslint-config-fornode

[JavaScript编码规范](http://agroup.baidu.com/fe-styleguide/md/article/62439)
```js
{
    //   ╔═╗╔═╗╦  ╦╔╗╔╔╦╗┬─┐┌─┐
    //   ║╣ ╚═╗║  ║║║║ ║ ├┬┘│
    //  o╚═╝╚═╝╩═╝╩╝╚╝ ╩ ┴└─└─┘
    // A set of basic code conventions designed to encourage quality and consistency
    // across your Sails app's code base.  These rules are checked against
    // automatically any time you run `npm test`.
    //
    // > An additional eslintrc override file is included in the `assets/` folder
    // > right out of the box.  This is specifically to allow for variations in acceptable
    // > global variables between front-end JavaScript code designed to run in the browser
    // > vs. backend code designed to run in a Node.js/Sails process.
    //
    // > Note: If you're using mocha, you'll want to add an extra override file to your
    // > `test/` folder so that eslint will tolerate mocha-specific globals like `before`
    // > and `describe`.
    // Designed for ESLint v4.
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // For more information about any of the rules below, check out the relevant
    // reference page on eslint.org.  For example, to get details on "no-sequences",
    // you would visit `http://eslint.org/docs/rules/no-sequences`.  If you're unsure
    // or could use some advice, come by https://sailsjs.com/support.
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    "env": {
        "node": true
    },

    "parserOptions": {
        "ecmaVersion": 2018
    },

    "globals": {
        // If "no-undef" is enabled below, be sure to list all global variables that
        // are used in this app's backend code (including the globalIds of models):
        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        "Promise": true,
        "sails": true,
        "_": true,

        // Models:
        "User": true

        // …and any others.
        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    },

    "rules": {
        // 缩进
        "indent": ["error", 4], // 缩进控制 4空格
        // [强制] switch 下的 case 和 default 必须增加一个缩进层级。
        // [强制] 二元运算符两侧必须有一个空格，一元运算符与操作对象之间不允许有空格。



        // "no-mixed-spaces-and-tabs": "error", // 禁止使用 空格 和 tab 混合缩进
        // "no-regex-spaces": "error", // 禁止正则表达式字面量中出现多个空格
        // "no-multi-spaces": "error", // 禁止出现多个空格而且不是用来作缩进的
        // "array-bracket-spacing": ["error", "never"], // 数组紧贴括号部分不允许包含空格。
        // "object-curly-spacing": ["error", "never"], // 对象紧贴花括号部分不允许包含空格。
        // "block-spacing": ["error", "never"], // 单行代码块中紧贴括号部分不允许包含空格。
        // "comma-spacing": ["error", { "before": false, "after": true }], //在变量声明、数组字面量、对象字面量、函数参数 和 序列中禁止在逗号前使用空格,要求在逗号后使用一个或多个空格
        // "semi-spacing": ["error", {"before": false, "after": true}], //禁止分号周围的空格
        // "computed-property-spacing": ["error", "never"], // 禁止括号和其内部值之间的空格
        // // "eslint keyword-spacing": ["warn", { "before": true ,"after": true}], // 该规则强制关键字和类似关键字的符号周围空格的一致性：as、break、case、catch、class、const、continue、debugger、default、delete、do、else、export、extends、finally、for、from、function、get、if、import、in、instanceof、let、new、of、return、set、static、super、switch、this、throw、try、typeof、var、void、while、with 和 yield。
        // "no-trailing-spaces": "error", // 禁用行尾空格
        // "no-spaced-func": "error", // 禁止 function 标识符和圆括号之间有空格
        // "space-before-function-paren": "error", // 禁止函数圆括号之前有一个空格
        // "space-before-blocks": ["error", "always"], // 禁止语句块之前的空格
        // "space-in-parens": ["error", "never"], // 禁止圆括号内的空格
        // "space-infix-ops": ["error", {"int32Hint": false}], // 要求中缀操作符周围有空格,设置 int32Hint 选项为 true (默认 false) 允许 a|0 不带空格。
        // "space-unary-ops": "error", // 要求或禁止在一元操作符之前或之后存在空格,new、delete、typeof、void、yield要求有空格，-、+、--、++、!、!!要求无空格。
        // "spaced-comment": ["error", "always"], // 要求在注释前有空白
        // "arrow-spacing": "error", // 要求箭头函数的箭头之前和之后有空格
        // "generator-star-spacing": ["error", {"before": false, "after": true}], // 强制 generator 函数中 * 号前有空格，后无空格。
        // "yield-star-spacing": ["error", {"before": true, "after": false}], // 强制 yield* 表达式中  * 号前有空格，后无空格。
        // "no-irregular-whitespace": "error", // 禁止不规则的空白。
        // "template-curly-spacing": ["error", "never"], // 强制模板字符串中花括号内不能出现空格 
        // // 换行
        // "max-len": ["error", 100], // 每行字符不能超过100个
        // "no-multiple-empty-lines": "error", // 不允许多个空行
        // "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 2 }], //要求方法链中每个调用都有一个换行符
        // "eol-last": "error", // 要求文件末尾保留一行空行
        // // "lines-around-comment": ["error", { "beforeBlockComment": true }], // 强制注释周围有空行
        // // 语句
        // "curly": ["error", "multi-line"], // if、else if、else、for、while强制使用大括号，但允许在单行中省略大括号。
        // "semi": ["error", "always"], //不得省略语句结束的分号
        // // 命名
        // "camelcase": ["error", {"properties": "never"}], // 要求使用骆驼拼写法
        // // 变量
        // // "no-var": "error", //用let/const代替var
        // "no-const-assign": "error", //不允许改变用const声明的变量
        // // "prefer-const": "error", //如果一个变量不会被重新赋值，最好使用const进行声明。
        // "no-use-before-define": "error", //禁止定义前使用
        // // 条件
        // "no-cond-assign": "error", // 禁止在条件语句中出现赋值操作符
        // "no-constant-condition": "error", //禁止在条件中使用常量表达式
        // "no-duplicate-case": "error", // 禁止在 switch 语句中的 case 子句中出现重复的测试表达式
        // "default-case": "error", // 要求 Switch 语句中有 Default 分支 
        // "eqeqeq": "error", // 使用 === 和 !== 代替 == 和 !=
        // "no-else-return": "error", // 如果 if 块中包含了一个 return 语句，else 块就成了多余的了。可以将其内容移至块外。
        // "no-fallthrough": "error", // 禁止 case 语句落空 
        // "no-unneeded-ternary": "error", //禁止可以在有更简单的可替代的表达式时使用三元操作符
        // // 循环
        // "radix": "error", // 在parseInt()中始终使用基数以消除意想不到的后果。
        // // 字符串
        // "quotes": ["error", "single"], // 字符串开头和结束使用单引号
        // // "prefer-template": "error", // 使用模板而非字符串连接
        // "no-path-concat": "error", // 当使用 _dirname 和 _filename 时不允许字符串拼接
        // "no-useless-concat": "error", // 禁止没有必要的字符拼接
        // // 对象
        // "comma-dangle": ["error", "never"], // 多行对象字面量中要求拖尾逗号
        // "no-dupe-keys": "error", // 禁止在对象字面量中出现重复的键
        // "no-prototype-builtins": "error", // 禁止直接使用 Object.prototypes 的内置属性 
        // // "dot-notation": "error", //强制在任何允许的时候使用点号访问属性
        // "no-extend-native": "error", // 禁止扩展原生对象
        // "no-new-object": "error", // 禁止使用 Object 构造函数
        // // "object-shorthand": ["error", "always"], //要求对象字面量简写语法 
        // // 数组
        // "no-sparse-arrays": "error", // 禁用稀疏数组
        // "no-array-constructor": "error", //禁止使用 Array 构造函数
        // // 函数
        // "no-dupe-args": "error", // 禁止在 function 定义中出现重复的参数 
        // "no-new-func": "error", // 禁用Function构造函数
        // "no-return-assign": "error", // 禁止在返回语句中赋值 
        // "func-style": ["error", "expression", { "allowArrowFunctions": true }], // 统一函数风格为函数表达式或函数声明，并且允许使用箭头函数
        // // "newline-before-return": "error", // 要求 return 语句之前有一空行 
        // // 面向对象
        // "new-cap": "error", // 要求构造函数首字母大写
        // // 错误回调
        // // "strict": "never", // 使用强制模式开关use strict;
        // "no-console": "warn", // 禁用console，有助于代码发布前精简代码，调试时可忽略此规则
        // "no-empty": ["error", { "allowEmptyCatch": true }], // 禁止空块语句,但允许出现空的 catch 子句
        // "no-extra-boolean-cast": "error", // 禁止不必要的布尔类型转换
        // "no-extra-parens": "error", // 禁止冗余的括号
        // "no-extra-semi": "error", // 禁用不必要的分号
        // "no-eval": "error", // 禁用 eval()
        // "no-with": "error", // 禁用 with 语句
        // "no-unexpected-multiline": "error", // 禁止使用令人困惑的多行表达式。
        // "no-unreachable": "error", // 禁止在 return、throw、continue 和 break 语句后出现不可达代码
        // "no-unsafe-finally": "error", // 禁止在 finally 语句块中出现控制流语句
        // "valid-typeof": "error", //强制 typeof 表达式与有效的字符串进行比较
        // "no-case-declarations": "error", // 禁止在 case 或 default 子句中出现词法声明
        // "no-new-wrappers": "error", // 禁止通过 new 操作符使用 String、Number 和 Boolean
        // "no-useless-escape": "error", // 禁用不必要的转义
        // "handle-callback-err": "error" // 强制回调错误处理 



        // "array-bracket-spacing": ["error", "never"], // 数组紧贴括号部分不允许包含空格。
        // "object-curly-spacing": ["error", "never"], // 对象紧贴花括号部分不允许包含空格。
        // // function前有空格
        // // "space-before-function-paren": ["error", "always"],
        // // or
        // "space-before-function-paren": [
        //     "error",
        //     {
        //         "anonymous": "always",
        //         "named": "always",
        //         "asyncArrow": "always"
        //     }
        // ],
        // "block-scoped-var": ["error"],
        // "callback-return": [
        //     "error",
        //     ["done", "proceed", "next", "onwards", "callback", "cb"]
        // ],
        // "camelcase": ["warn", { "properties": "always" }],
        // "comma-style": ["warn", "last"],
        // "curly": ["warn"],
        // "eqeqeq": ["error", "always"],
        // "eol-last": ["warn"],
        // "handle-callback-err": ["error"],
        // "indent": [
        //     "warn",
        //     4,
        //     {
        //         "SwitchCase": 1,
        //         "MemberExpression": "off",
        //         "FunctionDeclaration": { "body": 1, "parameters": "off" },
        //         "FunctionExpression": { "body": 1, "parameters": "off" },
        //         "CallExpression": { "arguments": "off" },
        //         "ArrayExpression": 1,
        //         "ObjectExpression": 1,
        //         "ignoredNodes": ["ConditionalExpression"]
        //     }
        // ],
        // "linebreak-style": ["error", "unix"],
        // "no-dupe-keys": ["error"],
        // "no-duplicate-case": ["error"],
        // "no-extra-semi": ["warn"],
        // "no-labels": ["error"],
        // "no-mixed-spaces-and-tabs": [2, "smart-tabs"],
        // "no-redeclare": ["warn"],
        // "no-return-assign": ["error", "always"],
        // "no-sequences": ["error"],
        // "no-trailing-spaces": ["warn"],
        // "no-undef": ["error"],
        // "no-unexpected-multiline": ["warn"],
        // "no-unreachable": ["warn"],
        // "no-unused-vars": [
        //     "warn",
        //     {
        //         "caughtErrors": "all",
        //         "caughtErrorsIgnorePattern": "^unused($|[A-Z].*$)",
        //         "argsIgnorePattern": "^unused($|[A-Z].*$)",
        //         "varsIgnorePattern": "^unused($|[A-Z].*$)"
        //     }
        // ],
        // "no-use-before-define": ["error", { "functions": false }],
        // "one-var": ["warn", "never"],
        // "prefer-arrow-callback": ["warn", { "allowNamedFunctions": true }],
        // "quotes": [
        //     "warn",
        //     "single",
        //     { "avoidEscape": false, "allowTemplateLiterals": true }
        // ],
        // "semi": ["warn", "always"],
        // "semi-spacing": ["warn", { "before": false, "after": true }],
        // "semi-style": ["warn", "last"]
    }
}

```