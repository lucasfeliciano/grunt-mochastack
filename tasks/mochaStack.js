'use strict'

var browserStackConfig = require('../config.js');


module.exports = function mochastack(grunt) {
  
  // Load task
  grunt.registerTask('mochastack', ['concurrent:remoteTest'])

};
