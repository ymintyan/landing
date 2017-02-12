var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
 
gulp.task('sass', function(){ 
    return gulp.src('scss/*.scss') 
        .pipe(sass()) 
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) 
        .pipe(gulp.dest('css/'));
    
});
 
gulp.task('watch', function () {
  gulp.watch('scss/*.scss', ['sass']);
});

 
gulp.task('default', ['sass', 'watch']);