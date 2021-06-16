import resolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import strip from '@rollup/plugin-strip';
import copy from 'rollup-plugin-copy';
import {minify} from 'html-minifier-terser';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';


const htmlReplacements = [
  {
    before: /\.\.\/node_modules/g,
    after: 'polyfills',
  },
];

const htmlCopyTransform = (contentsRaw) => {
  let contents = contentsRaw.toString();
  htmlReplacements.forEach((replacement) => {
    contents = contents.replace(
      replacement.before,
      replacement.after
    );
  });
  const out = minify(contents, {
    removeComments: true,
    collapseWhitespace: true,
    caseSenseitive: false,
    minifyCSS: true,
    minifyJS: true
  });

  return out;
};

export default [
  {
    // index es6
    input: './component-imports.mjs',
    output: {
      file: 'component-bundle.js',
      format: 'es',
    },
    plugins: [
      resolve(),
      minifyHTML(),
      terser({ compress: { passes: 10 }, ecma: 2015, format: {ecma: 2015, comments: false, indent_level: 0} }),
      strip({
        functions: ['console.log'],
      })
    ]
  }
];
