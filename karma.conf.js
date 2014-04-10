// Karma configuration
// Generated on Tue Apr 01 2014 08:28:36 GMT-0700 (PDT)

module.exports = function(config) {
  config.set({

    basePath: '',


    // frameworks to use
    frameworks: ['qunit'],


    // list of files / patterns to load in the browser
    files: [

      'bower_components/jquery/dist/jquery.min.js',
      'bower_components/handlebars/handlebars.min.js',
      'bower_components/ember/ember.js',
      'bower_components/ember-data/ember-data.min.js',
      'bower_components/ember-qunit/dist/globals/main.js',
      'javascripts/*.js',
      'test/test-helpers.js',
      'test/*-test.js',
      'javascripts/templates/*.hbs'
    ],

    plugins: [
      'karma-qunit',
      'karma-ember-preprocessor',
      'karma-phantomjs-launcher',
      'karma-chrome-launcher'
    ],

    // list of files to exclude
    exclude: [
    ],

    preprocessors: {
      "**/*.hbs": 'ember'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],


    // web server port
    port: 9876,


    // cli runner port
    runnerPort: 9100,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: karma.LOG_DISABLE || karma.LOG_ERROR || karma.LOG_WARN || karma.LOG_INFO || karma.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    // browsers: ['Chrome'],
    browsers: ['PhantomJS'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true
  });
};
