module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*!\n' +
            ' * Bootstrap without jQuery v<%= pkg.version %>\n' +
            ' * By <%= pkg.author %> under <%= pkg.license %> License\n' +
            ' <%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            ' */\n',
        jshint: {
            options: {
                browser: true,
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                undef: true,
                unused: true
            },
            all: ['bower.json', 'package.json', 'bootstrap-without-jquery.js']
        },
        uglify: {
            options: {
                banner: '<%= banner %>',
                report: 'gzip'
            },
            dist: {
                src: '<%= pkg.name %>.js',
                dest: '<%= pkg.name %>.min.js'
            }
        },
    });
    
    //grunt.loadNpmTasks('grunt-contrib-concat');
    //grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-contrib-watch');
    //grunt.loadNpmTasks('grunt-autoprefixer');

    // Default task.
    //grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'autoprefixer', 'cssmin']);
    grunt.registerTask('default', ['jshint', 'uglify']);
};




