module.exports = (ctx) => {
    const plugins = [
        require('tailwindcss'),
        require('autoprefixer'),
    ]


    if (ctx.env === 'production') {
        plugins.push(require('@fullhuman/postcss-purgecss')({
            content: [
                './public/**/*.js',
                './public/index.html',
            ],
            defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
        }))

        plugins.push(require('cssnano')({
            preset: 'default',
        }))
    }

    return { plugins }
}