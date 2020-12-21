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