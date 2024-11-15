const gulp = require("gulp");
const gzip = require("gulp-gzip");
const sourcemaps = require("gulp-sourcemaps");
const path = require("path");

const outputFolder = "compressed/";

gulp.task("compress", function () {
  return gulp
    .src("src/**/*.{html,js,css,json,xml,txt}")
    .pipe(sourcemaps.init())
    .pipe(gzip())
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest(outputFolder));
});

gulp.task("watch", function () {
  gulp.watch("src/**/*.{html,js,css,json,xml,txt}", gulp.series("compress"));
});
