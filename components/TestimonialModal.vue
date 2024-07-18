<template>
  <VueFinalModal
    class="flex justify-center items-center"
    content-class="absolute inset-0 max-w-xl"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
    :lockScroll="true"
  >
    <div v-if="testimonial" class="absolute inset-0 h-full max-w-xl overflow-auto ">
      <div class="bg-creme-200 rounded-lg flex flex-col max-w-xl my-12 mx-4 p-4">
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
  testimonial?: Testimonial;
}>();

const emit = defineEmits<{
  (e: "close"): void;
}>();
</script>
