<template>
    <Card v-if="data">
      <NuxtImg v-if="data[0].img" :src="data[0].img" :alt="data[0].imgAlt" class="rounded-sm mb-4"/>
      <ContentRendererMarkdown :value="data[0]" class="rendered"/>
    </Card>
</template>
<script setup lang="ts">
const { locale } = useI18n();
const { data, refresh } = await useAsyncData("aboutme", () =>
  queryContent(`${locale.value}/about_me`).find()
);

watchEffect(() => {
  refresh(); // This will trigger a refresh whenever the locale changes
});
</script>
