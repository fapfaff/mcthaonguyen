<template>
    <div class="w-screen h-100 bg-creme-100">
        <Header>

        </Header>
        <!-- Output the page content  -->
        <div>
            <slot />
            <ModalsContainer />
        </div>
    </div>
</template>
<script setup lang="ts">
import { ModalsContainer } from 'vue-final-modal'
</script>