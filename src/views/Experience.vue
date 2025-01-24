<script setup>
import GetTimeline from "../components/GetTimeline.vue";
import MainLayout from "../components/MainLayout.vue";
import { ref, Suspense } from "vue";
</script>
<template>
  <Suspense>
    <GetTimeline />
    <template #fallback>
      <div class="flex h-full justify-center items-center gap-3 text-3xl">
        <span>Loading</span>
        <span class="material-symbols-outlined animate-spin">sync</span>
      </div>
    </template>
  </Suspense>
</template>
