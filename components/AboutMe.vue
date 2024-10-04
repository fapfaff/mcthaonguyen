<template>
    <Card v-if="data">
      <ContentRendererMarkdown :value="data[0]" class="rendered"/>
    </Card>
</template>
<script setup lang="ts">
const { locale } = useI18n();
const { data } = await useAsyncData("aboutme", () =>
  queryContent(`${locale.value}/about_me`).find()
);
</script>
