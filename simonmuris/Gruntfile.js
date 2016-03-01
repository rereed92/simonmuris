module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded',
          sourcemap: 'none'
        },
        files: {                         // Dictionary of files
          'style.css': 'components/sass/main.scss'       // 'destination': 'source'
        }
      },
      build: {                            // Target
        options: {                       // Target options
          style: 'compressed',
          sourcemap: 'none'
        },
        files: {                         // Dictionary of files
          'style.css': 'components/sass/main.scss'       // 'destination': 'source'
        }
      }
    },
    watch: {
      sass: {
        files: 'components/sass/**/*.scss',
        tasks: ['sass:dist'] //autoprefixer
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s). 'grunt'
  grunt.registerTask('default', ['sass:dist']); //uglify goes here, autoprexier
};