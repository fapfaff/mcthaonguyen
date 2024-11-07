<template>
    <Card>
        <div class="flex flex-col items-center pt-3 w-100">
            <NuxtImg :src="service.img" 
                aria-hidden="true"
                width="40" height="40"
            />
            <h3 class="text-3xl text-center pb-1 mt-3 mb-2"> {{ service.title }} </h3>
            <ContentRendererMarkdown class="text-center" :value="service" />
        </div>
    </Card>
</template>
<script setup>
const props = defineProps({
  service: Object,
});
</script>
<style scoped>
    h1 {
        font-family: "Playfair Display";
    }
</style>