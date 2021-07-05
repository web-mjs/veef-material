import resolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
//import strip from '@rollup/plugin-strip';
//import copy from 'rollup-plugin-copy';
//import {minify} from 'html-minifier-terser';
//import babel from '@rollup/plugin-babel';
//import commonjs from '@rollup/plugin-commonjs';
import csso from 'csso';

function cssLitTransform () {
	return {
		name: 'my-plugin',
		transform (code, map) {
			if(map.indexOf("css") === -1)
				return;

			const optimize = (x) => csso.minify(x).css
			let emitCode = '';

			const ast = this.parse(code, {onToken: (t) => {
				if(t.type.label === 'eof') return;
				if(t.type.label !== 'template') {
					emitCode += `${code.substring(t.start, t.end)} `;
				} else {
					emitCode += optimize(t.value);
				}
			}});
			return emitCode;
		}
	};
}

export default [
	{
		input: './custom-bundle.mjs',
		output: {
			file: 'custom-bundle.js',
			//format: 'es',
			format: 'iife',
		},
		plugins: [
			resolve(),
			cssLitTransform(),
			terser({ compress: { passes: 10 }, ecma: 2015, format: {ecma: 2015, comments: false, indent_level: 0} }),
		]
	}
];
