<template>
  <main class="hero flex flex-col">
    <!-- Actual hero content -->
    <div class="flex-grow flex items-center justify-center">
      <div
        class="flex flex-col landscape:flex-row justify-center items-center space-y-5 landscape:space-x-10"
      >
        <!-- Portrait only  -->
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
        <!-- Image -->
        <img
          src="@/assets/images/Hero.webp"
          :alt="$t('aria.heroPhoto')"
          class="w-full landscape:max-w-[45vw] h-auto landscape:flex-1 portrait:px-8"
        />
        <!-- Landscape and partially Portrait-->
        <div
          class="flex-1 flex flex-col justify-center items-center space-y-2 landscape:space-y-6"
        >
          <div class="hidden landscape:block mb-4">
            <h2 class="text-4xl text-center text-creme-700">
              {{ $t("hero.mc_service") }}
            </h2>
            <h1
              class="text-3xl text-apricot-950 landscape:text-8xl font-bold text-center tracking-wider"
            >
              {{ $t("brand_name") }}
            </h1>
          </div>
          <h3
            class="text-center text-xl text-apricot-950 tracking-tighter landscape:text-4xl"
          >
            {{ $t("brand_slogan") }}
          </h3>
          <NuxtLink
            :to="localePath(contactRoute.path)"
            class="btn-primary"
          >
            {{ $t("contact_now") }}
          </NuxtLink>
        </div>
      </div>
    </div>
    <!-- Floral decoration -->
    <div
      class="flex flex-row justify-between"
      aria-hidden="true"
    >
      <img
        src="@/assets/images/flower_border_side.webp"
        class="z-0 h-[25vh] w-auto max-w-1/2"
      />
      <img
        src="@/assets/images/flower_border_side.webp"
        class="z-0 h-[25vh] w-auto max-w-1/2 transform scale-x-[-1]"
      />
    </div>
    <div class="h-100"></div>
  </main>
</template>

<style scoped>
.hero {
  /* Full Screen - Header + Image */
  height: calc(100vh - var(--header-height, 5vh));
  font-family: "Playfair Display";
}

.btn-primary {
  @apply rounded-full border-2 border-creme-700 bg-creme-700 text-creme-50 font-semibold tracking-wider px-12 py-1 w-fit hover:bg-creme-800 hover:border-creme-800 focus:outline-none focus:border-creme-900;
}
</style>

<script>
import routes from '~/utils/routes';

export default {
  setup() {
    const contactRoute = routes.find((r) => r.name === 'contact');
    const headerHeight = ref(0);

    onMounted(() => {
      const header = document.querySelector('header');
      if (header) {
        headerHeight.value = header.offsetHeight;
        document.documentElement.style.setProperty(
          '--header-height',
          `${headerHeight.value}px`
        );
      }
    });

    return {
      contactRoute,
      headerHeight,
      localePath: useLocalePath(),
    };
  },
};
</script>
