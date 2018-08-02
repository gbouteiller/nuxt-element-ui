import camelCase from 'lodash.camelcase';
import commonjs from 'rollup-plugin-commonjs';
import copy from 'rollup-plugin-copy-assets';
import json from 'rollup-plugin-json';
import builtins from 'rollup-plugin-node-builtins';
import resolve from 'rollup-plugin-node-resolve';
import sourceMaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript2';

const pkg = require('./package.json');

const libraryName = 'nuxt-element-ui';

export default {
  input: `src/${libraryName}.ts`,
  output: [
    { file: pkg.main, name: camelCase(libraryName), format: 'umd', sourcemap: true },
    { file: pkg.module, format: 'es', sourcemap: true },
  ],
  external: ['lodash.camelcase', 'lodash.kebabcase', 'lodash.upperfirst', 'path' ],
  watch: {
    include: 'src/**',
  },
  plugins: [
    copy({ assets: ['src/lib/templates'] }),
    builtins(),
    json(),
    typescript({ useTsconfigDeclarationDir: true }),
    commonjs(),
    resolve(),
    sourceMaps(),
  ],
};
