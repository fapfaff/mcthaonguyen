<template>
  <div
    class="ps-4 pe-4 flex flex-col items-stretch justify-stretch space-y-2 md:flex-row md:space-x-2 md:space-y-0"
  >
    <div class="flex-1">
      <ServiceCard
        src="/icons/wedding_ring.webp"
        :title="$t('services.marriages')"
        :description="lorem"
      ></ServiceCard>
    </div>
    <div class="flex-1">
      <ServiceCard
        src="/icons/cake.webp"
        :title="$t('services.birthdays')"
        :description="loremlorem"
      ></ServiceCard>
    </div>
  </div>
</template>
<script setup>
const lorem =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
const loremlorem = lorem + lorem;
</script>
