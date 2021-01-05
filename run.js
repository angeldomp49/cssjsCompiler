const gulp = require("gulp");
const concat = require("gulp-concat");
const postcss = require("gulp-postcss");
const fs      = require("fs");

const options = JSON.parse( fs.readFileSync("./ssoptions.json") );

function combineCssFiles(){
  return gulp.src(options.css.inputs)
  .pipe(concat("bundle.min.css"))
  .pipe(postcss())
  .pipe(gulp.dest('./dist/css'));
};
combineCssFiles();