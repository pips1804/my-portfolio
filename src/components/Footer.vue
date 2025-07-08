<template>
  <footer class="border-t border-border mt-16">
    <div class="container mx-auto px-4 py-8">
      <div class="text-center">
        <p class="text-muted-foreground text-sm">
          © {{ currentYear }} Jhon Paul. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from "vue";

const currentYear = computed(() => new Date().getFullYear());
</script>
