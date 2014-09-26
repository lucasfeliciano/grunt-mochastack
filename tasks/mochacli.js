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

 _.forEach(targetNames, function(name){

  targets[name] = {
    src: ['test/interface/*.js'],
    options: {
      env: {
        config: name
      }
    }
  }

});

mochaOptions = _.merge(mochaOption, targets);


module.exports = function mochacli(grunt) {
  // Load task
  grunt.loadNpmTasks('grunt-mocha-cli');

  // Options
  return mochaOptions;
};
