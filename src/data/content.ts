import {
  Code2,
  Smartphone,
  Server,
  Database,
  Layout,
  Cpu,
  Trophy,
} from 'lucide-react';

export const personalInfo = {
  name: "Avinash Patil",
  role: "Android Engineer | Software Engineer",
  location: "Kolhapur, Maharashtra, India",
  email: "avinashpatil6855@gmail.com",
  phone: "+91 7248976855",
  linkedin: "https://www.linkedin.com/in/avinash-patil-278011228/",
  github: "https://github.com/Avi6855",
  headline: "Building Scalable Software Products and Intelligent Digital Experiences",
  subheadline: "Android Engineer with 2.6 years of experience building mobile applications, enterprise platforms, business automation systems, and full-stack software solutions.",
  about: "Android Engineer with 2.6 years of experience building scalable mobile applications, enterprise software systems, automation platforms, fintech applications, and full-stack solutions. Passionate about solving complex problems, optimizing performance, and delivering high-quality products that impact users.",
};

export const skills = [
  { name: "Android Development", icon: Smartphone },
  { name: "Kotlin", icon: Code2 },
  { name: "Java", icon: Code2 },
  { name: "Jetpack Compose", icon: Layout },
  { name: "MVVM & Clean Architecture", icon: Server },
  { name: "Spring Boot", icon: Server },
  { name: "REST APIs", icon: Database },
  { name: "Firebase", icon: Database },
  { name: "PostgreSQL", icon: Database },
  { name: "System Design", icon: Cpu },
  { name: "Software Engineering", icon: Code2 },
];

export const experience = [
  {
    company: "DISHA Computer",
    location: "Kolhapur, Maharashtra, India",
    role: "Android Engineer",
    duration: "January 2024 – Present",
    highlights: [
      "Engineered a scalable Salesforce-inspired SaaS platform for supply chain and sales automation, integrating inventory, procurement, orders, shipments, and customer workflows into a unified enterprise system.",
      "Developed a context-aware AI Copilot powered by LLMs that analyzes real-time business data to generate actionable insights, recommendations, and natural-language summaries across enterprise modules.",
      "Built an agentic workflow automation system that autonomously generates reports, identifies operational bottlenecks, prioritizes critical alerts, and assists users with data-driven actions throughout supply chain and sales processes.",
      "Implemented AI-powered predictive analytics for demand forecasting, low-stock detection, procurement planning, revenue trend analysis, and executive dashboards, enabling proactive business decision-making."
    ]
  }
];

export const education = {
  degree: "Bachelor of Computer Science (BCS)",
  institution: "The New College, Kolhapur",
  cgpa: "8.1 / 10",
  duration: "2021 – 2024"
};

export const codeChef = {
  username: "avinashpatil_1",
  rating: 2174,
  highestRating: 2174,
  stars: 5,
  globalRank: 466,
  countryRank: 246,
  contestsParticipated: 45,
  problemsSolved: 110,
  achievements: [
    "Top 5% in Starters 100",
    "Consistent performer in Division 2",
    "Solved 450+ algorithmic problems",
  ]
};

