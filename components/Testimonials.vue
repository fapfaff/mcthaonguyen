<template>
  <Swiper
  :modules="[SwiperAutoplay, SwiperPagination]"
  :loop="true"
  :slides-per-view="1"
  :space-between="20"
  :pagination="{ clickable: true, el: '.swiper-pagination'}"
  :autoplay="{ delay: 5000 }"
  :observer="true"
  :observeParents="true"
  :observeSlideChildren="true"
  :resizeObserver="true"
  :centerInsufficientSlides="true"
  :breakpoints="{
    '640': {
      slidesPerView: 1,
    },
    '768': {
      slidesPerView: 2,
    },
    '1024': {
      slidesPerView: 4,
    },
  }"
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
</template>
<style>
h1 {
  font-family: "Playfair Display";
}
.swiper-container {
    overflow: visible;
}
.swiper-slide {
    height: auto;
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
const { data, refresh  } = await useAsyncData("testimonials", () =>
  queryContent(`${locale.value}/testimonials`).find()
);

watchEffect(() => {
  refresh(); // This will trigger a refresh whenever the locale changes
});
</script>
