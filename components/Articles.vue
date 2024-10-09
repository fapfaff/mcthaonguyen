<template>
  <Swiper
  class="w-full"
    :modules="[SwiperAutoplay, SwiperPagination]"
    :loop="true"
    :slides-per-view="4"
    :space-between="20"
    :pagination="{ clickable: true, el: '.swiper-pagination' }"
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
   
    <SwiperSlide v-for="article in [1,2,3,4].values()">
        <Card class="w-60">
            <img src="/images/testimonials/NhuDuy.webp" :alt="$t('aria.heroPhoto')" />
            <h3>Wie läuft eine deutsche Hochzeit ab?</h3>
        </Card>
    </SwiperSlide>
    <div class="swiper-pagination"></div>
  </Swiper>
</template>
