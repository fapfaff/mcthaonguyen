<template>
  <div v-if="isVisible" :class="toastClass">
    {{ message }} 
  </div>
</template>

<script setup>
const { isVisible, message, type } = useToast();

const toastClass = computed(() => {
  return type.value === 'success' 
    ? 'fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-green-800 text-white px-4 py-3 rounded-lg z-50'
    : 'fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-apricot-800 text-white px-4 py-3 rounded-lg z-50'
})
</script>
