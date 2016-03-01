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
          'style.css': 'assets/sass/main.scss'       // 'destination': 'source'
        }
      },
      build: {                            // Target
        options: {                       // Target options
          style: 'compressed',
          sourcemap: 'none'
        },
        files: {                         // Dictionary of files
          'style.css': 'assets/sass/main.scss'       // 'destination': 'source'
        }
      }
    },
    postcss: {
      options: {
        map: false, // inline sourcemaps
        processors: [
          require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
        ]
      },
      dist: {
        src: 'style.css',
      }
    },
    watch: {
      sass: {
        files: 'assets/sass/**/*.scss',
        tasks: ['sass:dist', 'postcss'] //autoprefixer
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');

  // Default task(s). 'grunt'
  grunt.registerTask('default', ['sass:dist', 'postcss']); //uglify goes here, autoprexier
};