import {
  Code2,
  Database,
  Globe,
  Layout,
  Lock,
  Server,
  Terminal,
  Shield,
  Cpu,
  Laptop,
  Palette,
  Search,
  ShieldAlert,
  Zap
} from "lucide-react";

export const personalInfo = {
  name: "Sukhen Das",
  brandName: "DevBySukhen",
  role: "Web Designer & Full-Stack Developer",
  tagline: "Crafting immersive digital experiences, cloud-native DevSecOps automation, and AI security platforms.",
  about: "I'm a passionate digital creator with over 1.5+ years of experience in web design, full-stack software development, DevSecOps automation, and AI security intelligence. My journey began tinkering with HTML and CSS to create websites. Since then, I've honed my skills through formal education (BCA Honors) and engineering production-ready applications.",
  aboutExtended: "What sets me apart is my unique blend of technical software architecture, cybersecurity awareness, and artistic UI vision. I don't just build websites — I engineer resilient digital platforms that captivate audiences and drive results.",
  education: "BCA (Honors)",
  institution: "Bachelor of Computer Applications",
  location: "West Bengal, Purba Medinipur, 721431, India",
  experienceYears: "1.5+ Years",
  status: "Available for Projects & Hiring",
  email: "devbysukhen@gmail.com",
  phone: "+91 9832695291",
  whatsapp: "https://wa.me/919832695291?text=Hello%20Sukhen%2C%20I%20am%20interested%20in%20your%20services.",
  sms: "sms:9832695291",
  github: "https://github.com/Publo-52",
  linkedin: "https://www.linkedin.com/in/sukhen-9832das",
  twitter: "https://x.com/?lang=en",
  resume: "/pdf/resume_sukhen_das (1).pdf",
  profileImage: "/images/port.1.jpg",
  logoImage: "/images/final-logo_selected.png",
  faviconImage: "/images/logo_selected-portfolio.png"
};

export const stats = [
  { label: "Projects Completed", value: "15+", count: 15 },
  { label: "Happy Clients", value: "5+", count: 5 },
  { label: "Years Experience", value: "1.5+", count: 1.5 },
  { label: "Awards Won", value: "4", count: 4 }
];

export const services = [
  {
    id: "devsecops",
    icon: ShieldAlert,
    title: "DevSecOps & Cloud Automation",
    description: "Automated CI/CD pipelines, container security scanning (Trivy), Kubernetes rolling deployments, and encrypted vault secrets management."
  },
  {
    id: "ai-security",
    icon: Zap,
    title: "AI API Security & Threat Intelligence",
    description: "OWASP API Top 10 vulnerability audits, AI anomaly request inspection, BOLA protection, and real-time WAF rate-limiting."
  },
  {
    id: "web-dev",
    icon: Laptop,
    title: "Web Design & Development",
    description: "Custom, responsive web applications built with Next.js, React, TypeScript, and Tailwind CSS engineered for maximum speed and SEO."
  },
  {
    id: "ui-ux",
    icon: Palette,
    title: "UI/UX & Interactive Design",
    description: "Intuitive glassmorphism interfaces, interactive algorithm visualizers, and seamless user experiences driven by thoughtful design systems."
  }
];

export const skills = {
  frontend: [
    { name: "HTML5 & CSS3", icon: Layout },
    { name: "JavaScript (ES6+)", icon: Terminal },
    { name: "TypeScript", icon: Code2 },
    { name: "React.js", icon: Code2 },
    { name: "Next.js 16 (App Router)", icon: Globe },
    { name: "Tailwind CSS", icon: Layout },
  ],
  backend: [
    { name: "Node.js & Express", icon: Server },
    { name: "RESTful APIs & GraphQL", icon: Globe },
    { name: "Authentication (JWT / OAuth)", icon: Lock },
    { name: "DevSecOps CI/CD", icon: ShieldAlert },
  ],
  database: [
    { name: "PostgreSQL", icon: Database },
    { name: "Supabase", icon: Database },
    { name: "MongoDB", icon: Database },
    { name: "Kubernetes & Docker", icon: Server },
  ],
  tools: [
    { name: "Git & GitHub", icon: Terminal },
    { name: "VS Code", icon: Code2 },
    { name: "Figma & UI Systems", icon: Palette },
    { name: "Vercel & Cloudflare", icon: Globe },
  ],
  interests: [
    { name: "OWASP API Security", icon: Shield },
    { name: "Cloud Architecture", icon: Shield },
    { name: "AI Anomaly Detection", icon: Cpu },
    { name: "SEO Optimization", icon: Search },
  ]
};

