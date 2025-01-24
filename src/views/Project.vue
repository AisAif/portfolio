<script setup>
import GetProject from "../components/GetProject.vue";
import { reactive, Suspense } from "vue";
</script>
<template>
  <Suspense>
    <GetProject />
    <template #fallback>
      <div class="flex h-full justify-center items-center gap-3 text-3xl">
        <span>Loading</span>
        <span class="material-symbols-outlined animate-spin">sync</span>
      </div>
    </template>
  </Suspense>
</template>
