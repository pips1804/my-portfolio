export const chatResponses = {
  getResponse(userMessage) {
    const message = userMessage.toLowerCase();

    const match = (keywords) =>
      keywords.some((word) => new RegExp(`\\b${word}\\b`, "i").test(message));

    // Synonym keyword lists
    const greetings = ["hello", "hi", "hey", "yo", "kumusta", "kamusta"];
    const experience = [
      "experience",
      "exp",
      "experiences",
      "work",
      "job",
      "trabaho",
      "career",
      "background",
      "nagtrabaho",
      "nagawa",
    ];
    const skills = [
      "skill",
      "skills",
      "tech",
      "technology",
      "stack",
      "tools",
      "framework",
      "abilities",
      "kakayahan",
      "gamit",
    ];
    const languages = [
      "language",
      "languages",
      "code",
      "coding",
      "programming",
      "syntax",
      "script",
      "wika",
      "programa",
    ];
    const projects = [
      "project",
      "projects",
      "portfolio",
      "work",
      "output",
      "gawa",
      "mga proyekto",
      "mga nagawa",
    ];
    const capstone = ["capstone", "thesis", "research", "final project"];
    const mobile = [
      "mobile",
      "android",
      "flutter",
      "unity",
      "vuforia",
      "app",
      "application",
      "mobile app",
    ];
    const tools = [
      "tools",
      "ide",
      "editor",
      "software",
      "platform",
      "tool",
      "gamit",
      "ginagamit",
    ];
    const goals = ["goal", "dream", "future", "ambisyon", "pangarap", "plano"];
    const certification = [
      "certification",
      "certifications",
      "course",
      "training",
      "certificate",
      "kurso",
    ];
    const personality = [
      "personality",
      "attitude",
      "soft skills",
      "ugali",
      "traits",
      "behavior",
      "pag-uugali",
    ];
    const contact = [
      "contact",
      "hire",
      "email",
      "call",
      "reach",
      "connect",
      "message",
      "inquire",
      "inquiry",
      "apply",
    ];
    const ai = [
      "ai",
      "artificial intelligence",
      "bot",
      "chatbot",
      "machine learning",
      "ml",
      "gpt",
      "gemini",
    ];
    const education = [
      "education",
      "learn",
      "study",
      "school",
      "course",
      "degree",
      "aral",
      "pag-aaral",
      "eskwela",
    ];
    const location = [
      "location",
      "based",
      "where",
      "saan",
      "lugar",
      "nakatira",
    ];
    const hobbies = [
      "hobbies",
      "hobby",
      "interest",
      "fun",
      "leisure",
      "libangan",
      "trip",
      "beyond coding",
    ];
    const girlfriend = [
      "gf",
      "girlfriend",
      "jowa",
      "partner",
      "babe",
      "bebi",
      "arah",
      "bebe",
    ];

    // Matching logic
    if (match(greetings)) {
      return "Hello! I'm here to help you learn more about Jhon Paul. What would you like to know about his skills, education, or projects?";
    }

    if (match(experience)) {
      return "Jhon Paul is a passionate IT student with hands-on experience in building websites, mobile apps, and smart systems. His portfolio includes both academic and personal projects, such as an AR zombie shooting game and a POS-integrated Flutter app.";
    }

    if (match(skills)) {
      return "Jhon Paul's tech stack includes Vue.js, Bootstrap, HTML, CSS for frontend, and PHP, Python, and C# for backend development. He also works with Unity, Vuforia, and Flask for cross-platform and interactive apps.";
    }

    if (match(languages)) {
      return "Jhon Paul codes in multiple languages including HTML, CSS, JavaScript, PHP, Python, C#, and Dart. He adapts to different tech stacks based on project requirements.";
    }

    if (match(projects)) {
      return "Jhon Paul has created a variety of projects such as an e-learning mobile app built with Unity, a BINI-inspired fan website, a chatbot using Vue and Gemini API, and a sales/inventory system for a clothing shop using PHP and MySQL.";
    }

    if (match(capstone)) {
      return "His capstone project is an e-learning application for Android, built using Unity. It aims to make science learning more interactive and engaging for Grade 7 students.";
    }

    if (match(mobile)) {
      return "Jhon Paul has built mobile applications using Flutter, Unity, and Vuforia. One project connects to a web-based POS system using Flask API for real-time inventory and transaction management.";
    }

    if (match(tools)) {
      return "His favorite tools include Visual Studio Code, Unity Editor, Android Studio, GitHub, and Figma. He enjoys clean UI design and efficient development workflows.";
    }

    if (match(goals)) {
      return "Jhon Paul aims to become a well-rounded software developer, focusing on creating meaningful digital experiences through mobile apps, web platforms, and smart systems.";
    }

    if (match(certification)) {
      return "He has taken several online courses on web development, mobile app development, and UI/UX design. He believes in continuous self-learning to stay ahead in tech.";
    }

    if (match(personality)) {
      return "Jhon Paul is a calm, focused, and responsible individual. He’s a fast learner who enjoys solving problems, working independently, and collaborating on team-based projects.";
    }

    if (match(contact)) {
      return "You can reach Jhon Paul via the contact section in his portfolio. He’s open to freelance work, internships, and collaborative tech opportunities.";
    }

    if (match(ai)) {
      return "Jhon Paul has explored AI integration by creating a chatbot using Vue.js and the Gemini API. He’s interested in how AI can improve learning and user experience.";
    }

    if (match(education)) {
      return "Jhon Paul is a 4th-year Bachelor of Science in Information Technology student at Pambayang Dalubhasaan ng Marilao, where he’s gained strong foundations in software development.";
    }

    if (match(location)) {
      return "Jhon Paul is based in the Philippines and currently studying in Bulacan. He’s open to both remote and local opportunities.";
    }

    if (match(hobbies)) {
      return "Outside of coding, Jhon Paul enjoys staying at home, playing video games, watching films and K-dramas, and listening to music.";
    }

    if (match(girlfriend)) {
      return "His girlfriend is Arah Grace. What he loves most about her is that she’s cute, beautiful, and smart. She’s also kind, understanding, supportive, thoughtful, and always inspires him to be a better person.";
    }

    // Default
    return "That's a great question! I can tell you more about Jhon Paul's skills, projects, studies, or interests. What would you like to explore?";
  },
};
