const { src, dest } = require('gulp');
const path = require('path');
const ts = require('gulp-typescript');

process.on('uncaughtException', console.log);
process.on('unhandledRejection', console.log);
function build() {
  return src('./gulp/entry/*.ts')
    .pipe(
      ts({
        // outdir: './dist',
        target: 'es5',
        module: 'commonjs',
        moduleResolution: 'node',
        allowJs: true,
      })
    )
    .pipe(dest('./gulp/output'));
}

exports.build = build;
