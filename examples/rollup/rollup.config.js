import typescript from 'rollup-plugin-typescript2';
import {terser} from 'rollup-plugin-terser';
import json from 'rollup-plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import {nodeResolve} from '@rollup/plugin-node-resolve';

export default {
  input: './src/index.ts',
  plugins: [
    typescript({
      tsconfigDefaults: {compilerOptions: {}},
      tsconfig: 'tsconfig.json',
      tsconfigOverride: {compilerOptions: {}},
      useTsconfigDeclarationDir: true
    }),
    terser(),
    json(),
    commonjs(),
    nodeResolve({
      mainFields: ['module', 'main'],
      browser: true
    }),
  ],
  output: [
    // ES module (for bundlers) build.
    {
      format: 'esm',
      file: 'dist/index.esm.js',
    },
    // browser-friendly UMD build
    {
      format: 'umd',
      file: 'dist/index.js',
    }
  ],
}