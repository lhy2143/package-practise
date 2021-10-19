
### esbuild An extremely fast js bundler
- 支持.ts .jsx .js的代码转换。
- 支持es6 和 cmj,es6 下的tree shaking。
- written in Go
  
注意：
esbuild 无法进行es6和es5的转换。
当target:['es5']时，会抛出error : unsupported syntax，因为esbuild只支持将大多数较新的JavaScript语法特性转换为es6。


### babel 转换超前的js语法，不同于esbuid,babel对es5支持良好
- 支持语法转换，如jsx to js ,es6 to es5
- 支持通过polyfill添加最新特性


### gulp Gulp是一个工具包，可以帮助您自动化开发工作流中痛苦或耗时的任务
- 强大的生态，可以用来处理文件转换，如`gulp-typescript`、`gulp-watch`、`gulp-babel`、`gulp-less`等。
- API 简单易用易学
  
### tsc 编译ts文件

### rollup and webpack
- Use webpack for apps, and Rollup for libraries 
- 




