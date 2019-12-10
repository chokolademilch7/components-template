import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import babel from 'rollup-plugin-babel';
import terser from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.js',
  output: {
    sourcemap: true,
    file: 'public/build/bundle.js',
    format: 'iife'
  },
  plugins: [
    resolve({
      browser: true
    }),
    commonjs(),
    babel(),
    !production && serve(),
    !production && livereload('public'),
    production && terser()
  ],
  watch: {
    cleanScreen: false
  }
};


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