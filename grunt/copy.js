module.exports = {
  dev: {
    files: [{
      expand: true,
      cwd: 'assets/',
      src: ['**/*.!(scss)'],
      dest: 'build/'
    }]
  },
  build: {
    files: [{
      expand: true,
      cwd: 'build/',
      src: ['**/*'],
      dest: 'public'
    }]
  },
  dist: {
    files: [{
      expand: true,
      src: ['bin/**/*', 'public/**/*', 'routes/**/*', 'views/**/*', 'app.js', 'package.json'],
      dest: 'dist'
    }]
  }
};