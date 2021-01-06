# softSite #

This is a library that makes lighter a website made in php.

#### Summary ####

1. Configuration
2. Minify css
3. Minify javascript
4. Compress images
5. Lazy load
6. Anti-shift layout
7. Cache and compress policies


## Configuration ##

In the __softSite.config.js__ file you should find the follow three elements:

- css
- js
- imageCompressor

The __css__ object contain *all*, *dir*, *extras* and *inputs* options.

*all* If true softSite going to minify all css files in all subdirectories specified by *dir* option. Else it takes the *inputs* option by entries.

*dir* specify the base directory for css input files only if *all* option is true, else it do nothing.

*inputs* specify the inputs files names by entry only if *all* option is false, else do nothing.

*extras* whatever *all* option value the inputs files names specified in this option going to added to the file result at the end.

The returned file is __dist/css/bundle.min.css__.


The __js__ object contain the same options that __css__ object and the output file is __dist/js/bundle.min.js__.

The __imageCompressor__ object contain only the base directory where images are located, the compression is available for png, jpeg, svg and gif types.

For run the minification for css, javascript files and the images compression you should run in the terminal the follow comand:

` node run.js `

## Minify css ##

For minify css is recomended create a directory called src and put the files here. Next you add the files names into the *inputs* options. Then deactivate the *all* option. By default lazyLoad and antiShift files are added in the *extras* option.

## Minify javascript ##

The same way for minify css.

## Compress images ##

Only add the base path directory.

## Lazy load ##

All you need is replace the __src__ attribute in the img tags for __data-img__. 

For videos you have to add the __lazy__ class, it set the preload attribute to false and play the video automatically it's inside the viewport like the images.

For sections with background images you should replace the __background-image__ attribute by data-img ( you should only set the url like "img.png" and not "url('img.png')" ) if you have a background data then use data-bg.

*example:*

` <div data-img = "img.png"></div> `  it's equal to  --> ` <div style="url('img.png');"></div> ` 

` <div data-bg = "linear-gradient( top, bottom, #000000, #ffffff ) url( 'img.png' )" ></div> `

it's equal to --> ` <div style = "background: linear-gradient( top, bottom, #000000, #ffffff ) url( 'img.png' )" ></div> `

## Anti-shift layouts ##

You have to set the data-shift attribute and add manually the initial height for the layout, when the website is fully loaded the height value is switched to *auto*.

*example:*

` <img  data-shift style = "height: 200px;" /> `

Another way to do this is adding a default height by class:

` <img  data-shift class = "h-50" /> `

The antiShift.min.css is added by default in the minification and the interval is from 50px to 1550px with step 50px ( h-50 --> h-1550 ).

__Note:__ It's important avoid add the height by javascript because the goal is set a default height when the element is rendered and adjust it when the website is fully loaded. 

## Cache and compress policies ##

Only available for __Apache Server__.

Copy the __.htaccess__ file into your project.

The first part use the *mod_rewrite.c* module and if the requested url is not a file or directory it redirect to index.php file but you can modify this for 404 page for example.

The next instruction enable and force the *SSL* certified.

The next instruction enable and set the cache policies with their expiration time by type

Then the compression headers enable the compression files when they are sended from the server

Finally the two ultimate instructions enable the cors policy for your specified domain you should custom this. Also enable the cors policy by font type.