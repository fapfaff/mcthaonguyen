<template>
    <Card>
        <div class="flex flex-col items-center pt-3 w-100">
            <img :src="src" class="w-10 h-10" :alt="`${title} Icon`">
            <h1 class="text-3xl text-center pb-1 mt-3 mb-2"> {{ title }} </h1>
            <p class="text-center"> {{ description }}</p>
        </div>
    </Card>
</template>
<script setup>
const props = defineProps(['title', 'description', 'src']);
</script>
<style scoped>
    h1 {
        font-family: "Playfair Display";
    }
</style>