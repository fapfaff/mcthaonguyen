<template>
  <div class="flex gap-8 mx-4 justify-center">
    <div class="grow max-w-4xl flex flex-row items-start gap-8">
      <Card class="justify-self-center">
        <img :src="data?.img" :alt="data?.imgAlt" />
        <div class="mt-8 mb-4">
          <h1 class="text-4xl mb-1">{{ data?.headline }}</h1>
        </div>
        <ContentRendererMarkdown v-if="data" class="rendered" :value="data" />
      </Card>
    </div>
    <div class="justify-self-end max-w-md flex flex-col gap-4">
      <div class="h-fit">
        <AboutAuthor></AboutAuthor>
      </div>
      <div class="h-fit">
        <Card v-if="data?.date" class="h-fit"
          >{{ `${$t("articles.publishedAt")} ${formatDate(data?.date)}` }}
        </Card>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Article } from "~/types/article";

const { locale } = useI18n();
const route = useRoute();

const { data } = await useAsyncData("article", async () => {
  const result = await queryContent(`${locale.value}/articles`)
    .where({ slug: route.params.slug })
    .findOne();

  return result;
});

if (!data.value || !data.value.slug || !data.value.headline || !data.value.description || !data.value.date) {
  throw createError({
    statusCode: 404,
    message: "Could not find the article",
  });
} else {
  useArticleSeo({
    slug: data.value.slug!,
    headline: data.value.headline!,
    description: data.value.description,
    img: data.value.img || "", // Optional
    imgAlt: data.value.imgAlt || "", // Optional
    date: data.value.date,
    tags: data.value.tags,
  });
}


const formatDate = (dateString: string | undefined) => {
  if (!dateString) return "";

  const date = new Date(dateString);
  return new Intl.DateTimeFormat(locale.value, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};
</script>
