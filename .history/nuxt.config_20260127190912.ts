// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    './assets/css/main.css'
  ],

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@ant-design-vue/nuxt'
  ],
  runtimeConfig: {
    cryptoSecret: process.env.CRYPTO_SECRET,
    public: {
      cryptoSecret: process.env.CRYPTO_SECRET,
    },
  },
  i18n: {
    locales: [
      { code: 'fr', name: 'Français', file: 'fr.json' },
      { code: 'en', name: 'English', file: 'en.json' }
    ],
    defaultLocale: 'fr',
    strategy: 'no_prefix',
    langDir: 'locales/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_lang',
      redirectOn: 'root'
    }
  },

  // ✅ AJOUT ICI
  typescript: {
    tsConfig: {
      compilerOptions: {
        types: ['node']
      }
    }
  }
})
