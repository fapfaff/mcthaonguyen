<template>
    <h2 class="text-4xl text-creme-700 text-shadow text-center underline underline-offset-8 tracking-wider pb-10 pt-16">
        {{ text }}
    </h2>
</template>
<script setup>
    defineProps({
        text: String
    })
</script>