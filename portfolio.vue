<template>
  <div :class="{ 'dark': isDark }" class="min-h-screen transition-colors duration-300">
    <div class="bg-background text-foreground min-h-screen">
      <!-- Header -->
      <header class="border-b border-border">
        <div class="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 class="text-2xl font-bold">Portfolio</h1>
          <button
            @click="toggleTheme"
            class="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
          >
            <Sun v-if="isDark" class="h-5 w-5" />
            <Moon v-else class="h-5 w-5" />
          </button>
        </div>
      </header>

      <!-- Main Content -->
      <main class="container mx-auto px-4 py-8 max-w-4xl">
        <!-- Profile Section -->
        <section class="mb-12">
          <div class="flex flex-col md:flex-row gap-8 items-start">
            <div class="flex-shrink-0">
              <img
                src="/placeholder.svg?height=200&width=200"
                alt="Profile"
                class="w-48 h-48 rounded-lg object-cover"
              />
            </div>
            <div class="flex-1">
              <div class="flex items-center gap-2 mb-2">
                <h1 class="text-3xl font-bold">John Doe</h1>
                <CheckCircle class="h-6 w-6 text-blue-500" />
              </div>
              <div class="flex items-center gap-2 text-muted-foreground mb-2">
                <MapPin class="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
              <p class="text-lg text-muted-foreground mb-4">
                Senior Full-stack Developer and AI Enthusiast
              </p>
              <div class="flex gap-3">
                <button class="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                  <Calendar class="h-4 w-4" />
                  Schedule a Call
                </button>
                <button class="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors">
                  <Mail class="h-4 w-4" />
                  Send Email
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- About Section -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
            <User class="h-6 w-6" />
            About
          </h2>
          <div class="bg-card text-card-foreground p-6 rounded-lg border border-border">
            <p class="mb-4">
              I'm a full-stack software engineer specializing in developing solutions using modern technologies like 
              JavaScript, Python, and Vue.js. I work on projects including building modern web applications, 
              mobile apps, and AI-powered solutions.
            </p>
            <p class="mb-4">
              I've helped startups and companies grow and streamline their processes through innovative 
              software solutions. I've also built a community of over 50,000 developers through 
              knowledge sharing and mentorship.
            </p>
            <p>
              Lately, I've been diving deeper into the world of artificial intelligence, focusing on 
              integrating AI tools and techniques into modern applications. My work now includes 
              developing AI-powered solutions and leveraging generative AI to optimize development workflows.
            </p>
          </div>
        </section>

        <!-- Experience Section -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
            <Briefcase class="h-6 w-6" />
            Experience
          </h2>
          <div class="space-y-4">
            <div class="bg-card text-card-foreground p-6 rounded-lg border border-border">
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-lg font-semibold">Senior Software Engineer</h3>
                <span class="text-sm text-muted-foreground">2022 - Present</span>
              </div>
              <p class="text-muted-foreground mb-2">TechCorp Inc.</p>
              <p class="text-sm">Leading development of scalable web applications and mentoring junior developers.</p>
            </div>
            <div class="bg-card text-card-foreground p-6 rounded-lg border border-border">
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-lg font-semibold">Full-stack Developer</h3>
                <span class="text-sm text-muted-foreground">2020 - 2022</span>
              </div>
              <p class="text-muted-foreground mb-2">StartupXYZ</p>
              <p class="text-sm">Built and maintained multiple client projects using Vue.js, Node.js, and MongoDB.</p>
            </div>
          </div>
        </section>

        <!-- Tech Stack Section -->
        <section class="mb-12">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-2xl font-bold flex items-center gap-2">
              <Code class="h-6 w-6" />
              Tech Stack
            </h2>
            <button class="text-primary hover:underline text-sm">View All</button>
          </div>
          
          <div class="space-y-6">
            <div>
              <h3 class="text-lg font-semibold mb-3">Frontend</h3>
              <div class="flex flex-wrap gap-2">
                <span v-for="tech in frontendTech" :key="tech" class="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                  {{ tech }}
                </span>
              </div>
            </div>
            
            <div>
              <h3 class="text-lg font-semibold mb-3">Backend</h3>
              <div class="flex flex-wrap gap-2">
                <span v-for="tech in backendTech" :key="tech" class="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                  {{ tech }}
                </span>
              </div>
            </div>
            
            <div>
              <h3 class="text-lg font-semibold mb-3">DevOps & Cloud</h3>
              <div class="flex flex-wrap gap-2">
                <span v-for="tech in devopsTech" :key="tech" class="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </section>

        <!-- Beyond Coding Section -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
            <Heart class="h-6 w-6" />
            Beyond Coding
          </h2>
          <div class="bg-card text-card-foreground p-6 rounded-lg border border-border">
            <p>
              When not writing code, I focus on photography, traveling to new places, and contributing to 
              open-source projects. I also enjoy mentoring aspiring developers and speaking at tech conferences 
              about modern web development practices.
            </p>
          </div>
        </section>

        <!-- Recent Projects Section -->
        <section class="mb-12">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-2xl font-bold flex items-center gap-2">
              <FolderOpen class="h-6 w-6" />
              Recent Projects
            </h2>
            <button class="text-primary hover:underline text-sm">View All</button>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div v-for="project in projects" :key="project.id" class="bg-card text-card-foreground p-6 rounded-lg border border-border">
              <h3 class="text-lg font-semibold mb-2">{{ project.title }}</h3>
              <p class="text-muted-foreground text-sm mb-3">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2 mb-3">
                <span v-for="tech in project.technologies" :key="tech" class="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
                  {{ tech }}
                </span>
              </div>
              <div class="flex gap-2">
                <button class="flex items-center gap-1 text-primary hover:underline text-sm">
                  <ExternalLink class="h-3 w-3" />
                  Live Demo
                </button>
                <button class="flex items-center gap-1 text-primary hover:underline text-sm">
                  <Github class="h-3 w-3" />
                  Code
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- Connect Section -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
            <Users class="h-6 w-6" />
            Connect
          </h2>
          <div class="bg-card text-card-foreground p-6 rounded-lg border border-border">
            <p class="mb-4">Let's connect and discuss opportunities, collaborations, or just chat about technology!</p>
            <div class="flex flex-wrap gap-4">
              <a href="#" class="flex items-center gap-2 text-primary hover:underline">
                <Github class="h-4 w-4" />
                GitHub
              </a>
              <a href="#" class="flex items-center gap-2 text-primary hover:underline">
                <Linkedin class="h-4 w-4" />
                LinkedIn
              </a>
              <a href="#" class="flex items-center gap-2 text-primary hover:underline">
                <Twitter class="h-4 w-4" />
                Twitter
              </a>
              <a href="#" class="flex items-center gap-2 text-primary hover:underline">
                <Mail class="h-4 w-4" />
                Email
              </a>
            </div>
          </div>
        </section>
      </main>

      <!-- Chat Widget -->
      <div class="fixed bottom-6 right-6 z-50">
        <div v-if="isChatOpen" class="bg-card text-card-foreground border border-border rounded-lg shadow-lg w-80 h-96 mb-4 flex flex-col">
          <!-- Chat Header -->
          <div class="p-4 border-b border-border flex justify-between items-center">
            <h3 class="font-semibold">Chat with John</h3>
            <button @click="toggleChat" class="text-muted-foreground hover:text-foreground">
              <X class="h-4 w-4" />
            </button>
          </div>
          
          <!-- Chat Messages -->
          <div class="flex-1 p-4 overflow-y-auto space-y-3">
            <div v-for="message in chatMessages" :key="message.id" class="flex" :class="message.isUser ? 'justify-end' : 'justify-start'">
              <div class="max-w-xs px-3 py-2 rounded-lg" :class="message.isUser ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'">
                <p class="text-sm">{{ message.text }}</p>
              </div>
            </div>
            <div v-if="isTyping" class="flex justify-start">
              <div class="bg-secondary text-secondary-foreground px-3 py-2 rounded-lg">
                <p class="text-sm">Typing...</p>
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
              <button @click="sendMessage" class="px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                <Send class="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        
        <!-- Chat Toggle Button -->
        <button
          @click="toggleChat"
          class="bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors flex items-center gap-2"
        >
          <MessageCircle class="h-5 w-5" />
          <span v-if="!isChatOpen" class="text-sm font-medium">Chat with John</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { 
  Sun, Moon, CheckCircle, MapPin, Calendar, Mail, User, Briefcase, 
  Code, Heart, FolderOpen, Users, Github, Linkedin, Twitter, 
  ExternalLink, MessageCircle, Send, X 
} from 'lucide-vue-next'

