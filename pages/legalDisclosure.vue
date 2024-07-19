<template>

    <div class="px-12">
      <Heading class="pt-2" :text="$t('route.legalDisclosure')"></Heading>
      <ContentRendererMarkdown class="rendered" :value="data"/>
    </div>
  </template>
  <script setup>
  const { locale } = useI18n();
  const { data } = await useAsyncData("legal", () =>
    queryContent(`${locale.value}/etc/`).where({ key: 'legal'}).findOne()
  );
  </script>
  