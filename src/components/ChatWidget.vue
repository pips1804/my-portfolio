<template>
  <div class="fixed bottom-4 right-3 z-50 sm:left-auto sm:right-4 sm:bottom-4">
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
        class="bg-card text-card-foreground border border-border rounded-xl shadow-xl w-full max-w-md h-[28rem] mx-auto sm:mx-0 mb-4 flex flex-col"
      >
        <!-- Chat Header -->
        <div class="p-4 border-b border-border">
          <div class="flex items-start justify-between">
            <!-- Profile Info -->
            <div class="flex items-start gap-3">
              <img
                src="../img/profile.jpg"
                alt="Jhon Paul"
                class="w-10 h-10 rounded-full object-cover"
              />
              <div class="flex flex-col justify-center">
                <span class="text-sm font-semibold leading-tight"
                  >Jhon Paul</span
                >

                <!-- Online Status + Attribution -->
                <div class="flex items-center gap-2 mt-1">
                  <div
                    class="flex items-center gap-1 text-xs text-green-500 leading-none"
                  >
                    <div class="w-2 h-2 rounded-full bg-green-500"></div>
                    <span>Online</span>
                  </div>

                  <span
                    class="text-xs text-muted-foreground opacity-80 leading-none"
                  >
                    Powered by Google Gemini
                  </span>
                </div>
              </div>
            </div>

            <!-- Right Side Buttons -->
            <div class="flex items-center gap-2">
              <!-- Change Language -->
              <button
                @click="insertLanguageSelector"
                class="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                title="Change Language"
              >
                <Globe class="w-4 h-4" />
                <span>Change</span>
              </button>

              <!-- Close Chat -->
              <button
                @click="toggleChat"
                class="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close chat"
              >
                <X class="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <!-- Messages -->
        <div
          ref="messagesContainer"
          class="flex-1 p-4 overflow-y-auto space-y-3"
        >
          <div
            v-for="message in chatMessages"
            :key="message.id"
            class="flex flex-col gap-1.5"
            :class="message.isUser ? 'items-end' : 'items-start'"
          >
            <!-- Show profile name and image above bot messages -->
            <template v-if="!message.isUser && !message.isLanguageSelector">
              <div class="flex items-center gap-2 mb-1">
                <img
                  src="../img/profile.jpg"
                  alt="Jhon Paul"
                  class="w-6 h-6 rounded-full object-cover"
                />
                <span class="text-xs font-medium text-muted-foreground">
                  Jhon Paul
                </span>
              </div>
            </template>

            <!-- Message bubble -->
            <div
              class="max-w-xs px-3 py-2 rounded-lg bubble"
              :class="[
                message.isUser
                  ? 'user bg-bubble-user text-primary-foreground'
                  : 'bot bg-bubble-bot text-secondary-foreground',
              ]"
            >
              <!-- Check if this is a language selector message -->
              <template v-if="message.isLanguageSelector">
                <p
                  class="text-sm whitespace-pre-wrap"
                  v-html="renderMarkdown(message.text)"
                ></p>
                <div class="flex gap-2 mt-2">
                  <button
                    class="bg-blue-500 text-white px-3 py-1 text-sm rounded-lg shadow hover:bg-blue-600 transition duration-200"
                    @click="handleLanguageSelection('eng')"
                  >
                    English
                  </button>
                  <button
                    class="bg-green-500 text-white px-3 py-1 text-sm rounded-lg shadow hover:bg-green-600 transition duration-200"
                    @click="handleLanguageSelection('fil')"
                  >
                    Filipino
                  </button>
                </div>
              </template>

              <!-- Normal message text -->
              <template v-else>
                <p
                  class="text-sm whitespace-pre-wrap"
                  v-html="renderMarkdown(message.text)"
                ></p>
              </template>

              <!-- Timestamp -->
              <p
                class="text-[11px] mt-1 opacity-60"
                :class="message.isUser ? 'text-right' : 'text-left'"
              >
                {{ formatTime(message.timestamp) }}
              </p>
            </div>
          </div>

          <!-- Typing indicator -->
          <div v-if="isTyping" class="flex justify-start pt-2">
            <div
              class="bg-secondary text-secondary-foreground px-3 py-2 rounded-lg"
            >
              <div class="flex space-x-1">
                <div
                  class="w-2 h-2 bg-current rounded-full animate-bounce"
                ></div>
                <div
                  class="w-2 h-2 bg-current rounded-full animate-bounce delay-[100ms]"
                ></div>
                <div
                  class="w-2 h-2 bg-current rounded-full animate-bounce delay-[200ms]"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Input -->
        <div class="p-4 border-t border-border">
          <div class="flex gap-2">
            <input
              ref="inputRef"
              v-model="newMessage"
              @keydown.enter.prevent="sendMessage"
              placeholder="Type a message..."
              class="flex-1 px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Type a message"
              :disabled="!selectedLanguage"
            />
            <button
              @click="sendMessage"
              class="px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              aria-label="Send Message"
            >
              <Send class="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </transition>

    <!-- Toggle Button -->
    <button
      @click="toggleChat"
      class="bg-primary text-primary-foreground py-3 px-4 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 flex items-center gap-1 overflow-hidden"
      :style="{ width: isChatOpen ? '52px' : '192px' }"
      aria-label="Toggle Chat"
    >
      <MessageCircle class="h-5 w-5 shrink-0" />
      <span
        class="text-sm font-medium whitespace-nowrap transition-opacity duration-300"
        :class="isChatOpen ? 'opacity-0' : 'opacity-100'"
      >
        Chat with Jhon Paul
      </span>
    </button>
  </div>
