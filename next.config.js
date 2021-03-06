const withCss = require('@zeit/next-css')
const withImages = require('next-images')
const path = require('path')

const imagesConfig = withImages()
const cssConfig = withCss({
  webpack: (config, { isServer }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style\/css.*?/
      const origExternals = [...config.externals]
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback()
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback)
          } else {
            callback()
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ]

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      })
    }

    config.resolve.alias['~'] = path.resolve(path.join(__dirname, 'src'))
    return config
  },
})

module.exports = {
  ...withImages(cssConfig),
  exportTrailingSlash: true,
  exportPathMap: () => ({
    '/': { page: '/' },
  }),
}
