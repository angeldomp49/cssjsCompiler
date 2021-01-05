const gulp = require("gulp");
const concat = require("gulp-concat");
const postcss = require("gulp-postcss");


function combineCssFiles(){
  return gulp.src('./entrycss/**/*.css')
  .pipe(concat("bundle.min.css"))
  .pipe(postcss())
  .pipe(gulp.dest('./dist/css'));
};
combineCssFiles();