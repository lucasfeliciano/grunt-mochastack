'use strict';

var browsersConfig = require('../config.js');
var _              = require('lodash');
var mochaOptions   = {};
var targets        = {};
var targetNames    = _.keys(browsersConfig);
var mochaOption    = {
  src: ['test/*.js', 'test/models/*.js'],
  options: {
    timeout: 6000,
    'check-leaks': true,
    ui: 'bdd',
    reporter: 'spec'
  }
};

targets = _.map(targetNames, function(name){
  var output = {}

  output[name] = {
    src: ['test/interface/*.js'],
    options: {
      env: {
        config: name
      }
    }
  }

  return output;
});

module.exports = function mochacli(grunt) {
  // Load task
  grunt.loadNpmTasks('grunt-mocha-cli');

  // Options
  return mochaOptions;
};
