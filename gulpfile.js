var gulp = require('gulp');
var csscomb = require('gulp-csscomb');

gulp.task('styles', function() {
    return gulp.src('./src/**/*.*')
        .pipe(csscomb())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function(){
    gulp.watch('./src/**/*.*', function(event){
        gulp.run('styles');
    })
    gulp.watch('\.csscomb\.json', function(event){
        gulp.run('styles');
    })
});

gulp.task('default', ['styles', 'watch']);