const webpack = require('webpack')
require('dotenv').config()

module.exports = {
    i18n: {
        locales: ['en'],
        defaultLocale: 'en',
    },
    images: {
        domains: ['images.prismic.io'],
    },
    webpack(config) {
        const env = Object.keys(process.env).reduce((acc, curr) => {
            acc[`process.env.${curr}`] = JSON.stringify(process.env[curr])
            return acc
        }, {})

        config.plugins.push(new webpack.DefinePlugin(env))

        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        })

        return config
    },
}
