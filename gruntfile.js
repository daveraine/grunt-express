module.exports = function(grunt) {

  // Project configuration.
//   grunt.initConfig({
//     pkg: grunt.file.readJSON('package.json'),
//     
//     express: {
//       dev: {
//         options: {
//           script: './bin/www',
//           node_env: 'development',
//           debug: true
//         }
//       }
//     },
//     
//     watch: {
//       options: {
//         spawn: false
//       },
//       css: {
//         files: ['assets/sass/**/*.scss'],
//         tasks: ['sass']
//       },
//       express: {
//         files:  ['**/*.js', '!**/node_modules/**', '!**/public/javascripts/**'],
//         tasks:  ['express:dev']
//       }
//     },
//     
//     sass: {
//       options: {
//         sourceMap: true
//       },
//       dist: {
//         files: {
//           'public/stylesheets/main.css': 'assets/sass/main.scss'
//         }
//       }
//     }
//     
//   });
// 
//   grunt.loadNpmTasks('grunt-express-server');
//   grunt.loadNpmTasks('grunt-contrib-watch');
//   grunt.loadNpmTasks('grunt-sass');
  
  require('load-grunt-config')(grunt);

//   grunt.registerTask('dev-server', ['express:dev', 'watch']);
// 
//   grunt.registerTask('default', ['sass', 'dev-server']);

};