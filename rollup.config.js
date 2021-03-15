import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import generatePackageJson from 'rollup-plugin-generate-package-json'
export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundles/bundle.js',
    format: 'cjs'
  },
  external: [`/@babel\/runtime/`, 'react', 'react-dom'],
  plugins: [
    resolve({ extensions: ['.jsx', '.js', '.tsx'] }),
    commonjs(),
    babel({
      extensions: ['.jsx', '.js', '.tsx'],
      exclude: 'node_modules/**',
      babelHelpers: 'runtime'
    }),
    generatePackageJson({
      outputFolder: 'dist',
      baseContents: (pkg) => ({
        name: pkg.name,
        main: 'bundles/bundle.js',
        peerDependencies: {
          react: '^17.0.0'
        }
      })
    })
  ]
}
