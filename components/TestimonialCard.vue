<template>
    <Card class="ps-2 pe-2 w-full h-fit">
      <div v-if="testimonial.img" class="w-full pb-5">
        <img :src="`/testimonials/${testimonial.img}`" class="w-full object-cover aspect-video">
      </div>
      <h1 class="text-2xl text-center pb-3">{{ testimonial.title }}</h1>
      <div ref="contentBox" :class="isExpanded ? '' : 'text-ellipsis overflow-hidden line-clamp-6'">
        <ContentRendererMarkdown :value="testimonial" />
      </div>
      <button class="text-deep-green font-semibold" @click="toggleExpanded" v-if="isClamped || isExpanded">
        {{ isExpanded ? 'Show less' : 'Show more' }}
      </button>
    </Card>
  </template>
  
  <script setup>
  const props = defineProps({
    testimonial: Object,
    isExpanded: Boolean,
    isClamped: Boolean
  });
  
  const emit = defineEmits(['toggleExpanded']);
  
  const contentBox = ref(null);
  
  function toggleExpanded() {
    emit('toggleExpanded');
  }
  
  </script>
  
  <style scoped>
  h1 {
    font-family: "Playfair Display";
  }
  </style>
  