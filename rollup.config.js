import postcss from 'rollup-plugin-postcss';
import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import url from 'postcss-url';

export default {
    input: './src/emails-editor.js',
    output: [{
        format: 'umd',
        sourcemap: true,
        file: './dist/emails-editor.umd.js',
        name: 'EmailsEditor'
    }, {
        format: 'es',
        sourcemap: true,
        file: './dist/emails-editor.es.js'
    }],
    plugins: [
        postcss({
            modules: true,
            sourceMap: true,
            plugins: [
                url({
                    url: 'inline'
                })
            ]
        }),
        commonjs({
            include: 'node_modules/**'
        }),
        babel({
            exclude: 'node_modules/**',
            runtimeHelpers: true
        })
    ]
}
