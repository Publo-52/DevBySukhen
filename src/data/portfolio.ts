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
  name: "Sukhen",
  role: "Software Developer",
  tagline: "building practical, secure and scalable web applications.",
  about: "I'm a BCA student and aspiring software developer who enjoys building practical applications that solve real problems. My interests include modern web development, backend systems, databases, cybersecurity and cloud technologies. I focus on learning by building—turning ideas into functional, well-structured and maintainable software.",
  education: "Bachelor of Computer Applications",
  location: "India",
  status: "Available for opportunities",
  email: "your.email@example.com",
  github: "https://github.com/Publo-52",
  linkedin: "https://www.linkedin.com/in/sukhen-9832das",
  resume: "/resume.pdf"
};

export const skills = {
  frontend: [
    { name: "HTML", icon: Layout },
    { name: "CSS", icon: Layout },
    { name: "JavaScript", icon: Terminal },
    { name: "React", icon: Code2 },
    { name: "Next.js", icon: Globe },
    { name: "Tailwind CSS", icon: Layout },
  ],
  backend: [
    { name: "Node.js", icon: Server },
    { name: "Express", icon: Server },
    { name: "REST APIs", icon: Globe },
    { name: "Authentication", icon: Lock },
  ],
  database: [
    { name: "PostgreSQL", icon: Database },
    { name: "Supabase", icon: Database },
    { name: "MongoDB", icon: Database },
    { name: "SQL", icon: Database },
  ],
  tools: [
    { name: "Git", icon: Terminal },
    { name: "GitHub", icon: Terminal },
    { name: "VS Code", icon: Code2 },
    { name: "Vercel", icon: Globe },
  ],
  interests: [
    { name: "Cybersecurity", icon: Shield },
    { name: "Cloud Security", icon: Shield },
    { name: "AI", icon: Cpu },
    { name: "System Design", icon: Server },
  ]
};

export const projects = [
  {
    id: "online-assessment",
    title: "Online Assessment Platform",
    type: "Full-Stack Web App",
    description: "A comprehensive examination platform featuring timed assessments, camera monitoring, and detailed result management.",
    image: "/api/placeholder/800/500",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "#",
    githubUrl: "#",
    features: [
      "Student authentication and profile management",
      "Admin dashboard for quiz creation",
      "Chapter-wise questions and timed examinations",
      "Camera monitoring during tests",
      "Detailed result analytics and management"
    ],
    challenges: "Managing real-time state for timed exams and implementing secure camera monitoring without compromising performance.",
    solution: "Utilized WebRTC for camera access and a combination of local storage and periodic server syncing to ensure exam state is preserved even if the connection drops."
  },
  {
    id: "physio-management",
    title: "Physiotherapy Management System",
    type: "Management Dashboard",
    description: "A clinic management system streamlining patient records, appointment scheduling, and payment tracking.",
    image: "/api/placeholder/800/500",
    technologies: ["Next.js", "Tailwind CSS", "Supabase", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    features: [
      "Patient records and history management",
      "Payment tracking and due amount alerts",
      "Appointment scheduling calendar",
      "Comprehensive admin dashboard",
      "Role-based access control"
    ],
    challenges: "Designing a schema that efficiently handles complex patient histories and recurring appointments while keeping the UI intuitive for non-technical clinic staff.",
    solution: "Implemented a normalized relational database in PostgreSQL via Supabase and built a heavily form-optimized UI using React Hook Form and Zod for validation."
  },
  {
    id: "algo-visualizer",
    title: "Algorithm Visualization Platform",
    type: "Educational Tool",
    description: "An interactive platform that visualizes complex algorithms and data structures step-by-step for educational purposes.",
    image: "/api/placeholder/800/500",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    features: [
      "Step-by-step execution visualization",
      "Animated data structures (Arrays, Trees, Graphs)",
      "Custom problem input and edge-case testing",
      "Time and space complexity explanations",
      "Learning-focused intuitive UI"
    ],
    challenges: "Creating smooth, understandable animations for complex recursive algorithms like Merge Sort and Tree Traversals.",
    solution: "Used Framer Motion and a custom state machine to track each step of the algorithm's execution, allowing users to pause, rewind, and play the visualization."
  }
];

export const experience = [
  {
    year: "2026 - Present",
    role: "Independent Projects",
    company: "Self-Directed Learning",
    description: "Building production-style web applications, learning modern engineering practices and working with databases, authentication and deployment."
  }
];

export const education = [
  {
    degree: "Bachelor of Computer Applications",
    institution: "Your University Name",
    period: "2023 — 2026",
    coursework: [
      "Database Management Systems",
      "Operating Systems",
      "Software Engineering",
      "Computer Networks",
      "Programming",
      "Cybersecurity"
    ]
  }
];
