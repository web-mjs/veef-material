import resolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
import strip from '@rollup/plugin-strip';
import copy from 'rollup-plugin-copy';
import {minify} from 'html-minifier-terser';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';


export default [
  {
    // index es6
    input: './mwc-bundle.mjs',
    output: {
      file: 'mwc-bundle.js',
      //format: 'es',
      format: 'iife',
    },
    plugins: [
      resolve(),
      terser({ compress: { passes: 10 }, ecma: 2015, format: {ecma: 2015, comments: false, indent_level: 0} }),
      strip({
        functions: ['console.log'],
      })
    ]
  }
];
