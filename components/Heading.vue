<template>
    <h1 class="text-4xl text-amber-800 text-center underline underline-offset-8 tracking-wider">
        {{ text }}
    </h1>
</template>
<script setup>
    defineProps({
        text: String
    })
</script>