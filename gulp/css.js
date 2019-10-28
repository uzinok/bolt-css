var gulp = require("gulp"),
  plumber = require("gulp-plumber"),
  autoprefixer = require('gulp-autoprefixer'),
  notify = require("gulp-notify"),
  server = require("browser-sync"),
  uncss = require("gulp-uncss")

gulp.task("css", function () {
  return gulp.src(["src/style/*.css", "src/css/*.css", "src/styles/*.css"])
    .pipe(plumber({
      errorHandler: notify.onError(function (err) {
        return {
          title: "css",
          message: err.message
        }
      })
    }))
    .pipe(autoprefixer({
      grid: true,
      overrideBrowserslist: ['last 10 versions']
    }))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("cleanCss", function () {
  return gulp.src("src/style/*.css")
    .pipe(uncss({
      html: ["./src/*.html"]
    }))
    .pipe(autoprefixer({
      grid: true,
      overrideBrowserslist: ['last 10 versions']
    }))
    .pipe(gulp.dest("build/css"))
})

// В зависимости от операционной системы уведомления от notify могут не отображаться на рабочем столе