export const projects = [
  {
    title: "AI Powered Supply Chain & Sales Automation",
    category: "Enterprise Business Automation Platform",
    github: "https://github.com/Avi6855/AI_Powered_Smart_Supply_Chain_-_Sales_Automation_Platform",
    thumbnail: "/thumbnails/platform-Banner.png",
    demoVideo: "https://drive.google.com/file/d/1Rkp8Paw7m7CDXwFZ_HoS34bSGLasAoVS/preview",
    techStack: ["Next.js", "TypeScript", "Spring Boot", "PostgreSQL", "OpenAI"],
    summary: "An enterprise-grade, full-stack supply chain and sales automation platform with an integrated AI assistant, real-time analytics, and role-based access control.",
    features: [
      "Unified executive dashboard with live KPIs",
      "Real-time cross-module synchronization",
      "Contextual AI assistant for operational queries",
      "Automated stock monitoring and alerting",
      "End-to-end procurement lifecycle management",
      "Role-based access control (RBAC)"
    ],
    challenges: "Handling real-time data synchronization across multiple modules and ensuring low latency for AI responses.",
    solutions: "Implemented an event-driven state management system and streaming responses for the AI assistant."
  },
  {
    title: "StreamFlow",
    category: "Privacy-Focused Video Streaming Platform",
    github: "https://github.com/Avi6855/YouTube_Plus",
    thumbnail: "/thumbnails/YouTube_Plus_App_Banner.png",
    demoVideo: "/videos/YouTube_Plus_App_Video_Demo.mp4",
    techStack: ["Android", "Kotlin", "ExoPlayer", "Coroutines", "Dagger Hilt"],
    summary: "An advanced, privacy-focused video streaming platform offering an ad-free experience, background playback, and custom video controls.",
    features: [
      "Ad-free video playback using ExoPlayer",
      "Picture-in-Picture (PiP) mode",
      "Background audio playback",
      "Customizable themes and playback speed",
      "Privacy-first architecture (no tracking)"
    ],
    challenges: "Handling seamless transition between foreground playback, background audio, and PiP mode.",
    solutions: "Leveraged Android MediaSession APIs and optimized foreground services for uninterrupted playback."
  },
  {
    title: "Auto Messaging System",
    category: "Customer Engagement & Business Automation",
    github: "https://github.com/Avi6855/AutoMessaging",
    thumbnail: "/thumbnails/Auto_Messaging_App_Banner.png",
    demoVideo: "/videos/Auto-Messaging-App-Demo-Video.mp4",
    techStack: ["Android", "Kotlin", "Telephony API", "Room Database"],
    summary: "An Android application that automatically sends predefined SMS messages after a phone call ends to collect customer feedback and improve engagement.",
    features: [
      "Automatic SMS triggering post-call",
      "Customizable message templates",
      "Call history integration",
      "Offline support with local database",
      "Analytics dashboard for message delivery rates"
    ],
    challenges: "Managing Android permissions for call logs and SMS without violating Play Store policies.",
    solutions: "Utilized background services efficiently and strictly requested only necessary permissions with proper user consent flows."
  },
  {
    title: "Monzo Bank",
    category: "Fintech Mobile Application",
    github: "https://github.com/Avi6855/MonzoBank",
    thumbnail: "/thumbnails/Monzo_Bank_App_Banner.png",
    demoVideo: "/videos/Monzo_Bank_App_Demo_Video.mp4",
    techStack: ["Android", "Kotlin", "Jetpack Compose", "MVVM", "Firebase"],
    summary: "A comprehensive fintech mobile application simulating a digital banking experience with secure authentication, transaction history, and fund transfers.",
    features: [
      "Secure user authentication (Biometrics)",
      "Real-time balance updates and transaction tracking",
      "Peer-to-peer fund transfers",
      "Card management (freeze/unfreeze)",
      "Expense categorization and insights"
    ],
    challenges: "Ensuring data security and smooth animations for financial transactions.",
    solutions: "Applied Clean Architecture, encrypted shared preferences, and optimized Jetpack Compose recompositions."
  }
];

export const achievements = [
  {
    title: "Published Android app on Google Play Store",
    description: "Successfully developed and launched an application on the Google Play Store.",
    icon: Smartphone,
  },
  {
    title: "Global Rank 1 ",
    description: "Secured Global Rank 1 on CodeChef Starters 240.",
    icon: Trophy,
    link: "https://www.codechef.com/rankings/START240B?itemsPerPage=100&order=asc&page=1&sortBy=rank"
  },
  {
    title: "Global Rank 2 ",
    description: "Secured Global Rank 2 on CodeChef Starters 241.",
    icon: Trophy,
    link: "https://www.codechef.com/rankings/START241A?itemsPerPage=100&order=asc&page=1&sortBy=rank"
  },
  {
    title: "Global Rank 4 ",
    description: "Secured Global Rank 4 on CodeChef Monday Munch - DSA Challenge 005.",
    icon: Trophy,
    link: "https://www.codechef.com/rankings/DSAMONDAY005?itemsPerPage=100&order=asc&page=1&sortBy=rank"
  },
  {
    title: "Global Rank 50 ",
    description: "Secured Global Rank 50 on CodeChef DSA Rating.",
    icon: Trophy,
    link: "https://www.codechef.com/users/avinashpatil_1?rating=dsa-monday"
  },
  {
    title: "5 Star on CodeChef",
    description: "Achieved 5-star rating on CodeChef for consistent high performance in competitive programming contests.",
    icon: Trophy,
    //link: "https://www.codechef.com/users/avinashpatil_1?rating=dsa-monday"
  },
  {
    title: "Solved 200+ DSA problems",
    description: "Consistently solved complex algorithmic problems on LeetCode and CodeChef.",
    icon: Code2
  },
  {
    title: "Enterprise Systems Built",
    description: "Successfully developed and deployed an AI-powered supply chain platform connecting multiple business modules.",
    icon: Server
  },
  {
    title: "Full Stack Mastery",
    description: "Architected solutions spanning Android (Kotlin), Frontend (Next.js), and Backend (Spring Boot).",
    icon: Layout
  },
  {
    title: "Impactful Android Apps",
    description: "Built scalable consumer apps including a Fintech application and a Video Streaming platform.",
    icon: Smartphone
  }
];

export const whyHireMe = [
  {
    title: "Strong Android & Software Engineering",
    description: "Proven track record in Kotlin, Jetpack Compose, MVVM, and building robust mobile architectures."
  },
  {
    title: "Full Stack Capability",
    description: "Experience with modern web (React/Next.js) and robust backends (Spring Boot, Node.js)."
  },
  {
    title: "System Design & Architecture",
    description: "Ability to design scalable enterprise software, understanding the entire product lifecycle."
  },
  {
    title: "Problem Solving",
    description: "Strong algorithmic foundation evidenced by competitive programming achievements."
  }
];
