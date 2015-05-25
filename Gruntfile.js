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
          base: '/home/sturner/code/nocturnaltortoise.github.io/'
        }
      }
    },
    // scripts:{
    //   files: ['*.css','*.html'],
    //   tasks: ['livereload'],
    //   options:{
    //     spawn: false,
    //   }
      //can put autorun scripts in here like
      //concat or uglify
    //}
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['connect','watch']);//put default tasks to run when grunt is ran here
};
