<template>
  <NuxtLayout>
    <div class="flex justify-center mt-20 mx-10">
      <Card class="max-w-6xl">
        <div class="flex flex-col justify-center items-center gap-2 p-2">
          <h2 class="text-2xl text-center">{{ $t("error.header") }}</h2>
          <h1 class="text-4xl text-center">
            {{ ` ${error.message} (${error.statusCode})` }}
          </h1>
          <NuxtLink
            :to="localePath('/')"
            class="btn-primary">{{ $t("error.backToHome") }}</NuxtLink
          >
        </div>
      </Card>
    </div>
  </NuxtLayout>
</template>
<script setup>
const error = useError();
</script>
<style>
.btn-primary {
  @apply rounded border-creme-700 border-2 bg-creme-700 text-creme-50 font-semibold tracking-wider box-border hover:bg-creme-800 hover:border-creme-800 focus:outline-none focus:border-creme-900 focus:border-2 px-10 py-1 mt-4;
}
</style>