<template>
  <section class="mb-12">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-2xl font-bold flex items-center gap-2">
        <FolderOpen class="h-6 w-6" />
        Recent Projects
      </h2>
      <router-link to="/projects" class="text-primary hover:underline text-sm">
        View All
      </router-link>
    </div>

    <div>
      <TransitionGroup name="fade" tag="div" class="grid md:grid-cols-1 gap-4">
        <div
          v-for="project in visibleProjects"
          :key="project.id"
          class="bg-card text-card-foreground p-4 rounded-lg border border-border hover:shadow-lg dark:hover:bg-muted/70 dark:hover:border-muted transition-all"
        >
          <h3 class="text-md font-semibold mb-2">{{ project.title }}</h3>
          <div class="flex flex-wrap gap-2 mb-2">
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
      </TransitionGroup>
    </div>
  </section>

  <!-- Modal -->
  <teleport to="body">
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
</template>

<script setup>
import { ref, computed } from "vue";
import { FolderOpen, ExternalLink, Github } from "lucide-vue-next";

// Toggle flag
const showAll = ref(false);

// Sample data
const projects = ref([
  {
    id: 1,
    title: "Amazon Clone",
    technologies: ["Javascript", "HTML", "CSS"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 2,
    title: "BINI Inspired",
    description:
      "A BINI-inspired clone website built using HTML, CSS, and JavaScript.",
    technologies: ["HTML", "CSS", "Javascript"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 3,
    title: "AI Chat Bot",
    technologies: ["Vue.js", "Bootstrap", "Gemini API"],
    demoUrl: "#",
    codeUrl: "#",
  },
]);

// Only show first 4 unless showAll is true
const visibleProjects = computed(() => {
  return showAll.value ? projects.value : projects.value.slice(0, 4);
});

// Toggle logic
const toggleShowAll = () => {
  showAll.value = !showAll.value;
};

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
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.fade-modal-enter-active,
.fade-modal-leave-active {
  transition: opacity 0.3s ease;
}
.fade-modal-enter-from,
.fade-modal-leave-to {
  opacity: 0;
}
</style>
