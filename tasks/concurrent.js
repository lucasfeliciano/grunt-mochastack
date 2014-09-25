'use strict';


module.exports = function concurrent(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-concurrent');

    // Options
    return {
        remoteTest: {
            tasks: ['mochacli:ie', 'mochacli:firefox'],
            options: {
                logConcurrentOutput: true
            }
        }
    }
};
