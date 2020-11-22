module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    ['@babel/preset-react'],
    'next',
    '@babel/preset-typescript',
  ],
  plugins: [
    ['styled-components', { ssr: true, displayName: true, preprocess: false }],
  ],
}
