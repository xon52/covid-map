module.exports = {
  transpileDependencies: ['x5-maps'],
  // Code used for Github.io hosting
  publicPath: process.env.NODE_ENV === 'production' ? '/covid-map/' : '/',
  outputDir: __dirname + '/docs',
}
