<template>
  <div>
    <Card>
      <div class="flex flex-col content-center justify-center">
        <span class="text-xl text-apricot-950 text-center mb-4">
          {{ $t("contact.orViaSocials") }}
        </span>
        <div class="flex flex-row justify-center gap-14 mb-2">
          <a :href="config.socials.facebook" :aria-label="$t('aria.contactViaFacebook')">
            <img
              aria-hidden="true"
              class="w-12 h-12"
              src="@/assets/img/socials/Facebook_Logo.webp"
            />
          </a>
          <a :href="config.socials.tiktok" :aria-label="$t('aria.contactViaTiktok')">
            <img
              aria-hidden="true"
              class="w-12 h-12"
              src="@/assets/img/socials/TikTok_Logo.webp"
            />
          </a>
          <a
            :href="config.socials.instagram"
            :aria-label="$t('aria.contactViaInstagram')">
            <img
              aria-hidden="true"
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
import config from "~/config";
import ContactCard from "./ContactCard.vue";
</script>
