var gulp = require("gulp"),
 	sourcemaps = require("gulp-sourcemaps"),
 	babel = require("gulp-babel"),
 	concat = require("gulp-concat"),
 	livereload = require('gulp-livereload');

gulp.task("build", function () {
  return gulp.src(["src/componentes/**/*.js*", "src/*.js*"])
    .pipe(sourcemaps.init())
    .pipe(concat("all.js"))
    .pipe(babel())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist"));
});

gulp.task('watch', function() {
  	livereload.listen();
  	gulp.watch('src/**/*', ['build']);
});
