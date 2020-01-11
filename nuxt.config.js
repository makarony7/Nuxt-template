module.exports = {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Fishing with makarony7',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Fishing with makarony7. Prywatna strona wędkarska, hobbystyczna.'
      },
      { name: 'og:image', content: '/img/og-image.jpg' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/img/favicon.png' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~assets/less/main.less'],
  styleResources: {
    less: './assets/less/vars/*.less'
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/router'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/sitemap'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  server: {
    port: 3000, // default: 3000
    host: 'localhost' // default: localhost
  },
  env: {
    baseUrl: 'http://localhost:1337'
  },
  sitemap: {
    hostname: 'http://www.fishingwithmakarony7.pl/',
    gzip: true,
    exclude: ['/secret', '/admin/**'],
    path: '/sitemap.xml',
    routes: ['/about', '/images', '/videos', '/equipment']
  }
}
