<template>
  <div
    :class="{ dark: isDark }"
    class="min-h-screen transition-colors duration-300"
  >
    <div class="bg-background text-foreground min-h-screen">
      <!-- Header -->
      <Header @toggle-theme="toggleTheme" :is-dark="isDark" />

      <!-- Main Content -->
      <main class="container mx-auto px-4 py-8 max-w-4xl animate-fade-in">
        <!-- Profile Section -->
        <ProfileSection />

        <!-- About Section -->
        <AboutSection />

        <!-- Experience Section -->
        <ExperienceSection />

        <!-- Tech Stack Section -->
        <TechStackSection />

        <!-- Recent Projects Section -->
        <ProjectsSection />

        <div class="grid md:grid-cols-2 gap-6">
          <!-- Beyond Coding Section -->
          <BeyondCodingSection />

          <!-- Connect Section -->
          <ConnectSection />
        </div>
      </main>

      <!-- Chat Widget -->
      <ChatWidget />

      <!-- Footer -->
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Header from "./components/Header.vue";
import ProfileSection from "./components/ProfileSection.vue";
import AboutSection from "./components/AboutSection.vue";
import ExperienceSection from "./components/ExperienceSection.vue";
import TechStackSection from "./components/TechStackSection.vue";
import BeyondCodingSection from "./components/BeyondCodingSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import ConnectSection from "./components/ConnectSection.vue";
import ChatWidget from "./components/ChatWidget.vue";
import Footer from "./components/Footer.vue";

// Theme management
const isDark = ref(false);

const toggleTheme = () => {
  isDark.value = !isDark.value;
  localStorage.setItem("theme", isDark.value ? "dark" : "light");
};

onMounted(() => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    isDark.value = savedTheme === "dark";
  } else {
    isDark.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
});
</script>