</template>

<script setup>
import { ref, watch, nextTick } from "vue";
import { MessageCircle, Send, X } from "lucide-vue-next";
import { chatResponses } from "../utils/chatResponses";
import { marked } from "marked";

const isChatOpen = ref(false);
const newMessage = ref("");
const isTyping = ref(false);
const inputRef = ref(null);
const messagesContainer = ref(null);
const selectedLanguage = ref(null); // 'en', 'fil', etc.
const showLanguagePrompt = ref(true);

const chatMessages = ref([
  {
    id: Date.now(),
    text: "Please select your preferred language:",
    isUser: false,
    timestamp: new Date(),
    isLanguageSelector: true, // special flag to show buttons
  },
]);

const toggleChat = () => {
  isChatOpen.value = !isChatOpen.value;
};

watch(isChatOpen, (open) => {
  if (open) {
    nextTick(() => {
      scrollToBottom();
      inputRef.value?.focus();
    });
  }
});

const formatTime = (timestamp) =>
  timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

const scrollToBottom = () => {
  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
    }
  });
};

const sendMessage = async () => {
  if (!newMessage.value.trim()) return;

  const message = newMessage.value.trim();

  // 🆕 Handle /change-language command
  if (message === "/change-language") {
    insertLanguageSelector();
    newMessage.value = "";
    return;
  }

  // Normal user message
  chatMessages.value.push({
    id: Date.now(),
    text: message,
    isUser: true,
    timestamp: new Date(),
  });

  newMessage.value = "";
  scrollToBottom();
  isTyping.value = true;

  setTimeout(async () => {
    const response = await chatResponses.getResponse(
      message,
      selectedLanguage.value
    );
    chatMessages.value.push({
      id: Date.now(),
      text: response,
      isUser: false,
      timestamp: new Date(),
    });
    isTyping.value = false;
    scrollToBottom();
  }, 800 + Math.random() * 500);
};

const handleLanguageSelection = (lang) => {
  selectedLanguage.value = lang;

  // Remove language selector message
  chatMessages.value = chatMessages.value.filter(
    (msg) => !msg.isLanguageSelector
  );

  // Add greeting in chosen language
  chatMessages.value.push({
    id: Date.now(),
    text:
      lang === "fil"
        ? "Hi! Ako si Jhon Paul. Huwag kang mahiyang magtanong tungkol sa aking skills, karanasan, o mga proyekto!"
        : "Hi! I'm Jhon Paul. Feel free to ask me anything about my skills, experience, or projects!",
    isUser: false,
    timestamp: new Date(),
  });
};

const insertLanguageSelector = () => {
  chatMessages.value.push({
    id: Date.now(),
    text: "You can change the language. Please choose:",
    isUser: false,
    timestamp: new Date(),
    isLanguageSelector: true,
  });

  scrollToBottom();
};

const renderMarkdown = (text) => {
  return marked.parseInline(text || "").replace(/\n/g, "<br>");
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

.bubble {
  position: relative;
}

/* Tail triangle base */
.bubble::before {
  content: "";
  position: absolute;
  top: 0.7rem;
  width: 0;
  height: 0;
}

.bubble.user::before {
  right: -6px;
  border-left: 6px solid hsl(var(--bubble-user));
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
}

.bubble.bot::before {
  left: -6px;
  border-right: 6px solid hsl(var(--bubble-bot));
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
}
</style>
