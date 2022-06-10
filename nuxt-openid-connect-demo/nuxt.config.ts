import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    'nuxt-openid-connect'
  ],
  openidConnect: {
    addPlugin: true,
    op: {
      issuer: 'your_oidc_provider_issuer',
      clientId: 'your_client_id',
      clientSecret: 'your_client_secret',
      callbackUrl: 'http://localhost:3000/oidc/cbt',
      scope: [
        'email',
        'profile',
        'address'
      ]
    },
    session: {
      secret: 'oidcsessionid',
      cookie: {},
      resave: false,
      saveUninitialized: false
    }
  }
})
