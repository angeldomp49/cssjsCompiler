const gulp    = require("gulp");
const concat  = require("gulp-concat");
const postcss = require("gulp-postcss");
const fs      = require("fs");
const { exec }    = require("child_process");
const options     = JSON.parse( fs.readFileSync( "ssoptions.json" ) );
const path        = require("path");
let jsinputs        = "";
let command       = "";

function combineCssFiles(){
  return gulp.src( ( ( options.css.all ) ? "entrycss/**/*.css" : options.css.inputs ) )
  .pipe(concat("bundle.min.css"))
  .pipe(postcss())
  .pipe(gulp.dest('./dist/css'));
};
combineCssFiles();

options.js.inputs.forEach(element => {
  jsinputs = jsinputs+" "+element;
});

if( !fs.existsSync("dist/js") ){
  fs.mkdirSync(path.join(__dirname, "dist/js"), { recursive: true });
}

command = "terser "+ (( options.js.all ) ? "entryjs/**/*.js" : jsinputs) + " -o dist/js/bundle.min.js";
exec( command );
