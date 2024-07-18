<template>

  <div
    class="flex flex-col flex-wrap justify-center items-stretch space-y-2 md:space-y-0 md:flex-row md:gap-x-5"
  >
    <div class="service-wrapper">
      <ServiceCard
        src="/icons/wedding_ring.webp"
        :title="$t('services.marriages')"
        :description="lorem"
      ></ServiceCard>
    </div>
    <div class="service-wrapper">
      <ServiceCard
        src="/icons/cake.webp"
        :title="$t('services.birthdays')"
        :description="loremlorem"
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
const lorem =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
const loremlorem = lorem + lorem;
</script>
