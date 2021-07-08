import resolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
//import strip from '@rollup/plugin-strip';
//import copy from 'rollup-plugin-copy';
//import {minify} from 'html-minifier-terser';
//import babel from '@rollup/plugin-babel';
//import commonjs from '@rollup/plugin-commonjs';
import csso from 'csso';
import { visualizer } from 'rollup-plugin-visualizer';
import { SourceMapGenerator }  from 'source-map';
//import walk from 'acorn-walk' 
//import { SourceMapGenerator, SourceNode, SourceMapConsumer } from 'source-map';
import path from 'path'
import { spawn } from 'child_process'

function cssLitTransform () {
	return {
		name: 'my-plugin',
		transform (code, file) {
			if(file.indexOf("css") === -1)
				return;

			const optimize = (x) => csso.minify(x).css

			let emitCode = code.replaceAll("\r\n", "\n");

			const oldTokens = [];
			const newTokens = [];
			const ast = this.parse(code, {
				locations: true,
				onToken: (t) => {
					if(t.type.label === 'eof') return;
					oldTokens.push({ pos: t.loc.start, code: null }); 
					if(t.type.label === 'template') {
						emitCode = emitCode.replace(t.value, optimize(t.value));
					}
				}
			});
			const astNew = this.parse(emitCode, {
				locations: true,
				onToken: (t) => {
					if(t.type.label === 'eof') return;
					const snippet = emitCode.substring(t.start, t.end);
					newTokens.push({pos: t.loc.start, code: snippet}); 
				}
			});

			const gen = new SourceMapGenerator({file: file});
			oldTokens.map((x, i) => {
				const newTok = newTokens[i];
				gen.addMapping({original: x.pos, generated: newTok.pos, source: file});
			});
			const genObj = (JSON.parse(gen.toString()))
			return {code: emitCode, map: genObj}
		}
	};
}

export default cmd => {
	spawn('C:/Users/Filip/AppData/Roaming/Python/Python38/Scripts/sponggy.exe', ['run'], {cwd: __dirname})
	return {
		input: './custom-bundle.mjs',
		output: {
			file: 'custom-bundle.js',
			//format: 'es',
			format: 'iife',
			sourcemap: true,
			sourcemapFile: path.resolve('./custom-bundle.js.map')
		},
		watch: true,
		plugins: [
			resolve(),
			cssLitTransform(),
			terser({ compress: { passes: 10 }, ecma: 2015, format: {ecma: 2015, comments: false, indent_level: 0} }),
			visualizer({sourcemap: true})
		]
	}
}
