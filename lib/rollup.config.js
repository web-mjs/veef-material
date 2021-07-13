import resolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
import path from 'path'

export default [
  {
    // index es6
    input: './veef.js',
    output: {
		file: 'veef.mjs',
		format: 'es',
		sourcemap: false,
		sourcemapFile: path.resolve('./example-bundle.js.map')	
      //format: 'iife',
    },
    plugins: [
      resolve(),
      terser({ compress: { passes: 10, drop_debugger: false }, ecma: 2015, format: {ecma: 2015, comments: false, indent_level: 0} }),
    ]
  }
];
