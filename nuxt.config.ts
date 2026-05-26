// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap'
  ],

  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    resendApiKey: '',
    contactRecipientEmail: '',
    contactSenderEmail: '',
    public: {
      siteUrl: 'https://miilli.org',
      contactEmail: 'office@miilli.org'
    }
  },

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English' },
      { code: 'et', name: 'Eesti' }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'miilli_i18n',
      redirectOn: 'root',
      fallbackLocale: 'en'
    },
    vueI18n: './i18n.config.ts'
  }
})
