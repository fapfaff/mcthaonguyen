<template>
  <header class="fixed bg-creme-100 w-screen z-50">
    <div class="w-full flex justify-between text-creme-700">
      <div class="ps-4 pe-4 pt-1 pb-1">
        <button @click="toggleNav()" class="font-semibold">
          {{ $t("header.menu") }}
        </button>
      </div>
      <div class="ps-4 pe-4 pt-1 pb-1">
        <button @click="toggleLang()" class="font-semibold">{{ $t("header.language") }}</button>
      </div>
    </div>
    <div :class="expanded" class="collapsible-menu ps-2 pe-2">
      <div class="border-creme-700 border-solid border-t border-b">
          <nav v-if="isNavExpanded"
            class="flex flex-row justify-around"
          >
            <NuxtLink class="hover:text-creme-700" v-for="route in menuRoutes" :key="route.path" :to="localePath(route.path)" @click="handleRouting()">
                {{ $t(`route.${route.name}`) }}
            </NuxtLink>
          </nav>
          <div v-if="isLangExpanded" class="flex flex-row justify-around">
            <NuxtLink class="hover:text-creme-700" v-for="locale in locales" :key="locale.code" :to="switchLocalePath(locale.code)" @click="toggleLang()">
                {{ locale.name }}
            </NuxtLink>
          </div>
      </div>
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
