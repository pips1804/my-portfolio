<template>
  <section class="mb-12 animate-slide-up animate-fade-in">
    <h2
      class="text-2xl sm:text-2xl md:text-2xl font-bold mb-4 flex items-center gap-2"
    >
      <User class="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
      About
    </h2>

    <div
      class="bg-card text-card-foreground p-4 sm:p-6 rounded-lg border border-border hover:shadow-lg dark:hover:bg-muted/70 dark:hover:border-muted transition-all text-sm sm:text-base md:text-md leading-relaxed"
    >
      <p class="mb-4">
        I'm a 21-year-old IT student at Pambayang Dalubhasaan ng Marilao. I have
        a strong foundation in programming and web development, which sparked my
        interest in creating interactive and meaningful digital experiences.
      </p>
      <p class="mb-4">
        I'm especially drawn to front-end development and UI/UX design. I enjoy
        building user-friendly applications that balance function and
        aesthetics, and I’m always looking for ways to improve through hands-on
        projects and continuous learning.
      </p>
      <p>
        Lately, I’ve been exploring artificial intelligence—using generative
        tools and AI techniques to enhance my development process and create
        smarter, more adaptive solutions.
      </p>
    </div>
  </section>
</template>

<script setup>
import { User } from "lucide-vue-next";
</script>
