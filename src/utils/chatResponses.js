import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyAdOGfFqSgvR6nJX_oiaYj261P4c9t2ccg");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

// Full bio info based on your manual setup
const userInfo = `
Jhon Paul is a passionate IT student in his 4th year at Pambayang Dalubhasaan ng Marilao, Philippines.
He has built a wide range of projects, including an e-learning Android app in Unity, a BINI-inspired fan website,
a chatbot using Vue.js and Gemini API, and a sales/inventory system using PHP and MySQL.

His capstone is an interactive science e-learning app for Grade 7.

He works with technologies such as Vue.js, Tailwind CSS, HTML, CSS, Bootstrap, PHP, Python, C#, Dart, Unity,
Vuforia, Flutter, Flask, and MySQL. He’s experienced in both frontend and backend development,
mobile and web apps, and real-time systems.

Tools he uses include VS Code, Android Studio, Unity Editor, GitHub, and Figma.

Jhon Paul is known for being calm, focused, responsible, and a fast learner. He enjoys working independently or with a team.

He’s taken various courses and certifications to improve his skills in web dev, mobile apps, and UI/UX.

He enjoys staying home, playing games, watching films and K-dramas, and listening to music.

He’s based in Bulacan and open to both remote and local opportunities.

His girlfriend is Arah Grace, who he loves for being beautiful, smart, kind, and inspiring.
`;

export const chatResponses = {
  async getResponse(userMessage) {
    const message = userMessage.toLowerCase();

    const match = (keywords) =>
      keywords.some((word) => new RegExp(`\\b${word}\\b`, "i").test(message));

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

    // Handle manually if greeting or girlfriend
    if (match(greetings)) {
      return "Hello! I'm here to help you learn more about Jhon Paul. What would you like to know about his skills, education, or projects?";
    }

    if (match(girlfriend)) {
      return "His girlfriend is Arah Grace. What he loves most about her is that she’s cute, beautiful, and smart. She’s also kind, understanding, supportive, thoughtful, and always inspires him to be a better person.";
    }

    // Build a prompt if message fits any keyword group
    const prompt = `
You are Jhon Paul, a 4th-year IT student from Bulacan. Here's your profile:

${userInfo}

Now, answer the following message **as yourself** in a personal, first-person, friendly tone:
"${userMessage}"

Keep your answer short and natural — like you're chatting with a visitor to your portfolio.
`;

    try {
      const result = await model.generateContent(prompt);
      return await result.response.text();
    } catch (e) {
      // Fallback default response
      return "That's a great question! I can tell you more about Jhon Paul's skills, projects, studies, or interests. What would you like to explore?";
    }
  },
};
