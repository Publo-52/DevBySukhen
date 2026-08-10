import {
  Code2,
  Database,
  Globe,
  Layout,
  Lock,
  Server,
  Terminal,
  Shield,
  Cpu
} from "lucide-react";

export const personalInfo = {
  name: "Sukhen Das",
  role: "Software Developer",
  tagline: "building practical, secure and scalable web applications.",
  about: "I'm a BCA student and software developer passionate about crafting robust full-stack applications. My core technical strengths span modern web development, backend architecture, relational & NoSQL databases, cybersecurity, and cloud services. I excel at turning complex requirements into clean, performant, and user-centered digital solutions.",
  education: "Bachelor of Computer Applications (BCA)",
  institution: "Computer Science & Application",
  location: "India",
  status: "Available for opportunities",
  email: "sukhen9832@gmail.com",
  github: "https://github.com/Publo-52",
  linkedin: "https://www.linkedin.com/in/sukhen-9832das",
  resume: "#contact"
};

export const skills = {
  frontend: [
    { name: "HTML5 / CSS3", icon: Layout },
    { name: "JavaScript (ES6+)", icon: Terminal },
    { name: "TypeScript", icon: Code2 },
    { name: "React", icon: Code2 },
    { name: "Next.js", icon: Globe },
    { name: "Tailwind CSS", icon: Layout },
  ],
  backend: [
    { name: "Node.js", icon: Server },
    { name: "Express.js", icon: Server },
    { name: "REST APIs", icon: Globe },
    { name: "JWT Authentication", icon: Lock },
  ],
  database: [
    { name: "PostgreSQL", icon: Database },
    { name: "Supabase", icon: Database },
    { name: "MongoDB", icon: Database },
    { name: "SQL & Schema Design", icon: Database },
  ],
  tools: [
    { name: "Git & GitHub", icon: Terminal },
    { name: "VS Code", icon: Code2 },
    { name: "Vercel & Netlify", icon: Globe },
    { name: "Postman", icon: Server },
  ],
  interests: [
    { name: "Web Security & OWASP", icon: Shield },
    { name: "Cloud Architecture", icon: Shield },
    { name: "AI Integration", icon: Cpu },
    { name: "Distributed Systems", icon: Server },
  ]
};

export const projectCategories = ["All", "Full-Stack", "Management", "Frontend"];

export const projects = [
  {
    id: "online-assessment",
    title: "Online Assessment Platform",
    category: "Full-Stack",
    type: "Full-Stack Web App",
    description: "A comprehensive examination platform featuring timed assessments, secure webcam proctoring monitoring, automated evaluation, and detailed analytics for educators.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "WebRTC"],
    liveUrl: "https://github.com/Publo-52",
    githubUrl: "https://github.com/Publo-52",
    features: [
      "Secure student authentication and active profile management",
      "Interactive admin dashboard for exam creation and question bank management",
      "Chapter-wise timed examinations with auto-submit capabilities",
      "Real-time webcam monitoring and anti-cheating alerts during tests",
      "Comprehensive performance analytics and score export"
    ],
    challenges: "Managing real-time synchronized state for timed exams and implementing non-intrusive webcam monitoring without degrading frontend performance.",
    solution: "Utilized WebRTC for camera access alongside periodic local state syncing to ensure seamless exam recovery even in intermittent network environments."
  },
  {
    id: "physio-management",
    title: "Physiotherapy Clinic Management System",
    category: "Management",
    type: "Management Dashboard",
    description: "A full-featured healthcare management portal streamlining patient medical records, appointment schedules, payment tracking, and doctor availability.",
    technologies: ["Next.js", "Tailwind CSS", "Supabase", "PostgreSQL", "TypeScript"],
    liveUrl: "https://github.com/Publo-52",
    githubUrl: "https://github.com/Publo-52",
    features: [
      "Electronic patient health records and treatment history tracking",
      "Automated payment calculation with due amount tracking & reminders",
      "Interactive appointment booking calendar with slot management",
      "Role-based access control (Admin, Doctor, Receptionist)",
      "Financial summary reporting and patient progress graphs"
    ],
    challenges: "Architecting a relational schema to handle complex patient history records while maintaining rapid page load speeds.",
    solution: "Built a normalized relational database in PostgreSQL via Supabase, utilizing strict server-side validation and optimized caching strategies."
  },
  {
    id: "algo-visualizer",
    title: "Algorithm & Data Structure Visualizer",
    category: "Frontend",
    type: "Educational Tool",
    description: "An interactive educational tool that visualizes sorting, searching, and graph algorithms step-by-step to aid computer science learning.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://github.com/Publo-52",
    githubUrl: "https://github.com/Publo-52",
    features: [
      "Step-by-step execution visualization with speed controls",
      "Animated data structures including Arrays, Binary Trees, and Graphs",
      "Custom array input generator and edge-case scenario testing",
      "Real-time time and space complexity explanations",
      "Dark theme UI engineered for immersive focus"
    ],
    challenges: "Rendering smooth 60fps step-by-step animations for recursive algorithms such as Merge Sort and Quick Sort.",
    solution: "Designed a lightweight custom state engine with step control hooks, ensuring predictable playback and timeline scrub controls."
  }
];

export const experience = [
  {
    year: "2024 — Present",
    role: "Full-Stack Developer (Independent)",
    company: "Self-Directed Software Engineering",
    description: "Architecting and developing production-grade web applications with modern stacks (React, Next.js, Node.js, PostgreSQL). Implementing RESTful APIs, secure authentication, and cloud deployment pipelines."
  }
];

export const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "MAKAUT University / College",
    period: "2023 — 2026",
    coursework: [
      "Database Management Systems (DBMS)",
      "Data Structures & Algorithms",
      "Operating Systems & Networking",
      "Object-Oriented Programming (Java/C++)",
      "Web Technologies & Software Engineering",
      "Cybersecurity Fundamentals"
    ]
  }
];