// Theme management
const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
})

// Tech stack data
const frontendTech = ref([
  'JavaScript', 'TypeScript', 'Vue.js', 'React', 'Next.js', 'Tailwind CSS'
])

const backendTech = ref([
  'Node.js', 'Python', 'PHP', 'Laravel', 'PostgreSQL', 'MongoDB'
])

const devopsTech = ref([
  'AWS', 'Docker', 'Kubernetes', 'GitHub Actions'
])

// Projects data
const projects = ref([
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with payment integration',
    technologies: ['Vue.js', 'Node.js', 'MongoDB']
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management with real-time updates',
    technologies: ['React', 'Socket.io', 'PostgreSQL']
  },
  {
    id: 3,
    title: 'AI Chat Assistant',
    description: 'AI-powered customer service chatbot',
    technologies: ['Python', 'OpenAI', 'FastAPI']
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'Responsive portfolio with dark mode and animations',
    technologies: ['Vue.js', 'Tailwind', 'Vercel']
  }
])

// Chat functionality
const isChatOpen = ref(false)
const chatMessages = ref([
  {
    id: 1,
    text: "Hi! I'm John's AI assistant. Feel free to ask me anything about John's experience, skills, or projects!",
    isUser: false
  }
])
const newMessage = ref('')
const isTyping = ref(false)

