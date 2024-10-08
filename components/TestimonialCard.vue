<template>
  <Card>
    <div class="pt-2 pb-2 h-full flex flex-col">
      <div v-if="testimonial.img" class="pb-5 flex justify-center w-full">
        <img
          :alt="`${$t('aria.photoOf')} '${testimonial.title}'`"
          :src="`/testimonials/${testimonial.img}`"
          class="w-4/5 object-cover aspect-auto rounded-lg"
        />
      </div>
      <div class="flex-grow">
        <p class="italic text-center text-xl text-apricot-950">
          {{ '"' + testimonial.quote + '"' }}
        </p>
      </div>
      <div class="flex justify-center w-full">
        <button
          class="rounded-full border-2 bg-creme-300 border-creme-700 text-blue-950 mt-4 hover:bg-creme-400 px-6 py-1"
          @click="open"
          :aria-label="`${'aria.readFullTestimonial'} ${testimonial.title}`"
        >
          {{ $t('testimonials.readMore') }}
        </button>
      </div>
    </div>
  </Card>
</template>

<script setup>
import { useModal } from "vue-final-modal";
import TestimonialModal from "./TestimonialModal.vue";

const props = defineProps({
  testimonial: Object,
});

const { open, close } = useModal({
  component: TestimonialModal,
  attrs: {
    testimonial: props.testimonial,
    onClose() {
      close();
    },
  },
});
</script>

<style scoped>
h1 {
  font-family: "Playfair Display";
}
</style>
