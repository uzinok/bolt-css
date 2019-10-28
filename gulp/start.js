var gulp = require("gulp"),
    server = require("browser-sync");

gulp.task("server", function () {
  server.init({
    server: {baseDir: "./build"},
    injectChanges: true,
    notify: true,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("src/style/**/*.css", gulp.series("css")).on("change", server.stream);
  gulp.watch("src/js/*.js", gulp.series("js")).on("change", server.reload);
  gulp.watch("src/*.html", gulp.series("html")).on("change", server.reload);
  gulp.watch("src/template/*.html", gulp.series("html")).on("change", server.reload);
  gulp.watch("src/img/*.+(svg|png|jpg|webp)", gulp.series("copy")).on("change", server.reload);
});

gulp.task("build", gulp.series("clean", "copy", "css", "js", "html",));
gulp.task("default", gulp.series("build", "server"));
