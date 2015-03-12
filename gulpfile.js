var gulp = require('gulp'),
    react = require('gulp-react'),
    livereload = require('gulp-livereload');

gulp.task('build', function() {
    gulp.src('./src/device-component.jsx')
        .pipe(react({harmony: true}))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  	livereload.listen();
  	gulp.watch('src/*.jsx', ['build']);
});
