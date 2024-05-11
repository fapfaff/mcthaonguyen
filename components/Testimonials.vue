<template>
    <div class="flex flex-row items-center">
        <div class="ps-4 pe-4 flex flex-row flex-grow overflow-hidden">
            <Card v-for="testimonial in data" :key="testimonial.title" class="min-w-full">
                <div v-if="testimonial.img" class="w-full pb-5">
                    <img :src="`/testimonials/${testimonial.img}`" class="w-full object-cover aspect-video">
                </div>
                <h1 class="text-2xl text-center pb-3">{{  testimonial.title }}</h1>
                <ContentRendererMarkdown :value="testimonial" />
            </Card>
        </div>
    </div>
</template>
<style>
    h1 {
        font-family: "Playfair Display";
    }
</style>
<script setup>
const { locale } = useI18n();
// const { data } = await useAsyncData('testimonials', () => queryContent(locale, 'testimonials').find());
const { data } = await useAsyncData('testimonials', () => 
  queryContent(`${locale.value}/testimonials`).find()
);
</script>