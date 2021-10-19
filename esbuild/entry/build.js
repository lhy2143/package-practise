// detail:https://esbuild.github.io/getting-started/#bundling-for-node
// js build script
require('esbuild')
  .build({
    entryPoints: ['./app.jsx'],
    // 将所有导入的依赖项内联到文件本身中
    bundle: false,
    // 压缩代码而不是美化输出
    minify: true,
    // bundle:true时,treeShaking总是启用的，并且不能被关闭
    // 因为修剪未使用的代码会在不改变可观察行为的情况下使结果文件更小。
    treeShaking: 'ignore-annotations',
    // sourcemap: true,
    // target: ['es5'],
    outfile: '../output/out.js',
    //default:browser,can specify the node enviroment
    // platform: 'node',
    // tsconfig: 'tsconfig.json'
  })
  .catch((e) => {
    console.log(e);
    process.exit(1);
  });
