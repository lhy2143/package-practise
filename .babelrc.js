module.exports = {
    "presets": [
        [
            "@babel/env",
            {
                "targets": {
                    "edge": "17",
                    "firefox": "60",
                    "chrome": "49",
                    "safari": "11.1"
                },
                "useBuiltIns": "usage",
                "corejs": "3.6.5",
                // 默认会根据目标环境来进行代码转换,设置为true后，会强制进行所有转换
                // 这对于要使用uglifyJS或者仅仅支持es5的环境很有用
                "forceAllTransforms": true
            }
        ],
        "@babel/preset-typescript"
    ],
    "plugins": [
        // 转换箭头函数
        // "@babel/transform-arrow-functions"
    ]
}