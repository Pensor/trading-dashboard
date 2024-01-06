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
          <NuxtImg src="/trading.svg" class="w-auto h-10" />
        </NuxtLink>
      </div>
      <ul class="items-center gap-x-8 hidden lg:flex">
        <li class="relative">
          <NuxtLink
            class="text-sm/6 font-semibold flex items-center gap-1 hover:text-primary"
            to="/wissen"
          >
            Wissen
          </NuxtLink>
        </li>
        <li class="relative">
          <NuxtLink
            class="text-sm/6 font-semibold flex items-center gap-1 hover:text-primary"
            to="/strategien"
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
      </ul>
      <div class="flex items-center justify-end lg:flex-1 gap-1.5">
        <ColorModeButton />
        <button
          type="button"
          class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center lg:hidden"
          aria-label="Open Menu"
        >
          <span
            class="i-heroicons-bars-3 flex-shrink-0 h-5 w-5"
            aria-hidden="true"
          ></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped></style>
