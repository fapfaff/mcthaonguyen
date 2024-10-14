<template>
    <Card v-if="data">
      <img v-if="data[0].img" :src="data[0].img" :alt="data[0].imgAlt" class="rounded-sm"/>
      <ContentRendererMarkdown :value="data[0]" class="rendered"/>
    </Card>
</template>
<script setup lang="ts">
const { locale } = useI18n();
const { data } = await useAsyncData("aboutme", () =>
  queryContent(`${locale.value}/about_me`).find()
);
</script>
