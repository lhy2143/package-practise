// export default {
//     input: 'src/index.js',
//     output: {
//         file: 'rollup/bundle.js',
//         format: 'iife',
//         sourcemap: true,
//         name: 'abc'
//     }
// };

import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
export default {
  input: 'src/node/index.js',
  output: {
    file: 'rollup/node/bundle.js',
    format: 'iife',
    sourcemap: true,
    name: 'abc',
  },
  plugins: [resolve(), commonjs()],
};
