<template>
  <section class="mb-12">
    <div class="flex flex-col md:flex-row gap-8 items-start">
      <div class="flex-shrink-0">
        <img
          src="../img/profile.jpg"
          alt="Jhon Paul Profile"
          class="w-48 h-48 rounded-lg object-cover shadow-lg"
        />
      </div>
      <div class="flex-1">
        <div class="flex items-center gap-2 mb-2">
          <h1 class="text-3xl font-bold">Jhon Paul Manlapaz</h1>
          <CheckCircle class="h-6 w-6 text-blue-500" />
        </div>
        <div class="flex items-center gap-2 text-muted-foreground mb-2">
          <MapPin class="h-4 w-4" />
          <span>Bulacan, Philippines</span>
        </div>
        <p class="text-lg text-muted-foreground mb-4">
          Information Technology Student
        </p>
        <div class="flex gap-3">
          <button
            @click="showEmailModal = true"
            class="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
          >
            <Mail class="h-4 w-4" />
            Send Email
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Email Compose Modal -->
  <Transition name="fade">
    <div
      v-if="showEmailModal"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div
        class="bg-white dark:bg-card rounded-xl shadow-2xl w-full max-w-lg p-6 relative border border-border"
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
            <label class="text-sm font-medium text-muted-foreground">To</label>
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
</template>

<script setup>
import { ref } from "vue";
import { CheckCircle, MapPin, Calendar, Mail, X } from "lucide-vue-next";

const showEmailModal = ref(false);

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
