<template>
  <Card>
    <div class="flex flex-col h-fit gap-2">
      <NuxtImg
        class="w-4/5 self-center m-2"
        src="images/Hero.webp"
        :alt="$t('articles.portraitThaoNguyen')"
        size="80vw"
      />
      <h2 class="mt-4 text-2xl">{{ $t("articles.aboutAuthor") }}</h2>
      <p>{{ $t("articles.authorDescription") }}</p>
    </div>
  </Card>
</template>
