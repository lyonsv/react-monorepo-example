const path = require('path')

const config = {
  projectRoot: path.resolve(__dirname),
  watchFolders: [
    path.resolve(__dirname, '../ui'),
    path.resolve(__dirname, '../core'),
  ],
  resolver: {
    alias: {
      firebase: path.resolve(__dirname, 'node_modules/firebase'),
      'sentry-expo': path.resolve(__dirname, 'node_modules/sentry-expo'),
      react: path.resolve(__dirname, 'node_modules/react'),
      'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
      'react-native': path.resolve(__dirname, 'node_modules/react-native'),
      'react-native-webview': path.resolve(
        __dirname,
        'node_modules/react-native-webview'
      ),
    },
    externals: {
      react: 'react',
      firebase: 'firebase',
      'react-dom': 'react-dom',
      'react-native': 'react-native',
      'sentry-expo': 'sentry-expo',
    },
    extraNodeModules: {
      '@apollo/client': path.resolve(__dirname, 'node_modules/@apollo/client'),
      '@jobchat/ui': path.resolve(__dirname, '../@jobchat/ui'),
      '@jobchat/core': path.resolve(__dirname, '../@jobchat/core'),
      '@jobchat/wordpress': path.resolve(__dirname, '../@jobchat/wordpress'),
      react: path.resolve(__dirname, 'node_modules/react'),
      'react-native': path.resolve(__dirname, 'node_modules/react-native'),
      '@babel/runtime': path.resolve(__dirname, 'node_modules/@babel/runtime'),
      'styled-components': path.resolve(
        __dirname,
        'node_modules/styled-components/native'
      ),
      'react-instantsearch-native': path.resolve(
        __dirname,
        'node_modules/react-instantsearch-native'
      ),
      firebase: path.resolve(__dirname, 'node_modules/firebase'),
      'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
      graphql: path.resolve(__dirname, 'node_modules/graphql'),
      expo: path.resolve(__dirname, 'node_modules/expo'),
      'sentry-expo': path.resolve(__dirname, 'node_modules/sentry-expo'),
      'react-native-webview': path.resolve(
        __dirname,
        'node_modules/react-native-webview'
      ),
    },
  },
}

module.exports = config
