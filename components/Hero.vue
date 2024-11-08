<template>
  <main class="hero flex flex-col">
    <!-- Actual hero content -->
    <div class="flex-grow flex items-center justify-center">
      <div
        class="flex flex-col md:flex-row justify-center items-center space-y-5 md:space-x-10 md:mr-10"
      >
        <!-- Portrait only  -->
        <div class="flex flex-col justify-center items-center space-y-2">
          <span class="md:hidden text-lg text-center text-apricot-950">
            {{ $t("hero.mc") }}
          </span>
          <h1
            class="md:hidden text-4xl font-bold text-center text-creme-700 tracking-wider text-shadow"
          >
            {{ $t("hero.brand_name") }}
          </h1>
        </div>
        <!-- Image -->
        <NuxtImg
          src="/images/Hero.webp"
          :alt="$t('aria.heroPhoto')"
          sizes="90vw md:45vw"
        />
        <!-- Landscape and partially Portrait-->
        <div
          class="flex-1 flex flex-col justify-center items-center space-y-2 md:space-y-8"
        >
          <div class="hidden md:flex flex-col justify-center items-center space-y-2">
            <span class="text-4xl text-center text-apricot-950">
              {{ $t("hero.mc") }}
            </span>
            <h1
              class="text-3xl text-creme-700 md:text-8xl font-bold text-center tracking-wider text-shadow"
            >
              {{ $t("hero.brand_name") }}
            </h1>
          </div>
          <span
            class="text-center text-xl text-apricot-950 tracking-tighter md:text-4xl"
          >
            {{ $t("hero.brand_slogan") }}
          </span>
          <NuxtLink
            :to="localePath(contactRoute.path)"
            class="btn-primary"
          >
            {{ $t("hero.contact_now") }}
          </NuxtLink>
        </div>
      </div>
    </div>
    <!-- Floral decoration -->
    <div
      class="flex flex-row justify-between relative -top-5"
      aria-hidden="true"
    >
      <NuxtImg
        src="/images/decoration/flower_border_side.webp"
        alt=""
        aria-hidden="true"
        class="z-0 h-[25vh] w-auto max-w-1/2"
        sizes="1vw"
      />
      <NuxtImg
        src="/images/decoration/flower_border_side.webp"
        alt=""
        aria-hidden="true"
        class="z-0 h-[25vh] w-auto max-w-1/2 transform scale-x-[-1]"
        sizes="(max-width: 640px) 50vw, (max-width: 768px) 40vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
        />
    </div>
  </main>
</template>

<style scoped>
.hero {
  /* Full Screen - Header + Image */
  height: calc(100vh - var(--header-height, 5vh));
  font-family: "Playfair Display";
}

.btn-primary {
  @apply rounded-full border-2 border-creme-700 bg-creme-700 text-white font-semibold tracking-wider px-12 py-1 w-fit hover:bg-creme-800 hover:border-creme-800 focus:outline-none focus:border-creme-900;
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
