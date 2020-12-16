assets/js/jquery.min.js  assets/js/bootstrap.min.js  assets/js/popper.min.js  assets/js/owl.carousel.min.js  assets/js/jarallax.js  assets/js/jquery.magnific-popup.min.js  assets/js/appear.js  assets/js/isotope.pkgd.min.js  assets/js/masonry.pkgd.min.js  assets/js/imagesloaded.pkgd.min.js  assets/js/lightbox.js  assets/js/waypoints.min.js  assets/js/jquery.counterup.min.js  assets/js/tilt.jquery.min.js  assets/js/wow.min.js  assets/js/script.js  assets/js/gmap3.min.js  assets/js/validatejq.js assets/js/lazy.min.js


npm init 
npm install
npm install cssnano postcss-cli terser

copy in postcss.config.js >>

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