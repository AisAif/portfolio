<script setup>
import MainLayout from '../components/MainLayout.vue';
import { RouterLink } from 'vue-router';
</script>
<template>
    <MainLayout>
        <div class="w-full h-full flex flex-col justify-center items-center text-2xl font-roboto font-bold text-center gap-3">
            <p>Halaman Tidak Ditemukan</p>
            <RouterLink class="px-2 py-1 tracking-widest bg-accent-dark hover:bg-accent-light dark:bg-accent-light hover:dark:bg-accent-dark text-white text-base rounded" to="/">Balik</RouterLink>
        </div>
    </MainLayout>
</template>