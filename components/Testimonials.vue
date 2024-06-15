<template>
  <Swiper
  :modules="[SwiperAutoplay, SwiperPagination]"
  :loop="true"
  :slides-per-view="1"
  :space-between="50"
  :pagination="{ clickable: true, el: '.swiper-pagination'}"
  :observer="true"
  :observeParents="true"
  :observeSlideChildren="true"
  :resizeObserver="true"
  >
    <SwiperSlide
      v-for="testimonial in data.values()"
    >
      <TestimonialCard
        :testimonial="testimonial"
      >
      </TestimonialCard>
    </SwiperSlide>
    <div class="swiper-pagination"></div>
  </Swiper>
  <!-- <div class="flex flex-row">
    <div class="lex-grow">
        <TestimonialCard
          :testimonial="testimonial"
          :isExpanded="isExpanded"
          :isClamped="isClamped"
          @toggleExpanded="toggleExpanded"
        >
        </TestimonialCard>
    </div>  
  </div> -->
  <!-- <div class="flex flex-row justify-center items-center space-x-1 pt-2">
        <button v-for="(_, i) in data" :key="i" class="rounded-full border-2 border-creme-700"
            :class="i == currentCardIndex ? 'bg-creme-700 h-5 w-5' : 'hover:h-5 hover:w-5 h-4 w-4'"
            @click="switchToCard(i)"
            >
        </button>
    </div> -->
</template>
<style>
h1 {
  font-family: "Playfair Display";
}

.swiper-container {
    overflow: visible;
}
.swiper-pagination {
    position: relative;
    margin-top: 15px;
}
.swiper-pagination-bullet-active {
  background-color: theme(colors.creme.700) !important;
}
</style>
<script setup>
const { locale } = useI18n();
const { data } = await useAsyncData("testimonials", () =>
  queryContent(`${locale.value}/testimonials`).find()
);
</script>
