<script setup>
import { ref } from "vue";

const about1 = ref(true);
const about2 = ref(false);
const about3 = ref(false);
</script>
<template>
  <div
    class="text-accent-dark dark:text-accent-light flex flex-col justify-center items-center gap-2 px-6 sm:px-10 md:px-20 sm:py-20 py-10"
  >
    <div
      @click="about1 = !about1"
      class="flex flex-col justify-center items-center cursor-pointer"
    >
      <h1 class="text-xl font-semibold">Biografi</h1>
      <span
        class="material-symbols-outlined"
        :class="about1 ? '' : 'animate-bounce'"
        >{{ about1 ? "expand_less" : "expand_more" }}</span
      >
    </div>
    <transition name="fade-y">
      <div v-show="about1" class="flex flex-col gap-2">
        <p class="text-xs md:text-base text-justify">
          Saya lahir di Rembang, tepatnya pada tanggal 20 Maret 2003. Saya
          bersekolah dekat dengan desa saya yang masih di dalam lingkup
          kecamatan saya, yaitu SMP N 1 Sulang dan SMA N 1 Sulang. Di saat SMA,
          saya diikutkan dalam salah satu lomba olimpiade di bidang Teknik
          Informatika tingkat kabupaten dan ternyata tidak mendapatkan juara
          apapun. Dari situlah, muncul motivasi dari diri saya untuk menempuh
          belajar di bidang pemrograman hingga saat ini.
        </p>
      </div>
    </transition>
  </div>
  <div
    class="text-accent-dark dark:text-accent-light flex flex-col justify-center items-center gap-2 mt-8"
  >
    <div
      @click="about2 = !about2"
      class="flex flex-col justify-center items-center cursor-pointer"
    >
      <h1 class="text-xl font-semibold">Awal Perkuliahan</h1>
      <span
        class="material-symbols-outlined"
        :class="about2 ? '' : 'animate-bounce'"
        >{{ about2 ? "expand_less" : "expand_more" }}</span
      >
    </div>
    <transition name="fade-y">
      <div v-show="about2" class="flex flex-col gap-2">
        <p class="text-xs md:text-base text-justify">
          Sebelum memasuki semester pertama pada perkuliahan, saya mencoba
          belajar otodidak tentang pemrograman dari internet. Saat memasuki awal
          semester, saya diajak teman seprodi untuk membangun project aplikasi
          bernama Kuberi.id dimana aplikasi tersebut berguna sebagai platform
          berbagi untuk yang membutuhkan di sekitar kita.
        </p>
        <p class="text-xs md:text-base text-justify">
          Saat memasuki semester dua, saya diajak oleh teman yang sama untuk
          mengikuti lomba Web Design secara online yang diadakan oleh UIN
          Palembang dengan Tim bernama Archon yang berisikan 3 orang. Dan
          alhamdulillahnya, kita dapat memenangkan juara 1 lomba tersebut
          meskipun ada sedikit kebejoan. Dan itu adalah kemenangan pertama kali
          dalam lomba pemrograman.
        </p>
      </div>
    </transition>
  </div>
  <div
    class="text-accent-dark dark:text-accent-light flex flex-col justify-center items-center gap-2 mt-8"
  >
    <div
      @click="about3 = !about3"
      class="flex flex-col justify-center items-center cursor-pointer"
    >
      <h1 class="text-xl font-semibold">Pertengahan Perkuliahan</h1>
      <span
        class="material-symbols-outlined"
        :class="about3 ? '' : 'animate-bounce'"
        >{{ about3 ? "expand_less" : "expand_more" }}</span
      >
    </div>
    <transition name="fade-y">
      <div v-show="about3" class="flex flex-col gap-2">
        <p class="text-xs md:text-base text-justify">
          Di semester berikutnya, saya diajak teman yang sama mengikuti beberapa
          kompetisi di bidang sains dengan mengerahkan beberapa aplikasi yang
          kita rancang. Beberapa diantaranya ada yang mendapatkan
          <i>gold medal</i> dengan membawakan ByShare sebagai platform berbagi
          kebaikan pada kompetisi WYIE yang diadakan di KLCC, Malaysia.
        </p>
        <p class="text-xs md:text-base text-justify">
          Hal ini menjadikan diri saya lebih semangat untuk mempelajari hal-hal
          lain yang berkaitan dengan pemrograman dan pengembangan aplikasi.
        </p>
      </div>
    </transition>
  </div>
</template>
