<template>
  <div class="h-[2000px] flex flex-col">
    <h1 class="mb-10 text-center text-4xl font-bold">Kalender</h1>
    <iframe
      ref="iframe"
      src="https://widget.myfxbook.com/widget/calendar.html?lang=en&impacts=2,3&symbols=AUD,CAD,CHF,EUR,GBP,JPY,NZD,USD"
      style="border: 0; width: 100%"
      class="flex-1 dark:invert"
    ></iframe>
  </div>
</template>

<script setup>
const iframe = ref();
</script>

<style scoped></style>
