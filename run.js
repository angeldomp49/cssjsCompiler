const gulp    = require("gulp");
const concat  = require("gulp-concat");
const postcss = require("gulp-postcss");
const fs      = require("fs");
const { exec }    = require("child_process");
const options     = JSON.parse( fs.readFileSync( "ssoptions.json" ) );
const path        = require("path");
let inputs        = "";
let command       = "";

function combineCssFiles(){
  return gulp.src( ( ( options.css.all ) ? "entrycss/**/*.css" : options.css.inputs ) )
  .pipe(concat("bundle.min.css"))
  .pipe(postcss())
  .pipe(gulp.dest('./dist/css'));
};
combineCssFiles();


options.js.inputs.forEach(element => {
  inputs = inputs+" "+element;
});

if( !fs.existsSync("dist/js") ){
  fs.mkdirSync(path.join(__dirname, "dist/js"), { recursive: true });
}

command = "terser "+ inputs+ " -o dist/js/bundle.js";
exec( command );