export const projectCategories = ["All", "DevSecOps", "AI & Security", "Algorithms & Web"];

export const projects = [
  {
    id: "devsecops-deployment-platform",
    title: "DevSecOps Deployment Platform",
    category: "DevSecOps",
    type: "Cloud & Security Orchestration",
    description: "A production-grade cloud-native DevOps & Security platform automating 5-stage CI/CD pipelines, Trivy container layer vulnerability audits, Kubernetes pod telemetry, and AES-256 secret vault management.",
    image: "/images/port4.avif",
    technologies: ["Next.js 16", "TypeScript", "Kubernetes", "Trivy", "Docker", "Tailwind CSS"],
    liveUrl: "https://devsecops-platform-devbysukhen.vercel.app",
    githubUrl: "https://github.com/Publo-52/devsecops-platform",
    features: [
      "Interactive 5-stage CI/CD pipeline execution with live stdout terminal logs",
      "Filterable Trivy CVE vulnerability report database (Critical, High, Medium, Low) with automated remediation commands",
      "Kubernetes Pod telemetry monitor tracking CPU/Memory metrics and pod health",
      "AES-256 encrypted environment variable & secrets manager with masked toggles"
    ],
    challenges: "Simulating asynchronous multi-stage pipeline triggers with live streaming logs while maintaining React 19 state purity.",
    solution: "Built a custom event-driven pipeline runner utilizing state transitions and step-by-step stdout log buffers."
  },
  {
    id: "ai-api-security-platform",
    title: "AI API Security Platform",
    category: "AI & Security",
    type: "Threat Intelligence & WAF",
    description: "An advanced API security platform auditing OWASP API Top 10 risks, detecting real-time threat anomalies via deep learning scores, and enforcing dynamic WAF rate-limiting rules.",
    image: "/images/port6.jpeg",
    technologies: ["Next.js 16", "TypeScript", "OWASP API Top 10", "AI Threat Intelligence", "Tailwind CSS"],
    liveUrl: "https://ai-api-security-devbysukhen.vercel.app",
    githubUrl: "https://github.com/Publo-52/ai-api-security",
    features: [
      "OWASP API Top 10 penetration tester auditing BOLA, SSRF, and auth bypasses",
      "Live HTTP request stream displaying AI threat confidence scores and country flags",
      "Configurable Web Application Firewall (WAF) rate limiters and instant IP blocking controls",
      "One-click security compliance scorecard exporter"
    ],
    challenges: "Aggregating real-time request payload anomalies into intuitive risk confidence scores.",
    solution: "Designed a weight-vector scoring engine evaluating authorization headers, query structures, and IP threat reputations."
  },
  {
    id: "ai-algorithm-visualization-platform",
    title: "AI-Powered Algorithm Visualizer",
    category: "Algorithms & Web",
    type: "CS Visualizer & AI Assistant",
    description: "An interactive computer science visualization engine for QuickSort, MergeSort, HeapSort, and grid pathfinding algorithms (A* Search, Dijkstra), featuring an AI Big-O complexity analyzer.",
    image: "/images/port2.avif",
    technologies: ["React 19", "Next.js 16", "TypeScript", "Algorithms", "Tailwind CSS"],
    liveUrl: "https://algo-visualizer-devbysukhen.vercel.app",
    githubUrl: "https://github.com/Publo-52/algo-visualizer",
    features: [
      "Real-time sorting visualizer with comparison/swap counters, array size sliders, and speed controls",
      "Grid pathfinding visualizer with draggable Start/Target nodes and interactive wall drawing",
      "AI Big-O complexity breakdown providing step-by-step code explanations",
      "Performance comparison matrix across random, sorted, and reversed arrays"
    ],
    challenges: "Synchronizing non-blocking state updates for 60fps array bar animations during algorithm steps.",
    solution: "Utilized memoized array states paired with asynchronous timeout delays for smooth 60fps transitions."
  }
];

