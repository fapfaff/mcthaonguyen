<template>
    <h1 class="text-4xl text-muted-gold text-center underline underline-offset-8 tracking-wider pb-4 pt-10">
        {{ text }}
    </h1>
</template>
<script setup>
    defineProps({
        text: String
    })
</script>
<style scoped>
    h1 {
        font-family: 'Playfair Display';
    }
</style>