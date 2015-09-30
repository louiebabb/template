module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    htmlPath: "src/html/",
    //JS Uglify
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/js/*.js',
        dest: '<%= pkg.output %>/js/custom.min.js'
      },
      dev:{
        beautify:true,
        mangle:false,
        compress:false,
        preserveComments: 'all',
        src: 'src/js/*.js',
        dest: '<%= pkg.output %>/js/custom.min.js'
      }
    },
    //CONCAT 
    concat: {
      dist: {
        src: ['<%= htmlPath %>partials/header.html', 'src/html/pages/*.html', 'src/html/partials/footer.html'],
        dest: '<%= pkg.output %>/index.html',
      },
    },
    //COMPASS
    compass: {
      dev: {
        options: {
          config: 'config.rb',
          outputStyle: 'expanded'
        }
      },
      prod: {
        options: {
          config: 'config.rb',
          outputStyle: 'compressed'
        }
      }
    },
    // HTML build
    htmlbuild: {
        dist: {
            src: '<%= htmlPath %>/pages/*.html',
            dest: 'target/',
            options: {
                beautify: true,
                relative: true,
                sections: {
                    views: '<%= htmlPath %>/pages/**/*.html',
                    templates: '<%= htmlPath %>/pages/**/*.html',
                    layout: {
                        header: '<%= htmlPath %>/partials/header.html',
                        footer: '<%= htmlPath %>/partials/footer.html'
                    }
                },
            }
        }
    },

    //IMAGES
    imagemin: {
        dynamic: {
        files: [{
          expand: true,                  // Enable dynamic expansion 
          cwd: 'src/i',                   // Src matches are relative to this path 
          src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match 
          dest: 'target/i'                  // Destination path prefix 
        }]
        }
    },
    // WATCH
    watch: {
        js: {
          files:['src/js/*.js'],
          tasks:['uglify:build']
        },
        css: {
          files: ['src/css/*.scss','src/css/sass/*.scss'],
          tasks: ['compass:dev'],
        },
        html: {
          files: ['src/html/partials/*.html','src/html/pages/*.html'],
          tasks: ['htmlbuild'],
        },
        images: {
          files: ['src/i/*.{png,jpg,gif}'],
          tasks: ['imagemin']
        }
    }
  });
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-html-build');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
    
  //default Grunt task
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['uglify:build', 'htmlbuild', 'compass:prod', 'imagemin']);

};




