<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div
    class="w-full h-full flex flex-col justify-center items-center text-2xl font-roboto font-bold text-center gap-3 px-6 sm:px-10 md:px-20 sm:py-20 py-10"
  >
    <p>Page not found</p>
    <RouterLink
      class="px-2 py-1 tracking-widest bg-accent-dark hover:bg-accent-light dark:bg-accent-light hover:dark:bg-accent-dark text-white text-base rounded"
      to="/"
      >Back</RouterLink
    >
  </div>
</template>
