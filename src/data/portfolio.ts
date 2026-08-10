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

export const projectCategories = ["All", "DevSecOps", "AI & Security", "Algorithms & Web", "Web Design", "UI/UX", "Branding"];

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
  },
  {
    id: "nexus-ecommerce",
    title: "Nexus E-commerce",
    category: "Web Design",
    type: "Full-Stack E-commerce",
    description: "A modern online store with a seamless checkout experience, dynamic product catalog, cart management, and payment gateway integration.",
    image: "/images/port1.avif",
    technologies: ["React", "Node.js", "Express", "Tailwind CSS", "MongoDB"],
    liveUrl: "https://github.com/Publo-52",
    githubUrl: "https://github.com/Publo-52",
    features: [
      "Responsive storefront with high-resolution image previews",
      "Interactive cart management and real-time total calculations",
      "Secure user authentication and order tracking dashboard",
      "Optimized page speed and mobile checkout workflow"
    ],
    challenges: "Handling real-time cart state synchronization and optimizing asset delivery for mobile devices.",
    solution: "Implemented local storage caching alongside optimistic UI updates for instant interaction feedback."
  },
  {
    id: "fitness-app-ui",
    title: "Fitness App UI",
    category: "UI/UX",
    type: "Mobile App Interface",
    description: "A workout tracking application with a clean, high-contrast dark theme interface engineered for active health metrics monitoring.",
    image: "/images/port2.avif",
    technologies: ["Figma", "React", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://github.com/Publo-52",
    githubUrl: "https://github.com/Publo-52",
    features: [
      "Custom workout schedule planner and exercise logger",
      "Interactive progress graphs and calorie counter visuals",
      "Dark mode aesthetic crafted for OLED screens",
      "Component library designed for rapid scalability"
    ],
    challenges: "Designing intuitive micro-interactions that don't overwhelm users during workouts.",
    solution: "Streamlined the primary interface down to 3 core tabs with large touch targets and high-visibility typography."
  },
  {
    id: "brew-haven-branding",
    title: "Brew Haven Branding",
    category: "Branding",
    type: "Brand Identity & Web",
    description: "A complete visual identity and digital landing page designed for a premium craft coffee house brand.",
    image: "/images/port3.webp",
    technologies: ["Figma", "Web Design", "HTML5/CSS3", "JavaScript"],
    liveUrl: "https://github.com/Publo-52",
    githubUrl: "https://github.com/Publo-52",
    features: [
      "Custom typography and earthy color palette design system",
      "Interactive coffee bean menu showcase with roast filtering",
      "Location finder and online table reservation form",
      "Social media asset kit and brand style guidelines"
    ],
    challenges: "Capturing the cozy, artisanal physical cafe atmosphere within a digital browser experience.",
    solution: "Utilized warm ambient gradient colors, subtle parallax scroll motion, and rich typography styling."
  },
  {
    id: "vertex-solutions",
    title: "Vertex Solutions",
    category: "Web Design",
    type: "Corporate Website",
    description: "A high-performance corporate website designed for a technology consulting firm to present services, case studies, and client leads.",
    image: "/images/port4.avif",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://github.com/Publo-52",
    githubUrl: "https://github.com/Publo-52",
    features: [
      "Corporate service portfolio and case study showcases",
      "Lead generation contact forms with automated email alerts",
      "SEO-optimized pages scoring 98+ on Google Lighthouse",
      "Seamless responsive layout across desktop, tablet, and mobile"
    ],
    challenges: "Balancing enterprise corporate professionalism with modern dynamic animations.",
    solution: "Implemented glassmorphism cards and smooth scroll animations paired with structured typography."
  },
  {
    id: "character-portrait",
    title: "Character Portrait",
    category: "Digital Art",
    type: "Digital Artwork",
    description: "A detailed digital painting and character concept art piece created for a fantasy novel cover illustration.",
    image: "/images/port5.avif",
    technologies: ["Digital Art", "Photoshop", "UI Design"],
    liveUrl: "https://github.com/Publo-52",
    githubUrl: "https://github.com/Publo-52",
    features: [
      "High-resolution digital illustration with intricate lighting details",
      "Custom brushwork and digital painting techniques",
      "Exported print-ready 300 DPI master files"
    ],
    challenges: "Creating realistic specular lighting highlights and cloth texture physics.",
    solution: "Layered multiple blending modes with fine brush detail passes to achieve cinematic depth."
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    category: "UI/UX",
    type: "Data Dashboard",
    description: "A data visualization interface providing real-time sales metrics, traffic analytics, and user engagement charts.",
    image: "/images/port6.jpeg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
    liveUrl: "https://github.com/Publo-52",
    githubUrl: "https://github.com/Publo-52",
    features: [
      "Real-time chart filtering by date range (Day, Week, Month, Year)",
      "Interactive data cards showing KPI trends and growth percentages",
      "Customizable widget layout for custom admin views",
      "Export metrics report to CSV / PDF"
    ],
    challenges: "Preventing UI lag when re-rendering multi-series time charts.",
    solution: "Used memoized React components and throttled state updates to maintain fluid 60fps chart renders."
  }
];

export const testimonials = [
  {
    name: "Raja Das",
    role: "Student / Client",
    image: "/images/raja.jpg",
    rating: 5,
    quote: "It was a joy working with Sukhen. He understood our vision, refined our ideas, and built an e-commerce platform that truly wowed us."
  },
  {
    name: "Niraj Shing",
    role: "Student / Client",
    image: "/images/niraj.jpg",
    rating: 5,
    quote: "Incredible branding work — Sukhen captured our ethos and created an identity our customers truly connect with."
  },
  {
    name: "Sandip Mayti",
    role: "Student / Client",
    image: "/images/sandip.png",
    rating: 5,
    quote: "We're extremely satisfied with the landing page Sukhen created for our campaign — it's fast, highly efficient, and elegantly coded."
  },
  {
    name: "Ranjan Mondal",
    role: "Student / Client",
    image: "/images/ranjan.jpg",
    rating: 5,
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
