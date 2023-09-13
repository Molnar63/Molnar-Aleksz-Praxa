const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass");

sass.compiler = require("sass"); // Use the "sass" package as the Sass compiler

const compileSass = () => {
  return src("./scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("./css/"));
};

const devWatch = () => {
  watch("./scss/**/*.scss", compileSass);
};

exports.compileSass = compileSass;
exports.devWatch = devWatch;
