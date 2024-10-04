<template>

  <div
    class="flex flex-col flex-wrap justify-center items-stretch gap-2 md:flex-row md:gap-5"
  >
  <div class="service-wrapper" v-for="service in data.values()">
      <ServiceCard
        :service="service"
      ></ServiceCard>
    </div>
  </div>
</template>
<style scoped>
.service-wrapper {
  width: 100%;
}

@media (min-width: 768px) {
  .service-wrapper {
    width: calc(50% - 15px);
  }
}

@media (min-width: 1280px) {
  .service-wrapper {
    width: calc(25% - 15px);
  }
}

</style>
<script setup>
const { locale } = useI18n();
const { data } = await useAsyncData("services", () =>
  queryContent(`${locale.value}/services`).find()
);
</script>
