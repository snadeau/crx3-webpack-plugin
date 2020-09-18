module.exports = {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.cjs',
    format: 'cjs',
  },
  external: ['path', 'crx3']
};