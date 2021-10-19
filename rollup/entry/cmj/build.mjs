// 使用了esm 模块的 top-level-await 语法
// 因此需使用.mjs 后缀，表示使用ESM的方式进行加载
// 从而导致要使用import而不是require语法
// node build.mjs --experimental-top-level-await / --harmony-top-level-await
import * as rollup from 'rollup';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
const bundle = await rollup.rollup({
  input: './index.js',
  output: {
    file: '../../output/cmj/bundle.js',
    format: 'iife',
    sourcemap: true,
    name: 'abc',
  },
  plugins: [resolve(), commonjs()],
});

await bundle.write({
  file: '../../output/cmj/bundle.js',
  format: 'iife',
  sourcemap: true,
  name: 'abc',
});
