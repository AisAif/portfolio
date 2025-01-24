<script setup>
import Navbar from "./Navbar.vue";
import useDarkMode from "../hooks/dark-mode";

const { value: theme } = useDarkMode;
</script>

<template>
  <div :class="[theme === 'dark' ? 'dark' : '']">
    <div
      class="font-poppins from-primary bg-gradient-to-b to-secondary dark:from-slate-900 dark:bg-gradient-to-b dark:to-slate-800 transition-all ease-in-out duration-500 text-accent-dark dark:text-accent-light h-screen overflow-auto"
    >
      <Navbar />
      <slot />
    </div>
  </div>
</template>
