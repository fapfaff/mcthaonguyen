<template>
    <Card>
        {{ data }}
        <!-- <ContentRendererMarkdown class="rendered" :value="data" /> -->
    </Card>
</template>
<script setup>
const { locale } = useI18n();
const { data } = await useAsyncData("aboutMe", () =>
  queryContent(`${locale.value}/about_me`).findOne()
);
</script>