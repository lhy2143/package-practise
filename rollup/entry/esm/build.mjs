// node build.mjs --experimental-top-level-await / --harmony-top-level-await
import * as rollup from 'rollup';

const bundle = await rollup.rollup({
  input: './index.js',
  output: {},
});
await bundle.write({
  file: '../../output/esm/bundle.js',
  format: 'iife',
  sourcemap: true,
  name: 'abc',
});
