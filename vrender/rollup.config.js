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
      terser({ module: true,
		  compress: { 
			  ecma: 2015,
			  passes: 10,
			  drop_debugger: false,
			  unsafe_methods: true
		  },
		  mangle: {
			  properties: {regex: /^_/}
		  },
		  ecma: 2015, format: {ecma: 2015, semicolons: false, comments: false, indent_level: 0} }),
    ]
  }
];
