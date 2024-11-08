let gulp = require("gulp");
let gzip = require("gulp-gzip");

gulp.task("compress", function () {
  return gulp.src(["./dist/**/*.*"]).pipe(gzip()).pipe(gulp.dest("./dist"));
});
