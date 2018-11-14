module.exports = (neutrino) => {
  neutrino.use([
    '@neutrinojs/react',
    {
      html: {
        title: 'rsvp'
      },
      hot: true,
    }
  ]);
  neutrino.use([
    '@neutrinojs/mocha',
    {
      reporter: 'spec'
    }
  ]);
};