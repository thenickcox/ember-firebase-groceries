module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        mangle: false,
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
      },
      my_target: {
      },
    },
    cssmin: {
      combine: {
        files: {
          'css/style.min.css': ['css/style.css']
        }
      }
    },
    concat: {
      options: {
      },
      dist: {
        src: [
          'bower_components/jquery/jquery.min.js',
          'bower_components/handlebars/handlebars.min.js',
          'bower_components/ember/ember.min.js',
          'bower_components/ember-data/ember-data.min.js',
          'bower_components/emberfire/dist/emberfire.js',
          'javascripts/compile_templates.js',
          'javascripts/app.js'
        ],
        dest: 'javascripts/app.concat.js',
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('default', ['uglify']);

};;
