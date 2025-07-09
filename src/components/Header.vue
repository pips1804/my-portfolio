<template>
  <header
    class="border-b border-border sticky top-0 bg-background/80 backdrop-blur-sm z-40"
  >
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold font-heading">Jhon Paul</h1>

      <!-- Custom Theme Toggle Switch -->
      <label class="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          class="sr-only peer"
          :checked="isDark"
          @change="$emit('toggle-theme')"
        />
        <div
          class="w-14 h-8 bg-secondary rounded-full peer dark:bg-gray-700 peer-checked:bg-gray-200 transition-colors"
        ></div>
        <div
          class="absolute left-0.5 top-0.5 w-7 h-7 rounded-full bg-muted text-muted-foreground flex items-center justify-center transition-transform duration-300 peer-checked:translate-x-6"
        >
          <component :is="isDark ? Moon : Sun" class="w-4 h-4" />
        </div>
      </label>
    </div>
  </header>
</template>

<script setup>
import { Sun, Moon } from "lucide-vue-next";

defineProps({
  isDark: Boolean,
});

defineEmits(["toggle-theme"]);
</script>
