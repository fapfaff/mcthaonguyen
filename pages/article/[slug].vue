<template>
  <div class="flex flex-col lg:flex-row gap-4 mx-4 justify-center">
    <!-- Main Content Card -->
    <div class="order-1 grow max-w-4xl">
      <Card class="justify-self-center">
        <img :src="data?.img" :alt="data?.imgAlt" />
        <div class="mt-8 mb-4">
          <h1 class="text-4xl mb-1">{{ data?.headline }}</h1>
        </div>
        <ContentRendererMarkdown v-if="data" class="rendered" :value="data" />
      </Card>
    </div>

    <!-- Sidebar -->
    <div class="flex flex-col order-2 max-w-md gap-4">
      <!-- Published at Card -->
      <div class="order-1 lg:order-2 h-fit">
        <Card v-if="data?.date" class="h-fit">
          {{ `${$t("articles.publishedAt")} ${formatDate(data?.date)}` }}
        </Card>
      </div>

      <!-- About the Author Card -->
      <div class="order-2 lg:order-1 h-fit">
        <AboutAuthor></AboutAuthor>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NuxtImg } from '#build/components';

const { t, locale } = useI18n();
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
    message: t("error.articleNotFound"),
    fatal: true
  });
} else {
  useArticleSeo({
    slug: data.value.slug!,
    headline: data.value.headline!,
    description: data.value.description,
    date: data.value.date,
    img: data.value.img,
    imgAlt: data.value.imgAlt,
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
