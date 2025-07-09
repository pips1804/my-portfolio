<template>
  <section class="mb-12">
    <div class="flex flex-row gap-4 items-center flex-wrap">
      <!-- Profile Image -->
      <div class="flex-shrink-0">
        <img
          src="../img/profile.jpg"
          alt="Jhon Paul Profile"
          class="w-24 h-24 sm:w-28 sm:h-28 md:w-48 md:h-48 rounded-lg object-cover shadow-lg"
        />
      </div>

      <!-- Info -->
      <div class="flex-1 min-w-[200px] max-w-[calc(100%-7rem)]">
        <!-- Name + Toggle -->
        <div class="flex items-center justify-between gap-3 mb-2">
          <div class="flex items-center gap-2 min-w-0">
            <h1
              class="text-lg sm:text-xl md:text-3xl font-bold font-mono truncate"
            >
              Jhon Paul Manlapaz
            </h1>
            <CheckBadgeIcon class="h-4 w-4 md:h-5 md:w-5 text-blue-500" />
          </div>

          <!-- Dark Mode Toggle -->
          <label
            class="relative inline-flex items-center cursor-pointer scale-90 md:scale-100"
          >
            <input
              type="checkbox"
              class="sr-only peer"
              :checked="isDark"
              @change="$emit('toggle-theme')"
            />
            <!-- Track -->
            <div
              class="w-10 h-5 md:w-12 md:h-6 rounded-full transition-colors peer-checked:bg-gray-200 bg-gray-400 dark:bg-gray-700"
            ></div>
            <!-- Thumb -->
            <div
              class="absolute left-0.5 top-0.5 w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center transition-transform duration-300 peer-checked:translate-x-5 md:peer-checked:translate-x-6"
              :class="
                isDark ? 'bg-muted text-violet-500' : 'bg-white text-yellow-400'
              "
            >
              <component
                :is="isDark ? Moon : Sun"
                class="w-3 h-3 md:w-4 md:h-4"
              />
            </div>
          </label>
        </div>

        <!-- Location -->
        <div class="flex items-center gap-2 mb-1">
          <MapPin class="h-4 w-4" />
          <span class="text-xs md:text-base">Bulacan, Philippines</span>
        </div>

        <!-- Role -->
        <p class="text-xs md:text-base mb-4">Information Technology Student</p>

        <!-- Email Button -->
        <div class="flex gap-3">
          <button
            @click="showEmailModal = true"
            class="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
          >
            <Mail class="h-4 w-4" />
            Send Email
          </button>
        </div>
      </div>
    </div>
  </section>

  <teleport to="body">
    <Transition name="fade">
      <div
        v-if="showEmailModal"
        class="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50 p-4"
      >
        <div
          class="bg-white dark:bg-card rounded-xl shadow-2xl w-full max-w-lg p-4 sm:p-6 relative border border-border"
        >
          <!-- Close Button -->
          <button
            @click="showEmailModal = false"
            class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <X class="w-5 h-5" />
          </button>

          <!-- Modal Title -->
          <h2 class="text-xl font-semibold text-card-foreground mb-4">
            Compose Email
          </h2>

          <!-- Email Form -->
          <form @submit.prevent="sendEmail" class="space-y-4">
            <div>
              <label class="text-sm font-medium text-muted-foreground"
                >To</label
              >
              <input
                type="email"
                disabled
                value="jhonpaulmanlapaz1804@gmail.com"
                class="w-full mt-1 px-3 py-2 rounded-lg border border-border bg-muted text-muted-foreground cursor-not-allowed"
              />
            </div>
            <div>
              <label class="text-sm font-medium text-muted-foreground"
                >Subject</label
              >
              <input
                v-model="emailForm.subject"
                type="text"
                placeholder="Enter subject"
                class="w-full mt-1 px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label class="text-sm font-medium text-muted-foreground"
                >Message</label
              >
              <textarea
                v-model="emailForm.body"
                rows="6"
                placeholder="Write your message here..."
                class="w-full mt-1 px-3 py-2 rounded-lg border border-border bg-background text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>
            <div class="flex justify-end">
              <button
                type="submit"
                class="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </Transition>
  </teleport>
</template>

<script setup>
import { ref } from "vue";
import {
  CheckCircle,
  MapPin,
  Calendar,
  Mail,
  X,
  CheckCheckIcon,
  Verified,
  BadgeCheck,
  ShieldCheck,
  Sun,
  Moon,
  WorkflowIcon,
  Briefcase,
  StickyNoteIcon,
} from "lucide-vue-next";

import { CheckBadgeIcon } from "@heroicons/vue/20/solid";

const showEmailModal = ref(false);

defineProps({
  isDark: Boolean,
});

defineEmits(["toggle-theme"]);

const emailForm = ref({
  subject: "",
  body: "",
});

const sendEmail = () => {
  const subject = encodeURIComponent(emailForm.value.subject);
  const body = encodeURIComponent(emailForm.value.body);

  // Open Gmail compose window in a new tab
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=jhonpaulmanlapaz1804@gmail.com&su=${subject}&body=${body}`;
  window.open(gmailUrl, "_blank");

  // Reset form and close modal
  emailForm.value.subject = "";
  emailForm.value.body = "";
  showEmailModal.value = false;
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
