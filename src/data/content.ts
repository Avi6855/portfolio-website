import {
  Code2,
  Smartphone,
  Server,
  Layout,
  Trophy,
} from 'lucide-react';

export const personalInfo = {
  name: "Avinash Patil",
  role: "Software Engineer",
  location: "Kolhapur, Maharashtra, India",
  email: "avinashpatil6855@gmail.com",
  phone: "+91 7248976855",
  linkedin: "https://www.linkedin.com/in/avinash-patil-278011228/",
  github: "https://github.com/Avi6855",
  headline: "Building Scalable Software Products and Intelligent Digital Experiences",
  subheadline: "Software Engineer with 2.6 years of experience building mobile applications, enterprise platforms, business automation systems, and full-stack software solutions.",
  about: "Software Engineer with 2.6 years of experience building scalable mobile applications, enterprise software systems, automation platforms, fintech applications, and full-stack solutions. Passionate about solving complex problems, optimizing performance, and delivering high-quality products that impact users.",
};

export const skillsCategories = [
  {
    category: "Programming",
    skills: ["Java", "Kotlin", "Python", "JavaScript", "TypeScript", "C++", "SQL"]
  },
  {
    category: "Backend",
    skills: ["Spring Boot", "Node.js", "REST APIs", "Microservices", "JWT Authentication"]
  },
  {
    category: "Frontend",
    skills: ["React", "Angular", "HTML5", "CSS3"]
  },
  {
    category: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase Firestore"]
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "GCP", "Docker", "Kubernetes", "Apache Kafka", "GitHub Actions", "CI/CD"]
  },
  {
    category: "CS Fundamentals",
    skills: ["DSA", "Operating Systems", "Computer Networks", "System Design", "Distributed Systems"]
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Postman", "Android Studio"]
  }
];

export const experience = [
  {
    company: "DISHA Computer",
    location: "Kolhapur, Maharashtra, India",
    role: "Software Engineer",
    duration: "January 2024 – Present",
    highlights: [
      "Engineered a zero-crash Android app, measured by a **40% faster startup** and **85% test coverage**, by implementing Kotlin MVVM architecture with Room and Retrofit.",
      "Deployed 'DISHA AI' to provide intelligent context-aware student assistance, measured by a **25% increase in user engagement**, by integrating **LLMs** and architecting robust **agentic fallback workflows**.",
      "Architected a scalable backend, measured by a **30% acceleration in billing workflows**, using a **SaaS** system using **Docker, Kubernetes, Kafka**, and **CI/CD**."
    ],
    techStack: ["LLMs", "Docker", "Kubernetes", "Kafka", "CI/CD", "GCP", "Kotlin", "Jetpack Compose", "MVVM"]
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
    title: "Indian AI Builder",
    category: "AI SaaS Platform",
    liveUrl: "https://indianaibuilder.com/",
    thumbnail: "/thumbnails/Indian_AI_Builder_Banner.png",
    demoVideo: "https://drive.google.com/file/d/1zHarSCsC1P_ZtQZe2aMgvxek8vezPLpz/preview",
    techStack: ["React", "Node.js", "AI", "Cloud"],
    summary: "A comprehensive AI builder platform offering advanced model training, workflow automation, and seamless integration.",
    features: [
      "Drag-and-drop AI workflow builder",
      "Pre-trained model integrations",
      "Real-time inference API",
      "Scalable deployment infrastructure"
    ],
    challenges: "Ensuring low-latency inference while scaling to handle a large volume of requests.",
    solutions: "Optimized model serving with distributed architecture and caching mechanisms."
  },
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
    demoVideo: "https://drive.google.com/drive/folders/1tZuBy4N5QH7DTU9tF7xDjyDjxXypO2zx?usp=sharing",
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
    demoVideo: "https://drive.google.com/drive/folders/12aPqF74_mqx6br2lTRq8O-4apjTZtJeI?usp=sharing",
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
    demoVideo: "https://drive.google.com/drive/folders/16I1KFKSyWFsttiF_CU3pXwChXSzvfy0X?usp=sharing",
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
    title: "Global Rank 11 ",
    description: "Secured Global Rank 11 on CodeChef Starters 242.",
    icon: Trophy,
    link: "https://www.codechef.com/rankings/START242D?itemsPerPage=100&order=asc&page=1&sortBy=rank"
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
    title: "End-to-End Software Engineering",
    description: "Proven track record in architecting scalable systems, from robust backend services to intuitive frontends and mobile applications."
  },
  {
    title: "Full Stack Capability",
    description: "Experience with modern web (React/Next.js), enterprise backends (Spring Boot), and mobile development (Android/Kotlin)."
  },
  {
    title: "System Design & Architecture",
    description: "Ability to design scalable enterprise software and complex SaaS platforms, understanding the entire product lifecycle."
  },
  {
    title: "Advanced Problem Solving",
    description: "Strong algorithmic foundation evidenced by elite competitive programming achievements and a track record of solving complex business logic."
  }
];
