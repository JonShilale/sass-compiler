const gulp = require('gulp');
const sass = require('gulp-sass');


gulp.task('compilecss', () => gulp.src('./src/*.scss')
  .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
  .pipe(gulp.dest('./dest/css')));