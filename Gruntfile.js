module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
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
        src: '<%= pkg.htmlPath %>/pages/*.html',
        dest: '<%= pkg.output %>',
        options: {
          beautify: true,
          relative: true,
          sections: {
            layout: {
                header: '<%= pkg.htmlPath %>/partials/header.html',
                footer: '<%= pkg.htmlPath %>/partials/footer.html'
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
          dest: '<%= pkg.output %>i'                  // Destination path prefix 
        }]
      }
    },
    //COPY
    copy: {
      images: {
        files: [
          { expand: true, src: ['src/i/*.{png,jpg,gif}','src/i/**/*.{png,jpg,gif}'], dest: 'target/i/', filter: 'isFile'},
        ],
      },
      fonts:{
        fontsCopy: [
          { expand: true, src: ['src/fonts/*'], dest: 'target/fonts/', filter: 'isFile'},
        ],
      },
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
        tasks: ['copy:images']
      },
      fonts: {
        files: ['src/fonts/**/*'],
        tasks: ['copy:fonts']
      }
    },
    //CLEAN
    clean: ["target/**/*"]
  });
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-html-build');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
    
  //default Grunt task
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('dev', ['uglify:dev', 'htmlbuild', 'compass:dev', 'copy']);
  grunt.registerTask('prod', ['uglify:build', 'htmlbuild', 'compass:prod', 'imagemin', 'copy:fonts']);

};




