<script setup>

const getSocials = async() => {
    await new Promise(resolve => setTimeout(resolve, 1500))

    const socials = fetch('/model/socials.json').then((res)=> res.json())
    return socials
}

const socials = await getSocials()

</script>

<template>
    <div class="w-full grid grid-cols-1 sm:grid-cols-2 gap-2 justify-items-center">
        <div class="relative w-64 sm:w-full px-2 py-2 flex flex-col justify-center items-center gap-2 rounded bg-white/10 shadow-md border-t-[1.3px] border-r-[1.3px] border-white/50 text-center" v-for="social in socials" :key="social.id">
            <a v-show="social.link" :href="social.link" target="_blank" class="absolute right-2 top-2">
                <span class="material-symbols-outlined hover:-translate-y-1 hover:translate-x-1 transition-all duration-200">arrow_outward</span>
            </a>
            <img :src="social.img" class="w-14">
            <p class="">{{ social.description }}</p>
            <h1 class="text-sm font-bold">{{ social.value }}</h1>
        </div>
    </div>
</template>
