
# softSite # 

this project use this technologies

1. postcss
2. terser
3. compress-images
4. lazyLoad
5. antiShift
6. .htaccess file


## postcss ##



this project as all necessary for works but the next instructions are a guideline for install postcss.

### installation: ###

` npm init  `
` npm install `
` npm install 
        postcss-import
        gulp-postcss
        cssnano 
        gulp 
        gulp-concat 
        --global gulp-cli 
        child_process 


### copy in postcss.config.js : ###
______________________________________
module.exports = {
    plugins: [
        require('cssnano')({
            preset: 'default',
        }),
    ],
};
_______________________________________

### use postcss:  ###

` postcss input.css > output.css `

for several files use @import statement into input.css


## terser  ##


### installation ###

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

    <div class="lazy" data-bg="linear-gradient(top,bottom,#ffffff) url('assets/resource.jpg')" data-img="url('img.png')" style="background: unset;" >

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

# COMPRESS FILES HEADER

<IfModule mod_deflate.c>
  ExpiresActive On
  
  # Add new content-types
  AddType application/vnd.ms-fontobject .eot
  AddType application/x-font-ttf .ttf
  AddType application/x-font-opentype .otf
  AddType application/x-font-woff .woff
  AddType image/svg+xml .svg

  # Compress HTML, CSS, JavaScript, Text, XML and fonts
  AddOutputFilterByType DEFLATE application/javascript
  AddOutputFilterByType DEFLATE application/rss+xml
  AddOutputFilterByType DEFLATE application/vnd.ms-fontobject
  AddOutputFilterByType DEFLATE application/x-font
  AddOutputFilterByType DEFLATE application/x-font-opentype
  AddOutputFilterByType DEFLATE application/x-font-otf
  AddOutputFilterByType DEFLATE application/x-font-truetype
  AddOutputFilterByType DEFLATE application/x-font-ttf
  AddOutputFilterByType DEFLATE application/x-javascript
  AddOutputFilterByType DEFLATE application/xhtml+xml
  AddOutputFilterByType DEFLATE application/xml
  AddOutputFilterByType DEFLATE font/opentype
  AddOutputFilterByType DEFLATE font/otf
  AddOutputFilterByType DEFLATE font/ttf
  AddOutputFilterByType DEFLATE image/svg+xml
  AddOutputFilterByType DEFLATE image/x-icon
  AddOutputFilterByType DEFLATE text/css
  AddOutputFilterByType DEFLATE text/html
  AddOutputFilterByType DEFLATE text/javascript
  AddOutputFilterByType DEFLATE text/plain
  AddOutputFilterByType DEFLATE text/xml

  # Remove browser bugs (only needed for really old browsers)
  BrowserMatch ^Mozilla/4 gzip-only-text/html
  BrowserMatch ^Mozilla/4\.0[678] no-gzip
  BrowserMatch \bMSIE !no-gzip !gzip-only-text/html
  Header append Vary User-Agent

</IfModule>

# COMPRESS FILES HEADER

# CROSS ORIGIN HEADER
<IfModule mod_headers.c>
    Header set Access-Control-Allow-Origin "https://starmediasoluciones.com"
</IfModule>
# END CROSS ORIGIN HEADER

# CROSS ORIGIN FOR FONTS
<FilesMatch ".(eot|ttf|otf|woff)">
   Header set Access-Control-Allow-Origin "*"
</FilesMatch>

# END CROSS ORIGIN FOR FONTS
