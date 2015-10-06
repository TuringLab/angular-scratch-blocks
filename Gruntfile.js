module.exports = function(grunt) {

  grunt.initConfig({

    // Automatically inject bower dependencies into index.html
    wiredep : {
      task : {
        src: [
          'main/index.html'
          ]
      }
    },

    // Run a development express server 
    express: {
      dev: {
        options: {
          script: 'server.js'
        }
      }
    },

    // Watch for file changes when running server
    watch: {
      files: ['main/**/*'],
      tasks: ['wiredep'],
      options: {
        livereload: true
      }
    }

  });

  // dependencies
  grunt.loadNpmTasks('grunt-wiredep');

  // server
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['wiredep','express','watch']);

};