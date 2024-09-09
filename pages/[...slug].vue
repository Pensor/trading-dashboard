<script setup>
const route = useRoute();

const { data: navigation } = await useAsyncData("navigation", () =>
  fetchContentNavigation(queryContent(route.params.slug[0]))
);

const links = computed(() =>
  navigation.value[0].children.map(link => ({
    label: link.title,
    to: link._path
  }))
);
</script>

<template>
  <div class="flex flex-col lg:flex-row gap-10">
    <UHorizontalNavigation :links="links" class="lg:hidden" />
    <UVerticalNavigation
      class="sticky top-[105px] h-max hidden lg:block"
      :links="links"
    />
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
</style>
