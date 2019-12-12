import fs from 'fs';
import commonjs from 'rollup-plugin-commonjs';
import style from 'rollup-plugin-lit-html-style';
import livereload from 'rollup-plugin-livereload';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

const production = !process.env.ROLLUP_WATCH;

const inputFiles = (dir, expands) => {
  const regex = new RegExp(expands.map(epd => `${epd}$`).join('|'));
  return fs.readdirSync(dir).filter(fn => fn.match(regex)).map(fn => `${dir}/${fn}`);
}

const inputDir = (dir, expands) => {
  let ret = {};
  fs.readdirSync(dir).forEach(dirname => {
    ret[dirname] = inputFiles(`${dir}/${dirname}`, expands)[0];
  });
  return ret;
}

export default {
  input: inputDir('src/components', ['.js', '.ts']),
  output: {
    dir: 'public/build',
    entryFileNames: 'a100-[name].mjs',
    format: 'esm'
  },
  plugins: [
    typescript(),
    style({
      include: ['src/components/*/*.css']
    }),
    resolve({
      browser: true
    }),
    commonjs(),
    !production && serve(),
    !production && livereload('public'),
    production && terser()
  ]
}

function serve() {
  let started = false;

  return {
    writeBundle() {
      if (!started) {
        started = true;

        require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
          stdio: ['ignore', 'inherit', 'inherit'],
          shell: true
        });
      }
    }
  };
}