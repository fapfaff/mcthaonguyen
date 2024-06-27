<template>
  <VueFinalModal
    class="flex justify-center items-center"
    content-class="flex flex-col max-w-xl max-h-[80%] overflow-hidden mx-4 p-4 ps-6 pe-6 bg-creme-200 rounded-lg space-y-2"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
    :lockScroll="true"
  >
    <div v-if="testimonial">
      <div class="flex flex-row justify-between pb-5">
        <p class="text-xl tracking-tight text-apricot-950">
          {{ testimonial.title }}
        </p>
        <button
          @click="$emit('close')"
          class="text-creme-950 hover:text-creme-800 leading-none"
        >
          ✕
        </button>
      </div>
      <div class="overflow-y-scroll max-h-[70vh] relative">
        <div v-if="testimonial.img" class="pb-3 flex justify-center">
          <img
            :src="`/testimonials/${testimonial.img}`"
            class="w-100 object-cover aspect-video rounded-lg"
          />
        </div>
        <div class="text-apricot-950">
          <ContentRendererMarkdown :value="testimonial" />
        </div>
      </div>
    </div>
  </VueFinalModal>
</template>
<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal";
import type { Testimonial } from "~/types/testimonial";

defineProps<{
  testimonial?: Testimonial;
}>();

const emit = defineEmits<{
  (e: "close"): void;
}>();
</script>
