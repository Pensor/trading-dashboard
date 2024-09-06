<template>
  <header
    class="bg-background/75 backdrop-blur border-b -mb-px sticky top-0 z-50 border-gray-200 dark:border-gray-800"
  >
    <div
      class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-3 h-16"
    >
      <div class="lg:flex-1 flex items-center gap-1.5">
        <NuxtLink
          to="/"
          class="flex items-end gap-1.5 font-bold text-xl text-gray-900 dark:text-white"
          aria-label="Trading Dashboard"
        >
          <img src="/trading.svg" class="w-auto h-8" />
        </NuxtLink>
      </div>
      <ul class="items-center gap-x-8 flex">
        <li class="relative">
          <NuxtLink
            class="text-sm/6 font-semibold flex items-center gap-1 hover:text-primary"
            to="/wissen/algorithm"
          >
            Wissen
          </NuxtLink>
        </li>
        <li class="relative">
          <NuxtLink
            class="text-sm/6 font-semibold flex items-center gap-1 hover:text-primary"
            to="/strategien/trendscalp"
          >
            Strategien
          </NuxtLink>
        </li>
        <li class="relative">
          <NuxtLink
            class="text-sm/6 font-semibold flex items-center gap-1 hover:text-primary"
            to="/journal"
          >
            Journal
          </NuxtLink>
        </li>
        <li class="relative">
          <NuxtLink
            class="text-sm/6 font-semibold flex items-center gap-1 hover:text-primary"
            to="/kalender"
          >
            Kalender
          </NuxtLink>
        </li>
      </ul>
      <div class="flex items-center justify-end lg:flex-1 gap-1.5">
        <ColorModeButton />
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped></style>
