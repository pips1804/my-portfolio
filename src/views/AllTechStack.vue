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
        <FolderOpen class="h-6 w-6" />
        All Tech Stack
      </h1>

      <div
        class="space-y-6 bg-card text-card-foreground p-6 rounded-lg border border-border hover:shadow-lg dark:hover:bg-muted/70 dark:hover:border-muted transition-all opacity-0 animate-fade-up mb-4"
        style="animation-delay: 100ms"
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
      </div>

      <div
        class="space-y-6 bg-card text-card-foreground p-6 rounded-lg border border-border hover:shadow-lg dark:hover:bg-muted/70 dark:hover:border-muted transition-all opacity-0 animate-fade-up mb-4"
        style="animation-delay: 200ms"
      >
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

      <div
        class="space-y-6 bg-card text-card-foreground p-6 rounded-lg border border-border hover:shadow-lg dark:hover:bg-muted/70 dark:hover:border-muted transition-all opacity-0 animate-fade-up mb-4"
        style="animation-delay: 300ms"
      >
        <div>
          <h3 class="text-lg font-semibold mb-3">Artificial Intelligence</h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in aiTech"
              :key="tech"
              class="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm hover:bg-secondary/80 transition-colors"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>

      <div
        class="space-y-6 bg-card text-card-foreground p-6 rounded-lg border border-border hover:shadow-lg dark:hover:bg-muted/70 dark:hover:border-muted transition-all opacity-0 animate-fade-up mb-4"
        style="animation-delay: 400ms"
      >
        <div>
          <h3 class="text-lg font-semibold mb-3">Dev Tools</h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tool in devTools"
              :key="tool"
              class="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm hover:bg-secondary/80 transition-colors"
            >
              {{ tool }}
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Code } from "lucide-vue-next";
import { useRouter } from "vue-router";

const router = useRouter();

const frontendTech = ref([
  "HTML",
  "CSS",
  "Bootstrap",
  "Tailwind CSS",
  "JavaScript",
  "Vue.js",
]);

const backendTech = ref(["Python", "C#", "PHP", "MySQL", "SQLite", "Firebase"]);

const aiTech = ref(["OpenAI", "Gemini", "Copilot"]);

const devTools = ref(["Git", "Github", "VS Code", "Visual Studio", "PyCharm"]);
</script>
