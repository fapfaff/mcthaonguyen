export const useSeo = (metaKey: string = "default") => {
  const { t, locale } = useI18n();

  const config = useAppConfig();

  const image = `${config.baseUrl}/images/thao_nguyen.webp`;

  useHead({
    title: t(`meta.${metaKey}.title`),
    htmlAttrs: {
      lang: locale.value,
    },
    meta: [
      {
        name: "robots",
        content: "index, follow",
      },
      {},
      {
        name: "keywords",
        content: t(`meta.${metaKey}.keywords`),
      },
      {
        name: "description",
        content: t(`meta.${metaKey}.description`),
      },
      // Open Graph Protocol
      {
        property: "og:title",
        content: t(`meta.${metaKey}.ogTitle`),
      },
      {
        property: "og:description",
        content: t(`meta.${metaKey}.ogDescription`),
      },
      {
        property: "og:image",
        content: image,
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:site_name",
        content: t(`meta.${metaKey}.ogSiteName`),
      },
      // Twitter
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: t(`meta.${metaKey}.twitterTitle`),
      },
      {
        name: "twitter:description",
        content: t(`meta.${metaKey}.twitterDescription`),
      },
      {
        name: "twitter:image",
        content: image,
      },
    ],
  });
};
