<template>
  <Hero></Hero>
  <Heading
    id="services"
    :text="$t('headings.services')"
    class="anchor"
  ></Heading>
  <div class="h-52"></div>
  <Heading
    id="testimonials"
    :text="$t('headings.testimonials')"
    class="anchor"
  ></Heading>
  <div class="h-52"></div>
  <Heading
    id="aboutMe"
    :text="$t('headings.about_me')"
    class="anchor"
  ></Heading>
  <div class="h-52"></div>
  <Heading id="contact" :text="$t('headings.contact')" class="anchor"></Heading>
  <div class="h-52"></div>
</template>
<style>
body,
html {
  margin: 0;
  padding: 0;
  width: 100vw;
  overflow-x: hidden;

  overflow-y: scroll;
}

::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: transparent;
}

.anchor::before {
  --anchor-offset: var(--header-height);
  content: '';
  display: block;
  height:      var(--anchor-offset);
  margin-top: calc(var(--anchor-offset) * -1);
  visibility: hidden;
}
</style>
<script>
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
