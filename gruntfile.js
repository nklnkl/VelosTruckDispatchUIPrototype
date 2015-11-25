module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      css: {
        files: ['public/stylesheets/*.css'],
        tasks: ['concat']
      }
    },
    concat: {
      css: {
        src: 'public/stylesheets/*.css',
        dest: 'public/style.css'
      },
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
}
