<template>
  <div class="flex flex-row">
    <div class="ps-4 pe-4 flex-grow">
        <Card class="ps-2 pe-2 w-full h-fit">
            <div v-if="testimonial.img" class="w-full pb-5">
                <img :src="`/testimonials/${testimonial.img}`" class="w-full object-cover aspect-video">
            </div>
            <h1 class="text-2xl text-center pb-3">{{  testimonial.title }}</h1>
            <div ref="contentBox" :class="isExpanded ? '' : 'text-ellipsis overflow-hidden line-clamp-6'">
                <ContentRendererMarkdown :value="testimonial" />
            </div>
            <button class=" text-deep-green font-semibold"
                @click="toggleExpanded"
                v-if="isClamped || isExpanded">
                {{ isExpanded ? 'Show less' : 'Show more' }}
            </button>
        </Card>
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
