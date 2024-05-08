// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n", "@nuxtjs/google-fonts"],
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
});
