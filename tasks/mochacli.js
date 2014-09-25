'use strict';


module.exports = function mochacli(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-mocha-cli');

	// Options
	return {
        src: ['test/*.js', 'test/models/*.js'],
        options: {
            timeout: 6000,
            'check-leaks': true,
            ui: 'bdd',
            reporter: 'spec'
        },
        local:{
            src: ['test/interface/*.js'],
            options: {
                env: {
                    config: 'local'
                }
            }
        },
        ie: {
            src: ['test/interface/*.js'],
            options: {
                env: {
                    config: 'ie'
                }
            }
        },
        firefox: {
            src: ['test/interface/*.js'],
            options: {
                env: {
                    config: 'firefox'
                }
            }
        }
	};
};
