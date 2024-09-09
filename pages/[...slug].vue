<script setup>
const link = link => ({ label: link.title, to: link._path });
const mapNav = nav => nav[0].children.map(link);
</script>

<template>
  <div class="flex flex-col lg:flex-row gap-10">
    <ContentNavigation
      v-slot="{ navigation }"
      :query="queryContent($route.params.slug[0])"
    >
      <UHorizontalNavigation :links="mapNav(navigation)" class="lg:hidden" />
      <UVerticalNavigation
        class="sticky top-[105px] h-max hidden lg:block"
        :links="mapNav(navigation)"
      />
    </ContentNavigation>
    <ContentDoc class="dark:invert prose" />
  </div>
</template>

<style>
.prose {
  max-width: max-content;
}

img {
  width: 100%;
  margin: auto;
}

p {
  font-size: 1.25rem;
}

html {
  scroll-behavior: smooth;
  @apply scroll-pt-20;
}
</style>
