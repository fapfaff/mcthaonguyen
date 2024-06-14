<template>
  <VueFinalModal
    class="flex justify-center items-center"
    content-class="flex flex-col max-w-xl max-h-[80%] overflow-y-scroll mx-4 p-4 bg-creme-200 rounded-lg space-y-2"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
    :lockScroll="true"
  >
    <div v-if="testimonial">
      <div v-if="testimonial.img" class="pb-5 flex justify-center">
        <img
          :src="`/testimonials/${testimonial.img}`"
          class="w-100 object-cover aspect-video rounded-lg"
        />
      </div>
      <p class="text-xl">
        {{ testimonial.title }}
      </p>
      <div>
        <ContentRendererMarkdown :value="testimonial" />
      </div>
      <div class="flex justify-center w-full">
        <button class="rounded-full bg-green-600 tect-blue-950 mt-4" @click="emit('close')">
          <p class="p-1 ps-4 pe-4">Close</p>
        </button>
      </div>
    </div>  
  </VueFinalModal>
</template>
<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal";
import type { Testimonial } from "~/types/testimonial";

defineProps<{
    testimonial?: Testimonial,
}>()

const emit = defineEmits<{
(e: 'close'): void
}>()
</script>
