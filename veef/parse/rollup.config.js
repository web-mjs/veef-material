import resolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';

export default [
  {
    // index es6
    input: './example.js',
    output: {
      file: 'example-bundle.js',
      format: 'es',
      //format: 'iife',
    },
    plugins: [
      resolve(),
      terser({ compress: { passes: 10 }, ecma: 2015, format: {ecma: 2015, comments: false, indent_level: 0} }),
    ]
  }
];
