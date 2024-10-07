// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@nuxtjs/google-fonts",
    "@nuxt/content",
    "nuxt-swiper",
    "@nuxt/image",
  ],

  i18n: {
    strategy: "prefix",
    locales: [
      {
        code: "de",
        name: "Deutsch",
      },
      {
        code: "vn",
        name: "Tiếng Việt",
      },
    ],
    defaultLocale: "de",
  },

  googleFonts: {
    families: {
      Roboto: true,
      "Playfair Display": true,
    },
    download: true,
  },

  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },

  css: ["vue-final-modal/style.css", "@/assets/css/markdown.css"],

  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL,
      web3FormsAccessKey: process.env.WEB3FORMS_ACCESS_KEY,
    },
  },

  compatibilityDate: "2024-10-06",
});