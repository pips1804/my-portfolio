<template>
  <div class="min-h-screen transition-colors duration-300">
    <div class="bg-background text-foreground min-h-screen">
      <!-- Main Content -->
      <main class="container mx-auto px-4 py-8 max-w-4xl">
        <!-- Profile Section -->
        <div class="opacity-0 animate-fade-up" style="animation-delay: 0ms">
          <ProfileSection @toggle-theme="toggleTheme" :is-dark="isDark" />
        </div>

        <!-- About Section -->
        <div class="opacity-0 animate-fade-up" style="animation-delay: 200ms">
          <AboutSection />
        </div>

        <!-- Experience + Projects -->
        <div class="grid md:grid-cols-2 gap-6">
          <div class="opacity-0 animate-fade-up" style="animation-delay: 400ms">
            <ExperienceSection />
          </div>
          <div class="opacity-0 animate-fade-up" style="animation-delay: 600ms">
            <ProjectsSection />
          </div>
        </div>

        <!-- Tech Stack -->
        <div class="opacity-0 animate-fade-up" style="animation-delay: 800ms">
          <TechStackSection />
        </div>

        <!-- Beyond Coding + Connect -->
        <div class="grid md:grid-cols-2 gap-6">
          <div
            class="opacity-0 animate-fade-up"
            style="animation-delay: 1000ms"
          >
            <BeyondCodingSection />
          </div>
          <div
            class="opacity-0 animate-fade-up"
            style="animation-delay: 1200ms"
          >
            <ConnectSection />
          </div>
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
import Header from "../components/Header.vue";
import ProfileSection from "../components/ProfileSection.vue";
import AboutSection from "../components/AboutSection.vue";
import ExperienceSection from "../components/ExperienceSection.vue";
import TechStackSection from "../components/TechStackSection.vue";
import BeyondCodingSection from "../components/BeyondCodingSection.vue";
import ProjectsSection from "../components/ProjectsSection.vue";
import ConnectSection from "../components/ConnectSection.vue";
import ChatWidget from "../components/ChatWidget.vue";
import Footer from "../components/Footer.vue";

// Theme management
const isDark = ref(false);

const toggleTheme = () => {
  isDark.value = !isDark.value;
  localStorage.setItem("theme", isDark.value ? "dark" : "light");

  // Apply to <html>
  document.documentElement.classList.toggle("dark", isDark.value);
};

onMounted(() => {
  const savedTheme = localStorage.getItem("theme");
  isDark.value =
    savedTheme === "dark" ||
    (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);

  // Apply on first load
  document.documentElement.classList.toggle("dark", isDark.value);
});
</script>
