<template>
    <client-only>
      <div
      class="backdrop absolute inset-0 h-full w-full overflow-auto"
      @click.self="() => emit('close')"
      >
        <Fireworks
          :autostart="true"
          :options="fireworksOptions"
          class="fireworks-container"
        />
        <div class="modal flex flex-col max-w-2xl my-12 mx-auto p-6 bg-creme-200 rounded-lg text-center items-center">
          <span class="text-4xl pb-4"> {{ $t("birthday.headline")  }}</span>
          <span class="text-xl mb-2"> {{ $t("birthday.havefun")  }}</span>
          <button @click.self="() => emit('close')" class="btn-primary">
            {{ $t("birthday.enter") }}
          </button>
        </div>
      </div>

    </client-only>
</template>

<script setup lang="ts">
import { Fireworks, type FireworksOptions } from '@fireworks-js/vue';

const emit = defineEmits<{
  (e: "close"): void;
}>();

const fireworksOptions: FireworksOptions = {
  autoresize: true,
  opacity: 1,
  friction: 0.97,
  gravity: 1.5,
  traceSpeed: 8,
  explosion: 10,
  intensity: 30,
  flickering: 0,
  lineStyle: 'round',
  hue: {
    min: 0,
    max: 360
  },
  rocketsPoint: {
    min: 50,
    max: 50
  },
  brightness: {
    min: 70,
    max: 80
  },
  decay: {
    min: 0.015,
    max: 0.03
  },
  mouse: {
    click: false,
    move: false,
    max: 1
  }
};


</script>

<style scoped>
.fireworks-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 60;
  pointer-events: none;
}

.backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50; 
}

.modal {
  z-index: 70;
}

.btn-primary {
  @apply rounded-full border-2 border-creme-700 bg-creme-700 text-white font-semibold tracking-wider px-12 py-1 w-fit hover:bg-creme-800 hover:border-creme-800 focus:outline-none focus:border-creme-900;
}
</style>
