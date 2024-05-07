<template>
  <NuxtLayout>
    <div class="error-page">
        <h1 class="text-4xl">{{ error.statusCode }}</h1>
      <h1 v-if="error.statusCode === 404" class="text-xl">{{ $t("error.not_found") }}</h1>
      <h1 v-else class="text-xl">{{ $t("error.generic_error") }}</h1>
      <nuxt-link :to="localePath('/')">Home</nuxt-link>
    </div>
  </NuxtLayout>
</template>
<script setup>
const error = useError();
</script>