const toggleChat = () => {
  isChatOpen.value = !isChatOpen.value
}

const sendMessage = async () => {
  if (!newMessage.value.trim()) return
  
  // Add user message
  chatMessages.value.push({
    id: Date.now(),
    text: newMessage.value,
    isUser: true
  })
  
  const userMessage = newMessage.value.toLowerCase()
  newMessage.value = ''
  
  // Show typing indicator
  isTyping.value = true
  
  // Simulate AI response delay
  setTimeout(() => {
    isTyping.value = false
    
    let response = "Thanks for your question! "
    
    // Simple keyword-based responses
    if (userMessage.includes('experience') || userMessage.includes('work')) {
      response += "John has over 5 years of experience as a full-stack developer, currently working as a Senior Software Engineer at TechCorp Inc. He specializes in Vue.js, Node.js, and AI integration."
    } else if (userMessage.includes('skills') || userMessage.includes('tech')) {
      response += "John's tech stack includes Vue.js, React, Node.js, Python, PostgreSQL, MongoDB, AWS, and Docker. He's also experienced with AI technologies and modern DevOps practices."
    } else if (userMessage.includes('projects')) {
      response += "John has worked on various projects including e-commerce platforms, task management apps, AI chatbots, and portfolio websites. You can see some of his recent work in the projects section above."
    } else if (userMessage.includes('contact') || userMessage.includes('hire')) {
      response += "You can reach John through the 'Schedule a Call' or 'Send Email' buttons above, or connect with him on GitHub, LinkedIn, or Twitter in the Connect section."
    } else if (userMessage.includes('hello') || userMessage.includes('hi')) {
      response += "Hello! I'm here to help you learn more about John. What would you like to know about his experience, skills, or projects?"
    } else {
      response += "I'd be happy to tell you more about John's experience, technical skills, projects, or how to get in touch with him. What specific area interests you?"
    }
    
    chatMessages.value.push({
      id: Date.now(),
      text: response,
      isUser: false
    })
  }, 1000)
}
</script>

<style scoped>
/* Custom scrollbar for chat */
.overflow-y-auto::-webkit-scrollbar {
  width: 4px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: transparent;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: hsl(var(--muted-foreground));
  border-radius: 2px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: hsl(var(--foreground));
}
</style>
