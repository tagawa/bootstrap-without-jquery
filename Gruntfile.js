module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                browser: true,
                camelcase: true,
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                noempty: true,
                quotmark: true,
                undef: true,
                unused: true,
                expr: true
            },
            all: ['bower.json', 'package.json', 'bootstrap2/bootstrap-without-jquery.js', 'bootstrap3/bootstrap-without-jquery.js']
        },
        concat: {
            options: {
                separator: '\n;\n'
            },
            b3: {
                src: ['lib/classList.js', 'bootstrap3/<%= pkg.name %>.js'],
                dest: 'tmp/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                preserveComments: 'some',
                report: 'gzip'
            },
            b2: {
                src: 'bootstrap2/<%= pkg.name %>.js',
                dest: 'bootstrap2/<%= pkg.name %>.min.js'
            },
            b3: {
                src: 'tmp/<%= pkg.name %>.js',
                dest: 'bootstrap3/<%= pkg.name %>.min.js'
            }
        },
    });
    
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
};
