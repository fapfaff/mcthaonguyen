<template>

  <div
    class="flex flex-col flex-wrap justify-center items-stretch space-y-2 md:space-y-0 md:flex-row md:gap-x-5"
  >
  <div class="service-wrapper" v-for="service in data.values()">
      <ServiceCard
        :service="service"
      ></ServiceCard>
    </div>
    <!-- <div class="service-wrapper" >
      <ServiceCard
        src="/icons/wedding_ring.webp"
        :title="$t('services.marriages')"
        description="Als Traurednerin mache ich eure freie Trauung unvergesslich und begleite euch den ganzen Abend mit moderierter Unterhaltung, Spielen und Programmpunkten – damit sich alle eure Gäste in die Feier eingebunden und wertgeschätzt fühlen."
      ></ServiceCard>
    </div>
    <div class="service-wrapper">
      <ServiceCard
        src="/icons/cake.webp"
        :title="$t('services.birthdays')"
        description="Für deine Geburtstagsfeier sorge ich mit zweisprachiger Moderation dafür, dass alle Programmpunkte reibungslos ablaufen und jeder die Feier in vollen Zügen genießen kann."
      ></ServiceCard>
    </div> -->
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
