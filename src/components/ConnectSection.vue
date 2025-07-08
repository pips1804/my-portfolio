<template>
  <section class="mb-12">
    <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
      <Users class="h-6 w-6" />
      Connect
    </h2>
    <div
      class="bg-card text-card-foreground p-6 rounded-lg border border-border hover:shadow-lg transition-shadow"
    >
      <p class="mb-4">
        Let's connect and discuss opportunities, collaborations, or just chat
        about technology!
      </p>
      <div class="flex flex-wrap gap-4">
        <a
          href="https://www.facebook.com/jhonpaulgm"
          target="_blank"
          class="flex items-center gap-2 text-primary hover:underline transition-colors"
        >
          <Facebook class="h-4 w-4" />
          Facebook
        </a>
        <a
          href="https://www.instagram.com/_yowpeeps/"
          target="_blank"
          class="flex items-center gap-2 text-primary hover:underline transition-colors"
        >
          <Instagram class="h-4 w-4" />
          Instagram
        </a>
        <a
          href="https://github.com/pips1804"
          target="_blank"
          class="flex items-center gap-2 text-primary hover:underline transition-colors"
        >
          <Github class="h-4 w-4" />
          GitHub
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  Users,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Facebook,
  Instagram,
} from "lucide-vue-next";
</script>
