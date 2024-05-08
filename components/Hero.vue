<template>
  <div class="hero flex flex-col">
    <div class="flex-grow">
      <h1 class="text-3xl font-bold underline">
        {{ $t("brandName") }}
      </h1>
      <p>{{ $t("brandSlogan") }}</p>
    </div>
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
