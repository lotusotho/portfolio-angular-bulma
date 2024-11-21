const gulp = require("gulp");
const concat = require("gulp-concat");
const gzip = require("gulp-gzip");
const sourcemaps = require("gulp-sourcemaps");
const path = require("path");

const outputFolder = "compressed/";

gulp.task("compress-js", function () {
  return gulp
    .src("src/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(concat("all.js"))
    .pipe(gzip())
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest(outputFolder));
});

gulp.task("compress-css", function () {
  return gulp
    .src("src/**/*.css")
    .pipe(sourcemaps.init())
    .pipe(concat("all.css"))
    .pipe(gzip())
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest(outputFolder));
});

gulp.task("default", gulp.parallel("compress-js", "compress-css"));
