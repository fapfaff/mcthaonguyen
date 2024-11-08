<template>
    <h2 class="text-4xl text-creme-700 text-shadow-gold text-center underline underline-offset-8 tracking-wider pb-10 pt-16">
        {{ text }}
    </h2>
</template>
<script setup>
    defineProps({
        text: String
    })
</script>
<style scoped>
    .text-shadow-gold {
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3); /* Adjust as needed */
    }   
</style>