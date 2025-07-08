<template>
  <section class="mb-12">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-2xl font-bold flex items-center gap-2">
        <Code class="h-6 w-6" />
        Tech Stack
      </h2>
    </div>

    <div
      class="space-y-6 bg-card text-card-foreground p-6 rounded-lg border border-border hover:shadow-md transition-shadow"
    >
      <div>
        <h3 class="text-lg font-semibold mb-3">Frontend</h3>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in frontendTech"
            :key="tech"
            class="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm hover:bg-secondary/80 transition-colors"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-3">Backend</h3>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in backendTech"
            :key="tech"
            class="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm hover:bg-secondary/80 transition-colors"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { Code } from "lucide-vue-next";

const frontendTech = ref([
  "HTML",
  "CSS",
  "Bootstrap",
  "Tailwind CSS",
  "JavaScript",
  "Vue.js",
]);

const backendTech = ref(["Python", "C#", "PHP"]);
</script>
