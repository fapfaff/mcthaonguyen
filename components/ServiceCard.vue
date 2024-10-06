<template>
    <Card>
        <div class="flex flex-col items-center pt-3 w-100">
            <img :src="'../icons/'+service.img" class="w-10 h-10" aria-hidden="true"/>
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