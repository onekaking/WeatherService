/**
 * `bower`
 *
 * ---------------------------------------------------------------
 *
 * Copy files and folders from bower in your Sails app's web root
 * (conventionally a hidden directory called `.tmp/public`).
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-clean
 *
 */

module.exports = function(grunt) {
  grunt.config.set('bower', {
    dev: {
        dest: '.tmp/public',
        js_dest: '.tmp/public/js',
        css_dest: '.tmp/public/styles',
        font_dest: '.tmp/public/fonts'
    }
  });

  grunt.loadNpmTasks('grunt-bower');

};
