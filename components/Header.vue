<template>
  <header
    class="backdrop-blur border-b -mb-px sticky top-0 z-50 border-gray-200 dark:border-gray-800"
  >
    <div
      class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between h-16"
    >
      <NuxtLink to="/" aria-label="Trading Dashboard">
        <img src="/trading.svg" class="w-auto h-8" />
      </NuxtLink>

      <ul class="flex items-center gap-x-8">
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
      <ColorModeButton />
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped></style>
