<template>
  <Card>
    <div class="flex flex-col h-fit gap-2">
      <img
        class="w-4/5 self-center m-2"
        src="@/assets/images/Hero.webp"
        :alt="$t('articles.portraitThaoNguyen')"
      />
      <h2 class="mt-4 text-2xl">{{ $t("articles.aboutAuthor") }}</h2>
      <p>{{ $t("articles.authorDescription") }}</p>
    </div>
  </Card>
</template>
