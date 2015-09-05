var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCss =  require('gulp-minify-css');
var less =  require('gulp-less');
var path = require('path');

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
    .pipe(concat('bin/vendors.js'))
    .pipe(uglify())
    .pipe(gulp.dest('.'))
});

gulp.task('js', function() {
  gulp.src(['src/**/*Router.js', 'src/**/*.js'])
    .pipe(concat('application.js'))
    .pipe(uglify())
    .pipe(gulp.dest('.'))
});


// example for build
// .pipe(less({
//   paths: [ path.join(__dirname, 'less', 'includes') ]
// }))