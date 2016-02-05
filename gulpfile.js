var gulp = require('gulp');
var csscomb = require('gulp-csscomb');

gulp.task('styles', function(){
    return gulp.src('./src/**/*.*')
        .pipe(csscomb())
        .pipe(gulp.dest('./dist/'));
});