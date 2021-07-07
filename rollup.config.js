import resolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
//import strip from '@rollup/plugin-strip';
//import copy from 'rollup-plugin-copy';
//import {minify} from 'html-minifier-terser';
//import babel from '@rollup/plugin-babel';
//import commonjs from '@rollup/plugin-commonjs';
import csso from 'csso';
import { visualizer } from 'rollup-plugin-visualizer';
import walk from 'acorn-walk' 
import fs from 'fs'

import { SourceMapGenerator, SourceNode, SourceMapConsumer } from 'source-map';
function cssLitTransform () {
	return {
		name: 'my-plugin',
		transform (code, file) {
			if(file.indexOf("css") === -1)
				return;
			const fname = file.split("\\").pop()
			// const m = (this.getCombinedSourcemap())
			//const n = SourceNode.fromStringWithSourceMap(code, new SourceMapConsumer(m))

			const optimize = (x) => csso.minify(x).css

			let emitCode = code.replaceAll("\r\n", "\n");

			const templs = [];
			const ast = this.parse(code, {locations: true, onToken: (t) => {
				if(t.type.label === 'eof') return;
				if(t.type.label === 'template') {
					emitCode = emitCode.replace(t.value, optimize(t.value));
				}
			}});
			const ast2 = this.parse(emitCode, {locations: true});
			const ast_nodes = [], ast_nodes2 = [];
			const source_nodes = [];
			walk.full(ast, node => {
				if(ast_nodes.length == 0 || ast_nodes[ast_nodes.length - 1].start < node.start)
				ast_nodes.push(node);
			});
			walk.full(ast2, node => {
				if(ast_nodes2.length == 0 || ast_nodes2[ast_nodes2.length - 1].start < node.start)
				ast_nodes2.push(node);
			});
			const srcNodes = ast_nodes.map((node, i) => {
				const node2 = ast_nodes2[i];

				const nl = node.loc.start;
				const nl2 = node2.loc.start;
				return new SourceNode(nl.line, nl.column, file, emitCode.substring(node2.start, node2.end));
			});
			const fullNode = new SourceNode(1, 0, file, srcNodes)
			const gen = fullNode.toStringWithSourceMap({ file: file }).map
			const genObj = (JSON.parse(gen.toString()))
			return {code: emitCode, map: genObj}
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
			sourcemap: true
		},
		plugins: [
			resolve(),
			cssLitTransform(),
			terser({ compress: { passes: 10 }, ecma: 2015, format: {ecma: 2015, comments: false, indent_level: 0} }),
			//visualizer()
		]
	}
];
