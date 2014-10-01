module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'web/style.css': 'app/style/style.scss'
        }
      }
    },
    watch: {
      sass: {
        files: 'app/style/style.scss',
        tasks: 'sass'
      }
    },
    'sf2-console': {
      options: {
        bin: 'app/console'
      },
      run: {
        cmd: 'server:run',
        args: {
          env: 'dev'
        }
      }
    },
    concurrent: {
      dev: {
        tasks: ['sf2-console:run', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    }

// js
// phpunit?
// symfony?
  });

// Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-symfony2');

// Default task(s).
  grunt.registerTask('dev', ['sass', 'concurrent:dev'])
  grunt.registerTask('build', ['sass'])
  grunt.registerTask('default', ['dev']);

}
;

