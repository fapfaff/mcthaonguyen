<template>
  <header class="fixed w-screen bg-amber-50 z-50">
    <div class="w-full flex justify-between text-amber-800">
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
      <div class="border-amber-800 border-solid border-t border-b">
          <nav v-if="isNavExpanded"
            class="flex flex-row justify-around"
          >
            <p
              v-for="item in ['About', 'Services', 'Contact']"
              class="text-black leading-3 p-1"
            >
              {{ item }}
            </p>
          </nav>
          <div v-if="isLangExpanded" class="flex flex-row justify-around">
            <NuxtLink v-for="locale in locales" :key="locale.code" :to="switchLocalePath(locale.code)" @click="toggleLang()">
                <p class="text-black leading-3 p-1">{{ locale.name }}</p>
            </NuxtLink>
          </div>
      </div>
    </div>
  </header>
  <div class="w-full h-14 -z-50 bg-transparent"></div>
</template>
<script setup>
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

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
</script>

<style scoped>
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
