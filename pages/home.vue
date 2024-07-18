<template>
  <Hero></Hero>
  <div class="ms-4 me-4">
    <Heading
      id="services"
      :text="$t('route.services')"
      class="anchor"
    ></Heading>
      <Services></Services>
      <Heading
      id="testimonials"
      :text="$t('route.testimonials')"
      class="anchor"
    ></Heading>
    <Testimonials></Testimonials>
    <Heading
      id="aboutMe"
      :text="$t('route.about_me')"
      class="anchor"
    ></Heading>
    <div class="h-52"></div>
    <Heading id="contact" :text="$t('route.contact')" class="anchor"></Heading>
    <div class="h-52"></div>
  </div>

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
