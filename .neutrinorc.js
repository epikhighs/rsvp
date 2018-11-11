module.exports = {
  options: {
    test: './src',
  },
  use: [
    [
      '@neutrinojs/react',
      {
        html: {
          title: 'rsvp'
        }
      }
    ],
    [
      '@neutrinojs/mocha',
      {
        reporter: 'spec',
      }
    ]
  ]
};
