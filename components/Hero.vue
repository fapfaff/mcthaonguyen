<template>
  <main class="hero flex flex-col">
    <!-- Actual hero content -->
    <div class="flex-grow flex items-center justify-center">
      <div
        class="flex flex-col landscape:flex-row justify-center items-center space-y-5 landscape:space-x-10"
      >
        <div>
          <h2 class="landscape:hidden text-lg text-center text-creme-700">
            {{ $t("hero.mc_service") }}
          </h2>
          <h1
            class="landscape:hidden text-4xl font-bold text-center text-apricot-950 tracking-wider"
          >
            {{ $t("brand_name") }}
          </h1>
        </div>
        <!-- Circle -->
        <img
          src="@/assets/img/Hero.webp"
          alt="Portrait of Thảo Nguyên working as MC"
          class="pl-8 pr-8"
        />

        <div class="flex flex-col justify-center items-center space-y-2 landscape:space-y-6">
          <div class="hidden landscape:block mb-2x`">
            <h2 class="text-4xl text-center text-creme-700">
              {{ $t("hero.mc_service") }}
            </h2>
            <h1
              class="landscape:visible block text-3xl text-apricot-950 landscape:text-8xl font-bold text-center tracking-wider">
              {{ $t("brand_name") }}
            </h1>
          </div>
          <h3 class="text-center text-xl text-apricot-950 tracking-tighter landscape:text-4xl">
            {{ $t("brand_slogan") }}
          </h3>
          <NuxtLink :to="localePath(contactRoute.path)" class="rounded-full border-creme-700 border-2 bg-creme-700 text-creme-50 font-semibold tracking-wider p-1 box-border w-fit px-12 py-1 hover:bg-creme-800 hover:border-creme-800 focus:outline-none focus:border-creme-900 focus:border-2">
            {{ $t("contact_now") }}
          </NuxtLink>
        </div>
      </div>
    </div>
    <!-- Floral decoration -->
    <div class="border-img-container flex flex-row justify-between" aria-hidden="true">
      <img
        src="@/assets/img/flower_border_side.webp"
        class="z-0"
      />
      <img
        src="@/assets/img/flower_border_side.webp"
        class="z-0"
      />
    </div>
    <div class="h-100"></div>
  </main>
</template>
<style scoped>
.hero {
  /* Full Screen - Header + Image */
  height: calc(100vh - var(--header-height, 5vh));
  box-sizing: border-box;
  font-family: "Playfair Display";
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
  --circle-size: min(45vh, 80vw);

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
import routes from '~/utils/routes';
const contactRoute = routes.find(r => r.name === "contact");

export default {
  setup() {
    const headerHeight = ref(0);

    onMounted(() => {
      const header = document.querySelector("header");
      if (header) {
        headerHeight.value = header.offsetHeight;
        document.documentElement.style.setProperty(
          "--header-height",
          `${headerHeight.value}px`
        );
      }
    });

    return {
      contactRoute,
      headerHeight,
      localePath: useLocalePath()
    };
  },
};
</script>
