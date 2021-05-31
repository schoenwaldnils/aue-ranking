module.exports = {
  presets: [
    [
      'next/babel',
      {
        'transform-runtime': {
          useESModules: false,
        },
      },
    ],
  ],
  plugins: ['@emotion'],
}
