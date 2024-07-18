<template>
  <div>
    <Card>
      <div class="flex flex-col content-center justify-center">
        <h2 class="text-xl text-apricot-950 text-center mb-4">
          {{ $t("contact.orViaSocials") }}
        </h2>
        <div class="flex flex-row justify-center gap-14 mb-2">
          <a :href="config.socials.facebook" aria-label="Contact via Facebook">
            <img
              class="w-12 h-12"
              src="@/assets/img/socials/Facebook_Logo.webp"
            />
          </a>
          <a :href="config.socials.tiktok" aria-label="Contact via Tiktok">
            <img
              class="w-12 h-12"
              src="@/assets/img/socials/TikTok_Logo.webp"
            />
          </a>
          <a :href="config.socials.instagram" aria-label="Contact via Instagram">
            <img
              class="w-12 h-12"
              src="@/assets/img/socials/Instagram_Logo.webp"
            />
          </a>
        </div>
      </div>
    </Card>
  </div>
</template>
<script lang="ts" setup>
import config from '~/config';
</script>
