<script setup>
import { RouterLink } from "vue-router";
import { reactive, ref } from "vue";
import useDarkMode from "../hooks/dark-mode";

const { value: theme, updateDarkMode } = useDarkMode;

const navMobileToggle = ref(false);

const toggleValue = reactive([
  {
    id: 1,
    path: "/",
    text: "Home",
  },
  // {
  //     id: 2,
  //     path: '/about',
  //     text: 'About Me',
  // },
  {
    id: 2,
    path: "/experience",
    text: "Experience",
  },
  {
    id: 3,
    path: "/project",
    text: "My Project",
  },
  {
    id: 4,
    path: "/social",
    text: "Contact Me",
  },
]);
</script>

<template>
  <button
    @click="navMobileToggle = true"
    class="sm:hidden fixed z-50 bottom-0 right-0 bg-accent-dark dark:bg-accent-light text-slate-200 flex justify-center items-center m-2 p-2 rounded-md transition-all"
    :class="navMobileToggle && 'opacity-0 translate-x-[100px]'"
  >
    <span class="material-symbols-outlined text-3xl">menu</span>
  </button>
  <div
    v-if="navMobileToggle"
    @click="navMobileToggle = false"
    class="sm:hidden fixed z-[49] bottom-0 right-0 w-screen h-screen bg-black/20"
  />
  <div
    class="sm:relative fixed left-0 bg-accent-dark dark:bg-accent-light sm:bg-transparent sm:dark:bg-transparent text-slate-200 w-36 sm:w-full h-screen sm:h-fit flex flex-col sm:flex-row gap-10 sm:gap-0 justify-between items-center py-10 sm:py-4 sm:px-10 font-jost sm:text-accent-dark sm:dark:text-accent-light z-50 rounded-r-sm sm:rounded-none transition-all duration-300 sm:translate-x-0 sm:translate-y-0"
    :class="navMobileToggle ? 'translate-x-0' : '-translate-x-36'"
  >
    <RouterLink
      @click="navMobileToggle = !navMobileToggle"
      to="/"
      class="logo w-1/3 sm:w-1/4"
    >
      <img
        src="/img/logo-transparent.png"
        class="w-full sm:w-8 bg-slate-800 sm:dark:bg-transparent rounded-full"
      />
    </RouterLink>
    <nav
      @click="navMobileToggle = !navMobileToggle"
      class="w-full sm:w-1/2 flex flex-col sm:flex-row sm:items-center sm:justify-center font-bold text-xs sm:text-sm"
    >
      <div
        class="flex sm:justify-center sm:item-center sm:w-1/4 border-accent-dark dark:border-accent-light sm:bg-transparent sm:dark:bg-transparent px-5 py-4 sm:p-0"
        v-for="value in toggleValue"
        :key="value.id"
        :class="
          value.path == $route.path
            ? 'sm:animate-navbar-transition bg-accent-light dark:bg-accent-dark'
            : ''
        "
      >
        <RouterLink
          class="w-full pb-1 sm:text-center text-xl sm:text-sm"
          :to="value.path"
          >{{ value.text }}</RouterLink
        >
      </div>
    </nav>
    <div class="w-1/4 flex gap-2 justify-end items-center text-sm">
      <p class="hidden sm:flex">light</p>
      <button>
        <span
          @click="updateDarkMode()"
          class="material-symbols-outlined text-4xl sm:text-3xl cursor-pointer transition-all delay-100 duration-100 ease-out"
          >{{ theme !== "light" ? "toggle_on" : "toggle_off" }}</span
        >
      </button>
      <p class="hidden sm:flex">dark</p>
    </div>
  </div>
</template>
