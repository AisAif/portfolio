<script setup>
import { ref } from "@vue/reactivity"


const getProjects = async() => {
    await new Promise(resolve => setTimeout(resolve, 1500))

    const projects = fetch('/model/projects.json').then((res)=> res.json())
    return projects
}

const projects = await getProjects()

const openProject = (id) => {
    projectIdOpen.value  = id
}

const closeProject = () => {
    projectIdOpen.value = ref()
}

const projectIdOpen = ref()

</script>

<template>
    <div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 justify-items-center">
            <div class="flex flex-col w-fit shadow-xl dark:border-2 dark:border-accent-light" v-for="project in projects" :key="project.id">
                <div class="w-full relative group cursor-pointer">
                    <img :src="project.img" class="w-full">
                    <div  @click="openProject(project.id)" class="absolute group-hover:backdrop-brightness-50 w-full h-full flex justify-center items-center text-sm font-roboto font-bold left-0 top-0 transition-all duration-300">
                        <p class="w-fit hidden group-hover:flex border border-slate-200 text-slate-200 rounded px-2">Click for more information.</p>
                    </div>
                </div>
                <div class="flex flex-col gap-1 justify-center items-center p-4 text-center">
                    <h1 class="text-xl font-bold">{{ project.name }}</h1>
                    <p>{{ project.short_description }}</p>
                </div>
                <transition name="fade-size" mode="in-out">
                    <div class="absolute left-0 top-0 w-full h-full flex flex-col justify-center items-center backdrop-blur-sm z-50" v-if="project.id == projectIdOpen">
                        <div class="relative flex flex-col justify-center items-center w-[340px] sm:w-[600px] rounded p-3 sm:py-3 sm:p-10 bg-accent-dark dark:bg-accent-light text-slate-200">
                            <button class="self-end"><span @click="closeProject" class="material-symbols-outlined">close</span></button>
                            <h1 class="text-xl sm:text-xl font-bold">{{ project.name }}</h1>
                            <p class="text-xs sm:text-base text-justify mt-6">{{ project.description }}</p>
                            <a :href="project.link" target="_blank" class="bg-accent-light dark:bg-accent-dark hover:bg-secondary hover:text-accent-dark dark:hover:text-accent-light p-2 rounded mt-5">Web Prototype</a>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>
