module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      css: {
        files: ['public/stylesheets/*.css'],
        tasks: ['concat']
      },
      js: {
        files: ['public/javascripts/*.js'],
        tasks: ['concat']
      }
    },
    concat: {
      css: {
        src: 'public/stylesheets/*.css',
        dest: 'public/style.css'
      },
      js: {
        src: 'public/javascripts/*.js',
        dest: 'public/script.js'
      },
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
}
