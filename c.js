const { exec }    = require("child_process");
const fs          = require("fs");
const options     = JSON.parse( fs.readFileSync( "ssoptions.json" ) );
const path        = require("path");
let inputs        = "";
let command       = "";


options.js.inputs.forEach(element => {
    inputs = inputs+" "+element;
});

if( !fs.existsSync("dist/js") ){
    fs.mkdirSync(path.join(__dirname, "dist/js"), { recursive: true });
}

command = "terser "+ inputs+ " -o dist/js/bundle.js";
exec( command );


