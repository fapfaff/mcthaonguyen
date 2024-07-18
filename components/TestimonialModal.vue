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
        <div v-if="testimonial.img" class="pb-3 flex justify-center">
          <img
            :src="`/testimonials/${testimonial.img}`"
            class="w-100 object-cover aspect-3/2 rounded-lg"
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
  testimonial: Testimonial;
}>();

const emit = defineEmits<{
  (e: "close"): void;
}>();
</script>
