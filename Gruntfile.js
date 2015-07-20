var mozjpeg = require('imagemin-mozjpeg');

module.exports = function(grunt){

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      options: {
        livereload: true,
      },
      css: {
        files: ['*.css'],
      },
      html: {
        files: ['*.html'],
      },
    },

    connect: {
      server:{
        options: {
          port: 8000,
          base: '/home/simon/code/nocturnaltortoise.github.io/'
        }
      }
    },

    imagemin: {
      dynamic: {
        options: {                       // Target options
          optimizationLevel: 3,
          svgoPlugins: [{ removeViewBox: false }],
          use: [mozjpeg()]
        },
        files: [{
          expand: true,                     // Enable dynamic expansion
          cwd: 'images/original-images/',   // Src matches are relative to this path
          src: ['**/*.{png,jpg}'],         // Actual patterns to match
          dest: 'images/'                  // Destination path prefix
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.registerTask('default',['connect','watch']);//put default tasks to run when grunt is ran here
};
