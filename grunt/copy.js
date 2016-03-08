module.exports = {
  // dev: {
  //   files : [{ 
  //     expand: true, 
  //     cwd: 'build/',
  //     src: ['stylesheets/{,*/}*.css', 'stylesheets/{,*/}*.css.map'], 
  //     dest: 'public/' 
  //   },
  //   {
  //     expand: true, 
  //     cwd: 'assets/',
  //     src: ['javascripts/{,*/}*.js'], 
  //     dest: 'public/'
  //   }]
  // }
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