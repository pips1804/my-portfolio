<template>
  <section class="mb-12">
    <div
      class="flex justify-between items-center mb-4 flex-wrap sm:flex-nowrap gap-2"
    >
      <h2 class="text-2xl font-bold flex items-center gap-2">
        <Briefcase class="h-6 w-6" />
        Experience
      </h2>
      <button
        v-if="experiences.length > 3"
        @click="showAll = !showAll"
        class="text-primary hover:underline text-sm"
      >
        {{ showAll ? "Show Less" : "View All" }}
      </button>
    </div>

    <div class="space-y-4">
      <TransitionGroup name="fade" tag="div" class="space-y-4">
        <div
          v-for="job in visibleExperience"
          :key="job.id"
          class="bg-card text-card-foreground p-6 rounded-lg border border-border hover:shadow-md transition-shadow"
        >
          <div class="flex justify-between items-start mb-2">
            <h3 class="text-lg font-semibold">{{ job.title }}</h3>
            <span class="text-sm text-muted-foreground">{{ job.period }}</span>
          </div>
          <p class="text-muted-foreground mb-2">{{ job.company }}</p>
          <p class="text-sm">{{ job.description }}</p>
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
    description:
      "Created a mobile application using Flutter that connects to a web-based POS system through a Flask API. The app enables real-time data access and transaction management between the mobile frontend and the backend system.",
  },
  {
    id: 2,
    title: "Game Development",
    company: "Pambayang Dalubhasaan ng Marilao",
    period: "School Related",
    description:
      "Created a zombie shooting game with augmented reality features using Unity and Vuforia. The game allows players to interact with 3D zombie models in real-world environments, blending digital gameplay with physical surroundings.",
  },
  {
    id: 3,
    title: "Web Development",
    company: "Pambayang Dalubhasaan ng Marilao",
    period: "School Related",
    description:
      "Created a personal website using HTML, CSS, JavaScript, and PHP for backend development. The project included a sales and inventory management system tailored for a clothing shop, allowing real-time product tracking, transaction processing, and stock updates.",
  },
  {
    id: 4,
    title: "UI/UX Design",
    company: "Pambayang Dalubhasaan ng Marilao",
    period: "School Related",
    description:
      "Designed a modern UI for a task management tool using Figma or Canva, focusing on accessibility, mobile responsiveness, and component reusability.",
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
