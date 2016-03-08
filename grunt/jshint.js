module.exports = {
  options: {
    jshintrc: '.jshintrc',
    reporter: require('jshint-stylish')
  },
  all: ['gruntfile.js', 'routes/**/*.js']
};