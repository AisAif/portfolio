<script setup>
import MainLayout from '../components/MainLayout.vue';
import GetSocial from '../components/GetSocial.vue'
import { Suspense } from 'vue';

</script>
<template>
    <MainLayout>
        <Suspense>
            <GetSocial />
            <template #fallback>
                <div class="flex h-full justify-center items-center gap-3 text-3xl">
                    <span>Loading</span>
                    <span class="material-symbols-outlined animate-spin">sync</span>
                </div>
            </template>
        </Suspense>
    </MainLayout>
</template>