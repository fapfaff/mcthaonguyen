<template>
  <Card>
    <div class="pt-2 pb-2 h-full flex flex-col">
      <div v-if="testimonial.img" class="pb-5 flex justify-center w-full">
        <img
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
        <button class="rounded-full bg-green-500 tect-blue-950 mt-4" @click="open">
          <p class="p-1 ps-4 pe-4">Read more</p>
        </button>
      </div>
    </div>
  </Card>
</template>

<script setup>
import { useModal } from 'vue-final-modal'
import TestimonialModal from './TestimonialModal.vue';

const props = defineProps({
  testimonial: Object,
});

const { open, close } = useModal({
    component: TestimonialModal,
    attrs: {
      testimonial: props.testimonial,
      onClose() {
        close()
      },
    },
});

</script>

<style scoped>
h1 {
  font-family: "Playfair Display";
}
</style>
