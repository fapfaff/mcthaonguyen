<template>
  <div class="flex flex-row">
    <div class="ps-4 pe-4 flex-grow">
        <TestimonialCard
          :testimonial="testimonial"
          :isExpanded="isExpanded"
          :isClamped="isClamped"
          @toggleExpanded="toggleExpanded"
        >
        </TestimonialCard>
    </div>  
  </div>
  <div class="flex flex-row justify-center items-center space-x-1 pt-2">
        <button v-for="(_, i) in data" :key="i" class="rounded-full border-2 border-muted-gold"
            :class="i == currentCardIndex ? 'bg-muted-gold h-5 w-5' : 'hover:h-5 hover:w-5 h-4 w-4'"
            @click="switchToCard(i)"
            >
        </button>
    </div>
</template>
<style>
h1 {
  font-family: "Playfair Display";
}
</style>
<script setup>
const { locale } = useI18n();
const { data } = await useAsyncData("testimonials", () =>
  queryContent(`${locale.value}/testimonials`).find()
);

const isExpanded = ref(false);
const isClamped = ref(false);
const currentCardIndex = ref(0);
const contentBox = ref(null);

const testimonial = computed(() => data.value[currentCardIndex.value]);

function switchToCard(i) {
    currentCardIndex.value = i;
    checkIfClamped();
    isExpanded.value = false;
}

function toggleExpanded() {
  isExpanded.value = !isExpanded.value;
  if (!isExpanded.value) {
    navigateTo('#testimonials')
  }
}

const checkIfClamped = () => {
  if (contentBox.value) {
    isClamped.value = contentBox.value.scrollHeight > contentBox.value.clientHeight;
  }
}

onMounted(checkIfClamped);

watch([() => currentCardIndex], () => {
  nextTick(checkIfClamped);
}, { deep: true });

watch(isExpanded, () => {
  nextTick(checkIfClamped);
});
</script>
