<script setup>
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';
import { onMounted, ref } from 'vue';

const darkToggle = localStorage.theme == 'dark' ? ref(true) : ref(false)
  

const darkToggleMethod = () => {
  if (darkToggle.value) {
    darkToggle.value = false
    localStorage.theme = 'light'
  } else {
    darkToggle.value = true
    localStorage.theme = 'dark'
  }
}


</script>

<template>
  <div :class="darkToggle ? 'dark' : ''">
    <div class="font-poppins from-primary bg-gradient-to-b to-secondary dark:from-slate-900 dark:bg-gradient-to-b dark:to-slate-800 transition-all ease-in-out duration-500 overflow-hidden">
      <Navbar @dark-toggle-emit="darkToggleMethod" :dark-toggle-props="darkToggle" />
      <RouterView v-slot="{ Component }">
        <transition name="route" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </div>
  </div>
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