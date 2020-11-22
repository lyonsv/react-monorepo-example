if (typeof require !== 'undefined') {
  require.extensions['.less'] = () => {}
  require.extensions['.css'] = () => {}
}
const withPlugins = require('next-compose-plugins')
const transpileModules = require('next-transpile-modules')([
  '@react-example/ui',
])
const webpack = require('webpack')

module.exports = withPlugins([transpileModules], {
  target: 'serverless',
  webpack: config => {
    config.module.rules.push({
      test: /\.jpg$/,
      use: 'file-loader',
    })

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      react: __dirname + '/node_modules/react',
      'react-dom': __dirname + '/node_modules/react-dom',
      'styled-components': __dirname + '/node_modules/styled-components',
    }
    config.resolve.extensions = [
      '.web.js',
      '.js',
      '.web.tsx',
      '.tsx',
      '.web.ts',
      '.ts',
    ]

    return {
      ...config,
      node: {
        fs: 'empty',
      },
    }
  },
})
