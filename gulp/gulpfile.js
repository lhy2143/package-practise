// gulp打包示例
const { src, dest } = require('gulp');
const watch = require('gulp-watch');
const chalk = require('chalk');
const ts = require('gulp-typescript');
const alias = require('gulp-ts-alias');
const sourcemaps = require('gulp-sourcemaps');
const path = require('path');

process.on('uncaughtException', console.log);
process.on('unhandledRejection', console.log);

const project = ts.createProject('tsconfig.json');

function build() {
  const compiled = src('src/**/*.ts')
    .pipe(alias({ configuration: project.config }))
    .pipe(sourcemaps.init())
    .pipe(project());

  return compiled.js
    .pipe(
      sourcemaps.write({
        sourceRoot: (file) =>
          path.relative(path.join(file.cwd, file.path), file.base),
      })
    )
    .pipe(dest('./dist'));
}
// 监听文件实时打包
function watchTask() {
  const watcher = watch('src/**/*.ts', build);
  watcher.on('change', (path, stats) => {
    console.log(`change`);
  });
  return watcher;
}
exports.build = build;
exports.watch = watchTask;

// package.json
// "build": "gulp build",
// "watch": "gulp watch"
