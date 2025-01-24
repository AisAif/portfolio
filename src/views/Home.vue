<script setup>
import { ref } from "vue";

const showFirst = ref(true);
const showSecond = ref(false);

function showSecondMethod() {
  showFirst.value = !showFirst.value;
  setTimeout(() => {
    showSecond.value = !showSecond.value;
  }, 600);
}

function showFirstMethod() {
  showSecond.value = !showSecond.value;
  setTimeout(() => {
    showFirst.value = !showFirst.value;
  }, 600);
}
</script>
<template>
  <transition name="fade-y">
    <div
      v-show="showFirst"
      class="hero flex flex-col justify-center items-center gap-6 text-accent-dark dark:text-accent-light px-6 sm:px-10 md:px-20 sm:py-20 py-10"
    >
      <div class="image flex justify-center items-center">
        <img
          src="/img/photo.jpg"
          class="w-[250px] rounded-full border-accent-dark dark:border-accent-light border-2 drop-shadow-md"
        />
      </div>
      <div class="flex flex-col justify-center items-center gap-2">
        <div class="description text-center flex flex-col gap-2">
          <h1
            class="text-xl md:text-3xl font-bold font-roboto text-accent-dark dark:text-primary"
          >
            Abdullah Isbarul Fahmi
          </h1>
          <h3
            class="text-base md:text-xl font-semibold underline underline-offset-4 tracking-wider"
          >
            IT ENTHUSIAST
          </h3>
        </div>
        <div class="button flex w-32 h-12 justify-center items-center">
          <button
            @click="showSecondMethod"
            class="bg-accent-dark hover:bg-accent-light dark:bg-accent-light dark:hover:bg-accent-dark transition-all text-white p-2 hover:p-3 text-sm hover:text-base font-bold rounded-md"
          >
            Show More
          </button>
        </div>
      </div>
    </div>
  </transition>
  <transition name="fade-y">
    <div
      v-show="showSecond"
      class="hero h-full flex flex-col md:flex-row justify-center items-center gap-6 text-accent-dark dark:text-accent-light px-6 sm:px-10 md:px-20 sm:py-20 py-10"
    >
      <div class="image md:w-1/3 flex justify-center items-center">
        <img
          src="/img/photo.jpg"
          class="w-[150px] md:w-[250px] rounded-full border-accent-dark dark:border-accent-light border-2 drop-shadow-md"
        />
      </div>
      <div class="flex flex-col justify-center items-center gap-4 md:w-2/3">
        <div class="description text-center flex flex-col gap-2">
          <h1
            class="text-xl md:text-3xl font-bold font-roboto text-accent-dark dark:text-primary"
          >
            Abdullah Isbarul Fahmi
          </h1>
          <h3
            class="text-base md:text-xl font-semibold underline underline-offset-4 tracking-wider"
          >
            IT ENTHUSIAST
          </h3>
        </div>
        <div class="profile mt-6">
          <p class="text-justify indent-8 md:indent-16">
            I am a dedicated software engineer specializing in modern Software
            Development. My expertise includes backend technologies such as
            Laravel, Node.js, and Golang, alongside frontend skills in Vue.js or
            React. I am proficient in multiple programming languages, including
            TypeScript, PHP, Golang, and Python, enabling me to craft innovative
            and efficient solutions for complex challenges.
          </p>
        </div>
        <div class="button flex w-32 h-12 justify-center items-center">
          <button
            @click="showFirstMethod"
            class="bg-accent-dark hover:bg-accent-light dark:bg-accent-light dark:hover:bg-accent-dark transition-all text-white p-2 hover:p-3 text-sm hover:text-base font-bold rounded-md"
          >
            Show Less
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>
