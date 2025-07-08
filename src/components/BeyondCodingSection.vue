<template>
  <section class="mb-12">
    <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
      <Heart class="h-6 w-6" />
      Beyond Coding
    </h2>
    <div
      class="bg-card text-card-foreground p-6 rounded-lg border border-border hover:shadow-lg transition-shadow"
    >
      <p class="mb-4">
        When I'm not writing code, I enjoy staying at home, playing video games,
        watching K-dramas or movies, and listening to podcast music. These
        hobbies help me relax, recharge, and stay inspired while balancing my
        passion for technology.
      </p>
      <div class="grid md:grid-cols-2 gap-4">
        <div class="flex items-center gap-3">
          <Gamepad class="h-5 w-5 text-primary" />
          <span>Gamer</span>
        </div>
        <div class="flex items-center gap-3">
          <HomeIcon class="h-5 w-5 text-primary" />
          <span>Homebody</span>
        </div>
        <div class="flex items-center gap-3">
          <Users class="h-5 w-5 text-primary" />
          <span>Watching</span>
        </div>
        <div class="flex items-center gap-3">
          <Headphones class="h-5 w-5 text-primary" />
          <span>Listening</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  Heart,
  Camera,
  Plane,
  Users,
  Mic,
  Gamepad,
  HomeIcon,
  Headphones,
} from "lucide-vue-next";
</script>
