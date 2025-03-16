<template>
  <Swiper
  v-if="data"
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
   
    <SwiperSlide v-for="article in data.values()">
        <Card class="w-60" @click="navigateTo(localePath(`/article/${article.slug}`))">
            <NuxtImg :src="article.img" :alt="article.imgAlt" />
            <h3>{{ article.headline }}</h3>
        </Card>
    </SwiperSlide>
    <div class="swiper-pagination"></div>
  </Swiper>
</template>
<script setup lang="ts">
const { locale } = useI18n();
const  localePath  = useLocalePath()

const { data, refresh } = await useAsyncData("articles", () =>
  queryContent(`${locale.value}/articles`).find()
);

watchEffect(() => {
  refresh(); // This will trigger a refresh whenever the locale changes
});
</script>