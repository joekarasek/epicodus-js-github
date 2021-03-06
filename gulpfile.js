// ==================================
// **********************************
//   Includes (dependencies of gulp)
// ==================================
var gulp = require('gulp');
var browserify = require('browserify');
var concat = require('gulp-concat');
var del = require('del');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var utilities = require('gulp-util');
var browserSync = require('browser-sync').create();
    // override is required for bootstrap to work correctly
var lib = require('bower-files')();

// Set build env from command line
// Required to control whether the final build is minified
var buildProduction = utilities.env.production;

var config = {
  dir: {
    js: './js/*.js',
    scss: './scss/*.scss'
  }
};

// ==================================
// **********************************
//               Tasks
// Note: Serve is designed to run all
// other tasks including build, lint,
// launch server, and initiate
// browser-sync
// ==================================
// start server, runs all builds, sets up watch, cleans tmp file
gulp.task('serve', ['buildStart'], function(){
  gulp.start('jshint');
  browserSync.init({
    server: {
      baseDir: "./",
      index: "index.html"
    }
  });
  gulp.watch(config.dir.js, ['jsBrowserify', 'reload']);
  gulp.watch('./*.html', ['reload']);
  gulp.watch(config.dir.scss, ['cssBuild', 'reload']);
  gulp.start('removeTmp');
});

// Reloads the browser window, used by gulp.watch
gulp.task('reload', function() {
  browserSync.reload();
});

// initial clean files, clears build, clears tmp (in case it was not already deleted)
gulp.task('initialClean', function(){
  return del(['build', 'tmp']);
});

// removed tmp file, runs at end of serve after all builds finish (hopefully)
gulp.task('removeTmp', function(){
  return del(['tmp']);
});

// starts initial clean before all builds fires off
gulp.task('buildStart', ['initialClean'], function() {
  gulp.start('buildAll');
});

// starts cssBuild (sass), bowerBuild (front-end dependencies), and jsBrowserify (js)
gulp.task('buildAll', ['cssBuild', 'bowerBuild', 'jsBrowserify']);

// compile sass/scss, builds css files
gulp.task('cssBuild', function() {
  return gulp.src(config.dir.scss)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build/css'));
});

// will run JS and CSS for bower (front-end dependencies)
gulp.task('bowerBuild', ['bowerJS', 'bowerCSS', 'fonts']);

// front end dependencies js
gulp.task('bowerJS', function () {
  return gulp.src(lib.ext('js').files)
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});

// front end dependencies css
gulp.task('bowerCSS', function () {
  return gulp.src(lib.ext('css').files)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('./build/css'));
});

// font build (works with materialize)
gulp.task('fonts', function() {
  return gulp.src(['./bower_components/Materialize/font/*/*.*'])
  .pipe(gulp.dest('./build/font/'));
});


// Takes concatenated JS and browserify's it
gulp.task('jsBrowserify' , ['concat', 'jshint'] , function() {
  return browserify({ entries: ['./tmp/allConcat.js']})
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./build/js'));
});

// concat all js files, puts in tmp
gulp.task('concat', function() {
  return gulp.src(['./js/*-interface.js'])
  .pipe(concat('allConcat.js'))
  .pipe(gulp.dest('./tmp'));
});

// linter
gulp.task('jshint', function(){
  return gulp.src(['js/*.js'])
    // If no .jshintrc file is present, use this line instead for default settins
    // .pipe(jshint())
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'));
    // .pipe(jshint.reporter('fail'));
});
