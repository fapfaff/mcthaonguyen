<template>
  <Card>
    <div class="pt-2 pb-2">
      <div v-if="testimonial.img" class="pb-5 flex justify-center w-full">
        <img
          :src="`/testimonials/${testimonial.img}`"
          class="w-4/5 object-cover aspect-video rounded-lg"
        />
      </div>
      <p class="italic text-center text-xl">
        {{ '"' + testimonial.quote + '"' }}
      </p>
      <div class="flex justify-center w-full">
        <!-- <button class="rounded-full bg-green-600 tect-blue-950 mt-4">
          <p class="p-1 ps-4 pe-4">Read more</p>
        </button> -->
      </div>
    </div>
  </Card>
</template>

<script setup>
const props = defineProps({
  testimonial: Object,
});

</script>

<style scoped>
h1 {
  font-family: "Playfair Display";
}
</style>
