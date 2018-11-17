module.exports = (neutrino) => {
  neutrino.use([
    '@neutrinojs/react',
    {
      html: {
        title: 'rsvp'
      },
      hot: true,
      minify: {
        babel: false,
      }
    }
  ]);
  neutrino.use([
    '@neutrinojs/mocha',
    {
      reporter: 'spec'
    }
  ]);
};