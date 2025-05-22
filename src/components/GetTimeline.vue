<script setup>
const getTimelines = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const timelines = fetch("/model/timelines.json").then((res) => res.json());
  return timelines;
};

const timelines = await getTimelines();
</script>

<template>
  <div class="flex flex-col px-6 sm:px-10 md:px-20 sm:py-20 py-10">
    <div
      v-for="timeline in timelines"
      :key="timeline.id"
      class="flex justify-between items-center w-full gap-2 relative pb-8 border-l-2 dark:border-accent-dark border-accent-light"
    >
      <span
        class="w-[14px] h-[14px] bg-accent-light dark:bg-accent-dark absolute -left-2 top-0 rounded-full"
      />
      <div class="flex flex-col gap-2 pl-8">
        <p class="text-xs">{{ timeline.date }}</p>
        <h1 class="text-2xl font-bold">{{ timeline.title }}</h1>
        <ul>
          <li
            v-for="act in timeline.activities"
            :key="act.id"
            class="flex gap-2"
          >
            <span class="material-symbols-outlined text-xs"
              >fiber_manual_record</span
            >
            <p class="text-sm">{{ act }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

