import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML', async: true}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/apollo'
  ],
  ////changer les deux url pour faire les querys
  ///pour apollo c'est obligatoire ajouter le /graphql
  ///pour axios c'est la base, le /graphql peut se mettre sur le query même
  axios: {
    baseURL: 'http://localhost:1337/'
  },
  apollo: {
    authenticationType:"",
    clientConfigs: {
      default: {
        // required  
        httpEndpoint: 'http://localhost:1337/graphql',
      }
    }
  },
  ///configuration de l'autentication
  auth: {
    redirect: {
      login: '/',
      logout: '/',
      callback: '/',
      home: '/cours'
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: 'auth/local/', method: 'post', propertyName: 'jwt' },
          user: { url: 'users/me', method: 'get', propertyName: false },
          logout: false
        }
        // tokenRequired: true,
        // tokenType: 'Bearer'
      }
    }
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
 
}
