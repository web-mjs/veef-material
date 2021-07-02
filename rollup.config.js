import resolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
import strip from '@rollup/plugin-strip';
import copy from 'rollup-plugin-copy';
import {minify} from 'html-minifier-terser';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import csso from 'csso';


function myPlugin () {
	return {
		name: 'my-plugin', // this name will show up in warnings and errors
		transform(code, map) {
			if(map.indexOf("css") === -1)
				return;

			const optimize = (x) => '`' + csso.minify(x).css + '`';
			let emit = '';
			const templateVals = {};
			const ast = this.parse(code, {onToken: (t) => {
				if(t.type.label !== 'template') return;
				templateVals[t.start - 1] = t.value;
			}});

			const varTemplates = {};
			ast.body.filter(x => x.type === 'VariableDeclaration').map(varDecl => {
				varDecl.declarations.filter(d => d.init.type === 'TemplateLiteral').map(d => {
					varTemplates[d.id.name] = templateVals[d.init.start];
				});
			});
				ast.body.filter(x => x.type === 'ExportNamedDeclaration').map(decl => {
				if(decl.declaration === null) {
					// export { x as y }
					let varDecls = decl.specifiers.map(spec => {
						const lit = varTemplates[spec.local.name];
						emit += `const ${spec.local.name} = ${optimize(lit)};\n`
						emit += `export { ${spec.local.name} as ${spec.exported.name} };\n`
					});
				} else {
					// export const code = 
					let varDecls = decl.declaration.declarations;
					varDecls.filter(d => d.init.type === 'TemplateLiteral').map(decl => {
						const lit = templateVals[decl.init.start];
						emit += `export const ${decl.id.name} = ${optimize(lit)};\n`;
					});
				}
				});
			return emit;
		}
	};
}

export default [
	{
		// index es6
		input: './custom-bundle.mjs',
		output: {
			file: 'custom-bundle.js',
			//format: 'es',
			format: 'iife',
		},
		plugins: [
			resolve(),
			myPlugin(),
			terser({ compress: { passes: 10 }, ecma: 2015, format: {ecma: 2015, comments: false, indent_level: 0} }),
		]
	}
];
