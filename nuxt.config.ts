import fs from "fs";
import matter from "gray-matter";
import path from "path";

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
    "@nuxthq/studio",
    "@nuxtjs/robots"
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
    detectBrowserLanguage: false,
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

  compatibilityDate: "2024-10-06",

  runtimeConfig: {
    public: {
      web3FormsAccessKey: process.env.WEB3FORMS_ACCESS_KEY,
    },
  },

  nitro: {
    prerender: {
      routes: getArticleRoutes(),
    },
  },
});

function getArticleRoutes() {
  const locales = ["de", "vn"];
  const routes: string[] = [];

  locales.forEach((locale) => {
    const articlesDir = path.resolve(__dirname, "content", locale, "articles");

    if (fs.existsSync(articlesDir)) {
      const files = fs.readdirSync(articlesDir);
      files
        .filter((file) => path.extname(file) === ".md")
        .forEach((file) => {
          const filePath = path.join(articlesDir, file);
          const fileContent = fs.readFileSync(filePath, "utf8");
          const { data } = matter(fileContent);
          const slug = data.slug;

          if (slug) {
            routes.push(`/${locale}/article/${slug}`);
          } else {
            console.warn(`No slug found in frontmatter of ${filePath}`);
          }
        });
    }
  });

  return routes;
}