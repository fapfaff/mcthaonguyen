<template>
  <VueFinalModal
    content-class="absolute inset-0"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
    :lockScroll="true"
  >
    <div
      class="absolute inset-0 h-full overflow-auto"
      @click.self="() => emit('close')"
    >
      <div class="flex flex-col max-w-xl my-12 mx-auto p-4 bg-creme-200 rounded-lg">
        <div class="header flex flex-row justify-between pb-5">
          <span class="text-xl tracking-tight text-apricot-950">
            {{ testimonial.title }}
          </span>
          <button
            :label="$t('aria.closeTestimonial')"
            @click="$emit('close')"
            class="text-creme-950 hover:text-creme-800 leading-none"
          >
            ✕
          </button>
        </div>
        <div class="mb-3 flex justify-center rounded-lg overflow-hidden">
            <iframe
              v-if="testimonial.video" 
              class="w-full h-auto aspect-video" :src="testimonial.video" 
              frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <img
              v-if="!testimonial.video && testimonial.img"
              :aria-label="`${'aria.readFullTestimonial'} ${testimonial.title}`"
              :src="testimonial.img"
              class="w-100 object-cover aspect-3/2"
            />
        </div>
        <div class="text-apricot-950">
          <ContentRendererMarkdown class="rendered" :value="testimonial" />
        </div>
      </div>
    </div>
  </VueFinalModal>
</template>

<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal";
import type { Testimonial } from "~/types/testimonial";

defineProps<{
  testimonial: Testimonial;
}>();

const emit = defineEmits<{
  (e: "close"): void;
}>();
</script>
