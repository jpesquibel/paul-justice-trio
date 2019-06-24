let gulp = require('gulp');
let sass = require('gulp-sass');
 
gulp.task('sass',  () => {
  return gulp.src('./app/scss/*.scss')
  .pipe(sass().on('error', sass.logError))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./_dist/css'));
});

gulp.task('html', () => {
    return gulp.src('./app/*.html')
      .pipe(gulp.dest('./_dist'));
  });
 
gulp.task('watch', () => {
  gulp.watch('./app/scss/*.scss', gulp.series('sass'));
  gulp.watch('./app/*.html', gulp.series('html'));  
});

gulp.task('default', gulp.series('watch'));