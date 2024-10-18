<template>
  <header class="lg:hidden fixed bg-creme-100 w-screen z-50">
    <div class="w-full flex justify-between text-creme-700">
      <div class="ps-4 pe-4 pt-1 pb-1">
        <button @click="toggleNav()" class="font-semibold" aria-controls="navMenu" :aria-expanded="isNavExpanded.toString()">
          {{ $t("header.menu") }}
        </button>
      </div>
      <div class="ps-4 pe-4 pt-1 pb-1">
        <button @click="toggleLang()" class="font-semibold" aria-controls="langMenu" :aria-expanded="isLangExpanded.toString()">{{ $t("header.language") }}</button>
      </div>
    </div>
    <div :class="expanded" class="collapsible-menu ps-2 pe-2">
      <div class="border-creme-700 border-solid border-t border-b">
          <nav id="navMenu" v-if="isNavExpanded"
          >
            <ul class="flex flex-row justify-evenly">
              <li v-for="route in menuRoutes" :key="route.path">
                <NuxtLink class="hover:text-creme-700" :to="localePath(route.path)" @click="handleRouting()">
                    {{ $t(`route.${route.name}`) }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
          <div id="langMenu" v-if="isLangExpanded">
            <ul class="flex flex-row justify-evenly">
              <li v-for="locale in locales">
                <NuxtLink class="hover:text-creme-700" :key="locale.code" :to="switchLocalePath(locale.code)" @click="toggleLang()">
                    {{ locale.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>
      </div>
    </div>
  </header>
  <header class="hidden lg:visible lg:flex fixed bg-creme-100 w-screen z-50 px-4 py-1">
    <nav id="navMenu" class="flex-grow"
    >
      <ul class="flex flex-row justify-start gap-6">
        <li v-for="route in menuRoutes" :key="route.path">
          <NuxtLink class="hover:text-creme-700 text-xl" :to="localePath(route.path)" @click="handleRouting()">
              {{ $t(`route.${route.name}`) }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <div class="relative">
      <button @click="toggleLang()" class="hover:text-creme-700 text-xl">
        {{ $t("header.language") }}
      </button>
      <ul v-if="isLangExpanded" class="absolute right-0 bg-creme-100 mt-2 p-2 border border-creme-700">
        <li v-for="locale in locales" :key="locale.code" class="py-1 px-2">
          <NuxtLink class="hover:text-creme-700 whitespace-nowrap" :to="switchLocalePath(locale.code)" @click="toggleLang()">
            {{ locale.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </header>
  <div class="w-full h-14 -z-50 bg-transparent"></div>
</template>
<script setup>
import routes from '~/utils/routes';
const menuRoutes = routes.filter(route => route.show == true);

const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();

// State for navigation and language expand controls
const isNavExpanded = ref(false);
const isLangExpanded = ref(false);

// Computed property to check if any menu is expanded 
const expanded = computed(() => {
  return isNavExpanded.value || isLangExpanded.value ? "expanded" : "";
});

// Methods for toggling navigation and language options
function toggleNav() {
  isLangExpanded.value = false;
  isNavExpanded.value = !isNavExpanded.value;
}

function toggleLang() {
  isNavExpanded.value = false;
  isLangExpanded.value = !isLangExpanded.value;
}

function handleRouting() {
  isNavExpanded.value = false;
}
</script>

<style scoped>
header {
  font-family: "Playfair Display";
}
.collapsible-menu {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.5s ease-out, opacity 0.2s ease-in;
  opacity: 0;
}
.collapsible-menu.expanded {
  max-height: 200px;
  transition: max-height 1s;
  transition: max-height 0.5s ease-in, opacity 0.2s ease-in;
  opacity: 1;
}
</style>
