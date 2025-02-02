<script setup>
import { ref } from "@vue/reactivity";

const getProjects = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const projects = fetch("/model/projects.json").then((res) => res.json());
  return projects;
};

const projects = await getProjects();

const openProject = (id) => {
  projectIdOpen.value = id;
};

const closeProject = () => {
  projectIdOpen.value = ref();
};

const projectIdOpen = ref();
</script>

<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 gap-3 justify-items-center px-6 sm:px-10 md:px-20 sm:py-20 py-10"
  >
    <div
      class="flex flex-col w-fit shadow-xl dark:border-2 dark:border-accent-light rounded-lg"
      v-for="project in projects.sort((a, b) => b.id - a.id)"
      :key="project.id"
    >
      <div class="w-full relative group cursor-pointer">
        <img :src="project.img" class="w-full rounded-t-lg" />
        <div
          @click="openProject(project.id)"
          class="absolute group-hover:backdrop-brightness-50 w-full h-full flex justify-center items-center text-sm font-roboto font-bold left-0 top-0 transition-all duration-100"
        >
          <p
            class="w-fit hidden group-hover:flex border border-slate-200 text-slate-200 rounded px-2"
          >
            Click for more information.
          </p>
        </div>
      </div>
      <div
        class="flex flex-col gap-1 justify-center items-center p-4 text-center"
      >
        <h1 class="text-xl font-bold">{{ project.name }}</h1>
        <p>{{ project.short_description }}</p>
      </div>
      <transition name="fade-size" mode="in-out">
        <div
          class="fixed left-0 top-0 w-screen h-screen flex flex-col justify-center items-center backdrop-blur-sm z-50"
          v-if="project.id == projectIdOpen"
          @click="closeProject"
        >
          <div
            class="relative flex flex-col justify-center items-center w-[340px] sm:w-[600px] max-h-screen rounded-xl p-4 sm:p-6 bg-accent-dark dark:bg-accent-light text-slate-200 overflow-auto"
            @click.stop
          >
            <img :src="project.img" class="w-full rounded-lg" />
            <h1 class="text-xl sm:text-xl mt-6">{{ project.name }}</h1>
            <p class="text-xs sm:text-base text-justify mt-4">
              {{ project.description }}
            </p>
            <div class="flex gap-4 justify-between items-center w-full mt-8">
              <a
                :href="project.link"
                target="_blank"
                class="bg-accent-light dark:bg-accent-dark hover:bg-secondary hover:text-accent-dark dark:hover:text-accent-light p-2 rounded w-[75%] text-center"
                >Result/Code</a
              >
              <button @click="closeProject" class="w-[25%] p-2 bg-white rounded text-slate-800">Close</button>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
