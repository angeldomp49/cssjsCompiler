const gulp           = require("gulp");
const concat         = require("gulp-concat");
const postcss        = require("gulp-postcss");
const fs             = require("fs");
const { exec }       = require("child_process");
const path           = require("path");
const compressImages = require("compress-images");
const options        = JSON.parse( fs.readFileSync( "softSite.config.json" ) );


function combineCssFiles(){
  if( ! options.css.enable ){
    return;
  }

  if( options.css.all ){
    cssSource = [
      options.css.dir + "/**/*.css",
    ];
    cssSource = cssSource.concat( options.css.extras );
  }
  else{
    cssSource = options.css.inputs.concat( options.css.extras );
  }

  return gulp.src( cssSource )
  .pipe(
    concat("bundle.min.css")
      .on('error', function( error ){
        console.log('error in gulp-concat: ' + error);
        process.exit(1);
      })
  )
  .pipe(
    postcss()
      .on('error', function( error ){ 
        console.log('error in postcss: ' + error); 
        process.exit(1);
      })
  )
  .pipe(
    gulp.dest('./dist/css')
      .on('error', function(error){
        console.log('error in gulp-dest: ' + error); 
        process.exit(1);
      })
  );
};

function combineJsFiles(){
  if( ! options.js.enable ){
    return;
  }

  let jsinputs = "";

  if( !fs.existsSync("dist/js") ){
    fs.mkdirSync(path.join(__dirname, "dist/js"), { recursive: true });
  }

  if( options.js.all ){
    jsSource = [
      options.js.dir + "/**/*.css",
    ];
    jsSource = jsSource.concat( options.js.extras );
  }
  else{
    jsSource = options.js.inputs.concat( options.js.extras );
  }

  jsSource.forEach(element => {
    jsinputs = jsinputs+" "+element;
  });

  let command = "terser "+ jsinputs + " -o dist/js/bundle.min.js";
  exec( command )
    .on( 'error', function(error){
      console.log("error executing terser command: " + error);
      process.exit(1);
    } );
}

function runImgCompressor(){

  if( !options.imageCompressor.enable ){
    return;
  }

  const input = options.imageCompressor.dir + "/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}";
  const outputDir = "dist/images/";

  compressImages(input,outputDir,{
      compress_force: false,
      statistic: true,
      autoupdate: true,

  },
  false,
  {jpg: {engine: 'mozjpeg', command: [ '-quality', '70' ]}},
  //{jpg: {engine: 'webp', command: false}},
  {png: {engine: 'pngquant', command: ['--quality=70-90','-o']}},
  {svg: {engine: 'svgo', command: '--multipass'}},
  {gif: {engine: 'gifsicle', command: ['--colors', '64', '--use-col=web']}},
  function (error, completed, statistic){
      //console.log(error);
      //console.log(completed);
      //console.log(statistic);
  });
}

combineCssFiles();
combineJsFiles();
runImgCompressor();