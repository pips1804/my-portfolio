<template>
  <div class="bg-background text-foreground min-h-screen">
    <section class="px-6 py-12 max-w-5xl mx-auto">
      <!-- Back Button -->
      <button
        @click="router.push('/')"
        class="mb-6 flex items-center gap-2 text-sm text-primary hover:underline"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Home
      </button>

      <h1 class="text-3xl font-bold mb-6 flex items-center gap-2">
        <Briefcase class="h-6 w-6" />
        All Experiences
      </h1>

      <div class="space-y-4">
        <div
          v-for="job in experiences"
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
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Briefcase } from "lucide-vue-next";
import { useRouter } from "vue-router";

const router = useRouter();

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
</script>
