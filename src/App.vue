<script setup>
import MainLayout from "./components/MainLayout.vue";
import { RouterView } from "vue-router";
import { onMounted } from "vue";
</script>

<template>
  <MainLayout>
    <RouterView v-slot="{ Component }">
      <!-- <transition name="route" mode="out-in"> -->
      <component :is="Component" />
      <!-- </transition> -->
    </RouterView>
  </MainLayout>
</template>

<style>
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.route-enter-active {
  transition: all 0.6s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.route-leave-active {
  transition: all 0.6s ease-in;
}

.fade-y-enter-active {
  transition: all 0.6s ease-in-out;
}

.fade-y-leave-active {
  transition: all 0.6s ease-in-out;
}

.fade-y-enter-from {
  opacity: 0;
  transform: translateY(-100px);
}
.fade-y-leave-to {
  opacity: 0;
  transform: translateY(100px);
}

.fade-size-enter-active {
  transition: all 0.6s ease-in-out;
}

.fade-size-leave-active {
  transition: all 0.6s ease-in-out;
}

.fade-size-enter-from {
  opacity: 0;
  transform: scale(0);
}
.fade-size-leave-to {
  opacity: 0;
  transform: scale(0);
}
</style>
