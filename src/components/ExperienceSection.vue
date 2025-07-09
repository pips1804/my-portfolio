<template>
  <section class="mb-6">
    <div
      class="flex justify-between items-center mb-4 flex-wrap sm:flex-nowrap gap-2"
    >
      <h2 class="text-2xl font-bold flex items-center gap-2">
        <Briefcase class="h-6 w-6" />
        Experience
      </h2>
      <router-link
        to="/experiences"
        class="text-primary hover:underline text-sm"
      >
        View All
      </router-link>
    </div>

    <div class="space-y-4">
      <TransitionGroup name="fade" tag="div" class="space-y-4">
        <div
          v-for="job in visibleExperience"
          :key="job.id"
          class="bg-card text-card-foreground p-6 rounded-lg border border-border hover:shadow-lg dark:hover:bg-muted/70 dark:hover:border-muted transition-all"
        >
          <div class="flex justify-between items-start mb-2">
            <h3 class="text-sm sm:text-lg md:text-xl font-semibold mb-1">
              {{ job.title }}
            </h3>
            <span class="text-xs sm:text-sm text-muted-foreground">
              {{ job.period }}
            </span>
          </div>
          <p class="text-sm sm:text-md text-muted-foreground mb-2">
            {{ job.company }}
          </p>
        </div>
      </TransitionGroup>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { Briefcase } from "lucide-vue-next";

const showAll = ref(false);

const experiences = ref([
  {
    id: 1,
    title: "Mobile Development",
    company: "Pambayang Dalubhasaan ng Marilao",
    period: "School Related",
  },
  {
    id: 2,
    title: "Game Development",
    company: "Pambayang Dalubhasaan ng Marilao",
    period: "School Related",
  },
  {
    id: 3,
    title: "Web Development",
    company: "Pambayang Dalubhasaan ng Marilao",
    period: "School Related",
  },
]);

const visibleExperience = computed(() => {
  return showAll.value ? experiences.value : experiences.value.slice(0, 3);
});

// Toggle logic
const toggleShowAll = () => {
  showAll.value = !showAll.value;
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
