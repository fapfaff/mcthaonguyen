<template>
  <div>
    <Card>
      <div class="flex flex-col content-center justify-center">
        <span class="text-xl text-apricot-950 text-center mb-4">
          {{ $t("contact.orViaSocials") }}
        </span>
        <div class="flex flex-row justify-center gap-14 mb-2">
          <a :href="config.socials.facebook" :aria-label="$t('aria.contactViaFacebook')">
            <NuxtImg
              aria-hidden="true"
              src="/images/icons/socials/Facebook_Logo.webp"
              width="48"
              height="48"
            />
          </a>
          <a :href="config.socials.tiktok" :aria-label="$t('aria.contactViaTiktok')">
            <NuxtImg
              aria-hidden="true"
              src="/images/icons/socials/TikTok_Logo.webp"
              width="48"
              height="48"
            />
          </a>
          <a
            :href="config.socials.instagram"
            :aria-label="$t('aria.contactViaInstagram')">
            <NuxtImg
              aria-hidden="true"
              src="/images/icons/socials/Instagram_Logo.webp"
              width="48"
              height="48"
            />
          </a>
        </div>
      </div>
    </Card>
  </div>
</template>
<script lang="ts" setup>
const config = useAppConfig();
</script>
