# Vue.js Portfolio with Chat Bot

A modern, responsive portfolio website built with Vue.js featuring a chat bot that responds like the portfolio owner.

## Features

- 🌓 Dark/Light mode toggle
- 💬 Interactive chat bot
- 📱 Fully responsive design
- ⚡ Fast and lightweight
- 🎨 Modern UI with Tailwind CSS
- 🔧 Built with Vue 3 Composition API

## Tech Stack

- **Frontend**: Vue.js 3, Tailwind CSS
- **Icons**: Lucide Vue Next
- **Build Tool**: Vite
- **Styling**: Custom CSS variables for theming

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd vue-portfolio-chat
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

\`\`\`bash
npm run build
\`\`\`

### Preview Production Build

\`\`\`bash
npm run preview
\`\`\`

## Customization

### Personal Information

Update the following files with your personal information:

- `src/components/ProfileSection.vue` - Name, location, title, profile image
- `src/components/AboutSection.vue` - About description
- `src/components/ExperienceSection.vue` - Work experience
- `src/components/TechStackSection.vue` - Technical skills
- `src/components/ProjectsSection.vue` - Recent projects
- `src/components/ConnectSection.vue` - Social links

### Chat Bot Responses

Customize the chat bot responses in `src/utils/chatResponses.js` to match your personality and information.

### Styling

The project uses CSS custom properties for theming. You can customize colors in `src/style.css`.

## Project Structure

\`\`\`
src/
├── components/          # Vue components
│   ├── Header.vue
│   ├── ProfileSection.vue
│   ├── AboutSection.vue
│   ├── ExperienceSection.vue
│   ├── TechStackSection.vue
│   ├── BeyondCodingSection.vue
│   ├── ProjectsSection.vue
│   ├── ConnectSection.vue
│   ├── ChatWidget.vue
│   └── Footer.vue
├── utils/              # Utility functions
│   └── chatResponses.js
├── App.vue            # Main app component
├── main.js           # App entry point
└── style.css         # Global styles
\`\`\`

## License

MIT License - feel free to use this project for your own portfolio!
