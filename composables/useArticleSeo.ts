import type { Article } from "~/types/article";

export const useArticleSeo = (articleData: Article) => {
  const { t } = useI18n();
  const config = useRuntimeConfig();

  const title = articleData?.headline || t("meta.default.title");
  const description = articleData?.description || t("meta.default.description");
  const image = articleData?.img || "";
  const publishedDate = articleData?.date || new Date().toISOString();

  useHead({
    title: title,
    meta: [
      {
        name: "robots",
        content: "index, follow",
      },
      {
        name: "keywords",
        content: articleData?.tags?.join(", ") || t("meta.default.keywords"),
      },
      {
        name: "description",
        content: description,
      },
      {
        property: "og:title",
        content: title,
      },
      {
        property: "og:description",
        content: description,
      },
      {
        property: "og:image",
        content: image,
      },
      {
        property: "og:type",
        content: "article",
      },
      {
        property: "og:site_name",
        content: t("meta.default.ogSiteName"),
      },
      {
        property: "article:published_time",
        content: publishedDate,
      },
      {
        property: "article:author",
        content: t("fullName"),
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: title,
      },
      {
        name: "twitter:description",
        content: description,
      },
      {
        name: "twitter:image",
        content: image,
      },
    ],
  });
};