export const testimonials = [
  {
    name: "Raja Das",
    role: "E-Commerce Client",
    image: "/images/raja.jpg",
    rating: 5,
    category: "Full-Stack Dev",
    project: "Nexus Storefront",
    verified: true,
    quote: "It was a joy working with Sukhen. He understood our vision, refined our ideas, and built an e-commerce platform that truly wowed us."
  },
  {
    name: "Niraj Shing",
    role: "Brand Identity Client",
    image: "/images/niraj.jpg",
    rating: 5,
    category: "Branding & UI",
    project: "Brand Assets & Identity",
    verified: true,
    quote: "Incredible branding work — Sukhen captured our ethos and created an identity our customers truly connect with."
  },
  {
    name: "Sandip Mayti",
    role: "Web App Client",
    image: "/images/sandip.png",
    rating: 5,
    category: "Web Design",
    project: "Campaign Landing Page",
    verified: true,
    quote: "We're extremely satisfied with the landing page Sukhen created for our campaign — it's fast, highly efficient, and elegantly coded."
  },
  {
    name: "Ranjan Mondal",
    role: "Software Engineering Client",
    image: "/images/ranjan.jpg",
    rating: 5,
    category: "Full-Stack Dev",
    project: "Custom Web Application",
    verified: true,
    quote: "We are thoroughly impressed with the landing page Sukhen crafted for our campaign — it combines speed, efficiency, and exceptional code quality."
  }
];

export const faqs = [
  {
    question: "What's your typical project timeline?",
    answer: "Project timelines vary depending on scope and complexity. A standard website takes 4–8 weeks from initial consultation to launch. DevSecOps & custom AI applications take 6–10 weeks. I provide a detailed timeline after our initial scope discussion."
  },
  {
    question: "Do you offer ongoing maintenance after launch?",
    answer: "Yes, I offer maintenance packages including software updates, security monitoring, performance tuning, and technical support to ensure your application runs smoothly."
  },
  {
    question: "What technologies do you work with?",
    answer: "My stack includes HTML5, CSS3, JavaScript, TypeScript, React, Next.js, Node.js, Express, PostgreSQL, Supabase, MongoDB, Tailwind CSS, Kubernetes, Trivy, and Docker."
  },
  {
    question: "How do you handle revisions and feedback?",
    answer: "Collaboration is key. I include 2–3 revision rounds in proposals and schedule regular check-ins to review progress and gather your input at key milestones."
  },
  {
    question: "What's your pricing structure?",
    answer: "I offer fixed-price projects for well-defined scopes and hourly rates for flexible, open-ended work. I provide a clear, itemized proposal based on your specific goals."
  }
];

export const experience = [
  {
    year: "2024 — Present",
    role: "Web Designer & Full-Stack Developer",
    company: "DevBySukhen (Self-Employed / Freelance)",
    description: "Engineering responsive web applications, DevSecOps deployment platforms, AI security threat analyzers, REST APIs, and custom UI components for clients."
  }
];

export const education = [
  {
    degree: "BCA (Honors) — Bachelor of Computer Applications",
    institution: "University Studies",
    period: "2023 — 2026",
    coursework: [
      "Web Design & Development",
      "Database Management Systems (DBMS)",
      "Data Structures & Algorithms",
      "Object-Oriented Programming (Java/C++)",
      "Software Engineering & Testing",
      "Computer Security & Networking"
    ]
  }
];
