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
        All Projects
      </h1>

      <div class="grid md:grid-cols-2 gap-6">
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          class="bg-card text-card-foreground p-6 rounded-lg border border-border hover:shadow-lg dark:hover:bg-muted/70 dark:hover:border-muted transition-all opacity-0 animate-fade-up"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <h3 class="text-lg font-semibold mb-2">{{ project.title }}</h3>
          <p class="text-muted-foreground text-sm mb-3">
            {{ project.description }}
          </p>
          <div class="flex flex-wrap gap-2 mb-3">
            <span
              v-for="tech in project.technologies"
              :key="tech"
              class="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
            >
              {{ tech }}
            </span>
          </div>
          <div class="flex gap-2">
            <button
              @click="handleLinkClick(project.demoUrl)"
              class="flex items-center gap-1 text-primary hover:underline text-sm"
            >
              <ExternalLink class="h-3 w-3" />
              Live Demo
            </button>
            <button
              @click="handleLinkClick(project.codeUrl)"
              class="flex items-center gap-1 text-primary hover:underline text-sm"
            >
              <Github class="h-3 w-3" />
              Code
            </button>
          </div>
        </div>
      </div>
    </section>

    <teleport to="body">
      <!-- Modal -->
      <Transition name="fade-modal" appear>
        <div
          v-if="showModal"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div
            class="bg-card text-card-foreground p-6 rounded-lg shadow-lg w-80 text-center transform transition-all duration-300 scale-95 hover:scale-100"
          >
            <h3 class="text-lg font-semibold mb-2">Not Available</h3>
            <p class="text-sm text-muted-foreground mb-4">
              This project does not have a live demo or code link attached.
            </p>
            <button
              @click="showModal = false"
              class="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition"
            >
              Close
            </button>
          </div>
        </div>
      </Transition>
    </teleport>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { FolderOpen, ExternalLink, Github } from "lucide-vue-next";
import { useRouter } from "vue-router";

const router = useRouter();

// Same data or fetch it externally
const projects = ref([
  {
    id: 1,
    title: "Amazon Clone",
    description:
      "A fully working Amazon clone website built using HTML, CSS, and JavaScript.",
    technologies: ["Javascript", "HTML", "CSS"],
    demoUrl: "https://perso-proj-amazon-clone.netlify.app/",
    codeUrl: "https://github.com/pips1804/javascript-amazon-project-main",
  },
  {
    id: 2,
    title: "Latenue.ave",
    description:
      "A catalog site for online clothing shop Latenue.ave, built with Vue.js and Tailwind CSS.",
    technologies: ["Vue.JS", "Tailwind CSS"],
    demoUrl: "https://latenueave.netlify.app/",
    codeUrl: "https://github.com/pips1804/LatenueaveProductShowcase",
  },
  {
    id: 3,
    title: "BINI Inspired",
    description:
      "A BINI-inspired clone website built using HTML, CSS, and JavaScript.",
    technologies: ["HTML", "CSS", "Javascript"],
    demoUrl: "https://perso-proj-bini-site-clone.netlify.app/",
    codeUrl: "#",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "Responsive portfolio with dark mode, animations, and chat functionality.",
    technologies: ["Vue.js", "Tailwind CSS"],
    demoUrl: "https://jhonpaulgm.netlify.app/",
    codeUrl: "https://github.com/pips1804/my-portfolio",
  },
  {
    id: 5,
    title: "ThinkSci",
    description:
      "Our capstone project is an e-learning application for Android, built using Unity.",
    technologies: ["Unity", "C#"],
    demoUrl: "#",
    codeUrl: "https://github.com/pips1804/eLearnMo",
  },
  {
    id: 6,
    title: "s2diopeepz",
    description:
      "A simple photo booth web app using HTML, CSS, and JavaScript with snapshot and filter features.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://s2diopeepz.netlify.app/",
    codeUrl: "#",
  },
  {
    id: 7,
    title: "AI Chat Bot",
    description:
      "AI chatbot built with Vue.js and Bootstrap, integrated with the Gemini API for real-time conversational responses.",
    technologies: ["Vue.js", "Bootstrap", "Gemini API"],
    demoUrl: "#",
    codeUrl: "#",
  },
]);

const showModal = ref(false);

function handleLinkClick(url) {
  if (!url || url === "#") {
    showModal.value = true;
  } else {
    window.open(url, "_blank");
  }
}
</script>

<style scoped>
.fade-modal-enter-active,
.fade-modal-leave-active {
  transition: opacity 0.3s ease;
}
.fade-modal-enter-from,
.fade-modal-leave-to {
  opacity: 0;
}
</style>
