'use strict';

var browsersConfig = require('../config.js');
var _              = require('lodash');
var browsers       = [];
var mochacliTasks  = [];

browsers = _.without(_.keys(browsersConfig), 'local');

mochacliTasks = _.map(browsers, function(browser){
    return 'mochacli:' + browser;
});

module.exports = function concurrent(grunt) {
  // Load task
  grunt.loadNpmTasks('grunt-concurrent');

  // Options
  return {
    remoteTest: {
      tasks: mochacliTasks,
      options: {
        logConcurrentOutput: true
      }
    }
  }
};
