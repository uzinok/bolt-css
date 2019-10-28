var gulp = require("gulp");

gulp.task("copy", function () {
  return gulp.src([
    "src/fonts/*.{woff, woff2}*",
    "src/img/**/*.+(png|jpg|svg|webp|ico|gif)*",
    "src/images/**/*.+(png|jpg|svg|webp|ico|gif)*",
    "src/_i/**/*.+(png|jpg|svg|webp|ico|gif)*",
    "src/js/**/*.js",
  ], {
      base: "src"
    })
    .pipe(gulp.dest("build"));
});
