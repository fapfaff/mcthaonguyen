<template>
  <div class="hero flex flex-col">
    <!-- Actual hero content -->
    <div class="flex-grow flex items-center justify-center">
      <div
        class="flex flex-col md:flex-row justify-center space-y-5 md:space-x-10"
      >
        <!-- Circle -->
        <div
          class="circle border-rose-200 border-2 flex items-center justify-center"
        >
          <div class="inner-circle bg-rose-200"></div>
        </div>
        <!-- Text -->
        <div class="flex flex-col justify-center space-y-2 md:space-y-6">
          <h1 class="text-3xl md:text-8xl font-bold underline text-center">
            {{ $t("brandName") }}
          </h1>
          <p class="text-center text-xl md:text-4xl">{{ $t("brandSlogan") }}</p>
        </div>
      </div>
    </div>
    <!-- Floral decoration -->
    <div class="border-img-container flex flex-row justify-between">
      <img
        src="@/assets/img/flower_border_side.webp"
        alt="Floral border decoration"
      />
      <img
        src="@/assets/img/flower_border_side.webp"
        alt="Floral border decoration"
      />
    </div>
    <div class="h-100"></div>
  </div>
</template>
<style scoped>
.hero {
  /* Full Screen - Header + Image */
  height: calc(100vh - var(--header-height, 5vh));
  box-sizing: border-box;
}

.border-img-container img {
  height: 25vh;
  width: auto;
  max-width: 50% !important;
}

.border-img-container img:nth-child(2) {
  transform: scaleX(-1);
}

.circle {
  --circle-size: 30vh;

  height: calc(var(--circle-size) + var(--circle-size) / 15);
  width: calc(var(--circle-size) + var(--circle-size) / 15);
  border-radius: 100%;
}

.inner-circle {
  height: var(--circle-size);
  width: var(--circle-size);
  border-radius: 100%;
}
</style>
<script>
import { onMounted, ref } from "vue";

export default {
  setup() {
    const headerHeight = ref(0); // Stores the header's height

    onMounted(() => {
      const header = document.querySelector("header"); // Adjust this selector to target your header element
      if (header) {
        headerHeight.value = header.offsetHeight; // Get the actual height of the header
        document.documentElement.style.setProperty(
          "--header-height",
          `${headerHeight.value}px`
        ); // Set the CSS variable on the root element
      }
    });

    return {
      headerHeight,
    };
  },
};
</script>
