var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCss =  require('gulp-minify-css');
var less =  require('gulp-less');
var path = require('path');
var changed = require('gulp-changed');
var minifyHTML = require('gulp-minify-html');
var connect = require('gulp-connect');
var order = require('gulp-order');

gulp.task('connect', function () {
    connect.server({
        root: 'src/',
        port: 8888
    });
});

gulp.task('less', function() {
  gulp.src(['src/less/**/*.less'])
    .pipe(concat('bin/custom.less'))
    .pipe(less())
    .pipe(gulp.dest('.'))
});

gulp.task('css', function() {
  gulp.src(['vendor/bootstrap/dist/**/*.css', 'src/css/**/*.css'])
    .pipe(concat('bin/styles.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('.'))
});

gulp.task('vendors', function() {
  gulp.src(['vendor/**/*.js'])
    .pipe(order([
          'vendor/angular/angular.min.js',
          'vendor/angular-bootstrap/ui-bootstrap.min.js',
          'vendor/**/*.js'
      ]))
    .pipe(concat('bin/vendors.js'))
    .pipe(uglify())
    .pipe(gulp.dest('bin'))
});

gulp.task('js', function() {
  gulp.src(['src/**/*Router.js', 'src/**/*.js'])
    .pipe(concat('bin/application.js'))
    .pipe(uglify())
    .pipe(gulp.dest('.'))
});

gulp.task('html', function() {
  gulp.src(['src/*.html'])
      .pipe(changed('src'))
      .pipe(minifyHTML())
      .pipe(gulp.dest('bin'))
});

gulp.task('default', ['less', 'css', 'vendors', 'js', 'html'], function() {});

// example for build
// .pipe(less({
//   paths: [ path.join(__dirname, 'less', 'includes') ]
// }))