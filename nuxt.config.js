module.exports = {
  srcDir: 'app',
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  /*
  ** Global CSS
  */
  css: [
    '~assets/css/main.css',
    '@vuikit/theme',
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#444' },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLINT on save
     */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },

  plugins: [
    {
      src: '~/plugins/hello',
      // ssr: false // NOTE: クライアントのみで動かしたい場合は ssr: false
    },
    '~/plugins/vuikit',
  ],
}
