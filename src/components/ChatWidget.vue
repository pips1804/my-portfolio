<template>
  <div class="fixed bottom-6 right-6 z-50 sm:bottom-4 sm:right-4">
    <transition
      enter-active-class="transition transform duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition transform duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-4"
    >
      <div
        v-if="isChatOpen"
        class="bg-card text-card-foreground border border-border rounded-lg shadow-xl w-80 h-96 mb-4 flex flex-col"
      >
        <!-- Chat Header -->
        <div
          class="p-4 border-b border-border flex justify-between items-center"
        >
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 bg-green-500 rounded-full"></div>
            <h3 class="font-semibold">Chat with Poy</h3>
          </div>
          <button
            @click="toggleChat"
            class="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X class="h-4 w-4" />
          </button>
        </div>

        <!-- Chat Messages -->
        <div
          ref="messagesContainer"
          class="flex-1 p-4 overflow-y-auto space-y-3"
        >
          <div
            v-for="message in chatMessages"
            :key="message.id"
            class="flex"
            :class="message.isUser ? 'justify-end' : 'justify-start'"
          >
            <div
              class="max-w-xs px-3 py-2 rounded-lg"
              :class="
                message.isUser
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground'
              "
            >
              <p class="text-sm">{{ message.text }}</p>
              <span class="text-xs opacity-70">{{
                formatTime(message.timestamp)
              }}</span>
            </div>
          </div>
          <div v-if="isTyping" class="flex justify-start">
            <div
              class="bg-secondary text-secondary-foreground px-3 py-2 rounded-lg"
            >
              <div class="flex space-x-1">
                <div
                  class="w-2 h-2 bg-current rounded-full animate-bounce"
                ></div>
                <div
                  class="w-2 h-2 bg-current rounded-full animate-bounce"
                  style="animation-delay: 0.1s"
                ></div>
                <div
                  class="w-2 h-2 bg-current rounded-full animate-bounce"
                  style="animation-delay: 0.2s"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Chat Input -->
        <div class="p-4 border-t border-border">
          <div class="flex gap-2">
            <input
              v-model="newMessage"
              @keyup.enter="sendMessage"
              placeholder="Type a message..."
              class="flex-1 px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              @click="sendMessage"
              class="px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Send class="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </transition>

    <!-- Chat Toggle Button -->
    <button
      @click="toggleChat"
      class="bg-primary text-primary-foreground py-3 px-4 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 flex items-center gap-2 overflow-hidden"
      :style="{ width: isChatOpen ? '52px' : '150px' }"
    >
      <MessageCircle class="h-5 w-5 shrink-0" />

      <!-- Use v-show instead of v-if to avoid snapping -->
      <span
        :class="[
          'text-sm font-medium whitespace-nowrap transition-opacity duration-300',
          isChatOpen ? 'opacity-0' : 'opacity-100',
        ]"
        v-show="true"
      >
        Chat with Poy
      </span>
    </button>
  </div>
</template>

<script setup>
import { ref, nextTick } from "vue";
import { MessageCircle, Send, X } from "lucide-vue-next";
import { chatResponses } from "../utils/chatResponses";

const isChatOpen = ref(false);
const chatMessages = ref([
  {
    id: 1,
    text: "Hi! I'm Jhon Paul's AI assistant. Feel free to ask me anything about Jhon Paul's experience, skills, or projects!",
    isUser: false,
    timestamp: new Date(),
  },
]);
const newMessage = ref("");
const isTyping = ref(false);
const messagesContainer = ref(null);

const toggleChat = () => {
  isChatOpen.value = !isChatOpen.value;
};

const formatTime = (timestamp) => {
  return timestamp.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const scrollToBottom = () => {
  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
    }
  });
};

const sendMessage = async () => {
  if (!newMessage.value.trim()) return;

  // Add user message
  chatMessages.value.push({
    id: Date.now(),
    text: newMessage.value,
    isUser: true,
    timestamp: new Date(),
  });

  const userMessage = newMessage.value.toLowerCase();
  newMessage.value = "";
  scrollToBottom();

  // Show typing indicator
  isTyping.value = true;

  // Simulate AI response delay
  setTimeout(() => {
    isTyping.value = false;

    const response = chatResponses.getResponse(userMessage);

    chatMessages.value.push({
      id: Date.now(),
      text: response,
      isUser: false,
      timestamp: new Date(),
    });

    scrollToBottom();
  }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
};
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(8px);
}
.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
