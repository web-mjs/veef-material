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
import acorn from 'acorn'
import walk from 'acorn-walk' 
//import { SourceMapGenerator, SourceNode, SourceMapConsumer } from 'source-map';
import path from 'path'
import { spawn } from 'child_process'
import * as recast from "recast";

function cssLitTransform () {
	return {
		name: 'my-plugin',
		transform (code, file) {
			let isCss = file.indexOf('-css') !== -1;
			const acornParser = {
				parse(source) { return acorn.parse(source, {ecmaVersion: 2020, sourceType: 'module', locations: true}); }
			};

			const optimize = (x) => csso.minify(x).css
			const optimizeHTML = (x) => {
				let c =  x.replaceAll("\r", "").replaceAll(/^(\s+)/gm, ' ')
				c = c.replaceAll(/<\/[\w-]+>/g, "<//>").replaceAll(/<\/\/>\s+?<\/\/>/gs, "<//><//>").replaceAll(/<\/\/>\s+?<\/\/>/gs, "<//><//>")
				return c
			}

			const OPTIMIZE_HTML = false;
			const SRC_MAP = true;
			if(isCss || (OPTIMIZE_HTML && file.indexOf('components.js') !== -1)) {
				const ast = recast.parse(code, { 
					parser: acornParser,
					sourceFileName: file
				})
				
				walk.simple(ast.program, {
					TemplateElement(node) {
						if(isCss)
						node.value.raw = optimize(node.value.raw)
						else 
						node.value.raw = optimizeHTML(node.value.raw);
					}
				});
				if(!SRC_MAP)
					return recast.print(ast).code
				const out = recast.print(ast, { sourceMapName: "source.map" })
				return { code: out.code, map: out.map };
			}
		}
	};
}

export default cmd => {
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
