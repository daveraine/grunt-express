module.exports = {
  options: {
    spawn: false
  },
  css: {
    files: ['assets/sass/**/*.scss'],
    tasks: ['sass']
  },
  express: {
    files:  ['**/*.js', '!**/node_modules/**', '!**/public/javascripts/**'],
    tasks:  ['express:dev']
  }
};