* 
* minify css files using postcss
* also minify js files using terser
* the output can be one or sereval files for css or js
* also includes lazyLoad and antiShift projects, they can be used for performance improvement
* 


* instalation info: ( not mandatory is only for reply the project )

npm init 
npm install
npm install cssnano postcss-cli

copy in postcss.config.js :

module.exports = {
    plugins: [
        require('cssnano')({
            preset: 'default',
        }),
    ],
};

the use:

postcss input.css > output.css

for several files use @import statement into input.css

npm install terser --global

use:

terser input1.js input2.js ... > output.js