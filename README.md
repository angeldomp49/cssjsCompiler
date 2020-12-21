=====================
#### optimizator #### 
=====================

* this project use this technologies

1. postcss
2. terser
3. compress-images
4. lazyLoad
5. antiShift
6. .htaccess file


====================
1. # postcss
====================



* this project as all necessary for works but the next instructions are a guideline for install postcss.

====================
1. 1. installation:
====================

$ npm init 
$ npm install
$ npm install cssnano postcss-cli

===================================
1. 2. copy in postcss.config.js :
===================================
______________________________________
module.exports = {
    plugins: [
        require('cssnano')({
            preset: 'default',
        }),
    ],
};
_______________________________________

====================================
1. 3.  use postcss:
====================================

$ postcss input.css > output.css

=====================================
1. 4. for several files use @import statement into input.css
=====================================


===================
2. # terser
===================


=====================
2. 1. installation
=====================

$ npm install terser --global

===============================
2. 2. for minify js files use:
===============================

$ terser input1.js input2.js ... > output.js



=====================
3. # compress-images
=====================


======================
3. 1. installation
======================

$ npm install compress-images pngquant-bin gifsicle

=================================
3. 2. for compress-images.js
=================================

___________________________________________________________________________________
let compressImages = require("compress-images"); 

const input = "imageCompressor/src/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}";
const outputDir = "imageCompressor/dist/";

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
    console.log(error);
    console.log(completed);
    console.log(statistic);
});
____________________________________________________________________________________

=============================
3. 3. run:
=============================

$ node imageCompressor/compress-images.js



===============
4. # lazyLoad
===============



=========================
4. 1.    images
=========================

4. 1. 1.  link the lazy.min.js file
4. 1. 2.  add the class lazy in each element who needs it

    <img class="lazy">

4. 1. 3.  for img tags add the data-src and data-srcset attributes ( can contain the same )
4. 1. 4.  remove the src attribute value like:

    <img class="lazy" data-src="image.jpg" data-srcset="image.jpg" src="">

4. 1. 5.  automatically when the viewport show the image it fill the src and srcset attribute

============================
4. 2.   videos
============================

4. 2. 1.  turn the preload attribute to none, if the video is autoplay remember turn muted to true, the autoplay tag should not appears or be false.
4. 2. 2.  add the lazy class.
4. 2. 3.  automatically when the viewport show the video the script plays it. the disadvantage is clear, if the network connection is very slow the video takes long time in load.

    <video class="lazy" muted preload="none" src="resource.mp4">

============================
4. 3.   backgrounds
============================

4. 3. 1. set attribute data-bg with the respective value
4. 3. 2. set the class lazy
4. 3. 3. remove the background attribute value like:

    <div class="lazy" data-bg="url('assets/resource.jpg')" style="background: unset;" >

4. 3. 4. when the viewport show this, the background takes the data-bg attribute



=============================
5. # antiShift
=============================

5. 1. link the antiShift.min.js
5. 2. add the antiShift class in all container elements who need it like:

    <div class="antiShift" >

5. 3. add the default height in the style tag like:

    <div style="height: 50px;"> 
5. 4. when the window loads completely the height is redefined to auto

    <div style="height: auto;">

5. 5. if you can't add height directly in style element tag you should include the shifts.min.css

5. 6. add the respective class like:

    <div class="h-50"> <!--height: 5px;-->



========================================
6. # .htaccess file
========================================

_________________________________________________________________

# this .htaccess file redirect the user to index.php if the requested resource does not exists
# also rewrite and redirect to ssl site with https if it's not yet active 
# the third part enables the cache expires headers by file type 

<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.php$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.php [L]

    RewriteCond %{HTTPS} !=on
    RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301,NE]
</IfModule>


# BEGIN EXPIRES HEADER

<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresDefault "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType text/javascript "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType application/x-shockwave-flash "access plus 1 year"
    ExpiresByType image/ico "access plus 1 year"
    ExpiresByType image/x-icon "access plus 1 year"
    ExpiresByType text/html "access plus 1 year"
    ExpiresByType font/woff2 "access plus 1 year"
    ExpiresByType font/woff "access plus 1 year"
    ExpiresByType font/otf "access plus 1 year"
    ExpiresByType font/ttf "access plus 1 year"
    ExpiresByType font/opentype "access plus 1 year"
</IfModule>

# END EXPIRES HEADER

_________________________________________________________________________________