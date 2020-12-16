module.exports = {
    plugins: [
        require('postcss-import')({
            preset: 'default'
        }),
        require('cssnano')({
            preset: 'default',
        }),
    ],
};