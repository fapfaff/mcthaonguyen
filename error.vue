<template>
  <NuxtLayout>
    <div class="bg-amber-100 flex-row content-center justify-center h-screen ml-5 mr-5">
      <div class="border-amber-800 border-2 border-solid mb-5 ">
        <h1 class="text-5xl text-center p-2">Error {{ error.statusCode }}</h1>
        <h1 v-if="error.statusCode === 404" class="text-xl text-center p-2">{{ $t("error.not_found") }}</h1>
        <h1 v-else class="text-xl p-2">{{ $t("error.generic_error") }}</h1>
        <div class="p-2">
            <NuxtLink :to="localePath('/')" class="flex align-center bg-teal-800 rounded-md p-2"><p class="text-center text-white w-full">Home</p></NuxtLink>
        </div>
      </div>

    </div>
  </NuxtLayout>
</template>
<script setup>
const error = useError();
</script>