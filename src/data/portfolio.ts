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
  Wrench,
  Search
} from "lucide-react";

export const personalInfo = {
  name: "Sukhen Das",
  brandName: "DevBySukhen",
  role: "Web Designer & Developer",
  tagline: "Crafting immersive digital experiences that blend stunning design with cutting-edge technology.",
  about: "I'm a passionate digital creator with over 1.5+ years of experience in web design and development. My journey began tinkering with HTML and CSS to create websites. Since then, I've honed my skills through formal education (BCA Honors) and real-world projects, helping businesses of all sizes establish a powerful digital presence.",
  aboutExtended: "What sets me apart is my unique blend of technical expertise and artistic vision. I don't just build websites — I create digital experiences that captivate audiences and drive results.",
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
  { label: "Projects Completed", value: "12+", count: 12 },
  { label: "Happy Clients", value: "5+", count: 5 },
  { label: "Years Experience", value: "1.5+", count: 1.5 },
  { label: "Awards Won", value: "4", count: 4 }
];

export const services = [
  {
    id: "web-dev",
    icon: Laptop,
    title: "Web Design & Development",
    description: "Custom, responsive websites built with the latest technologies to ensure optimal performance and user experience across all devices."
  },
  {
    id: "ui-ux",
    icon: Palette,
    title: "UI/UX Design",
    description: "Intuitive interfaces and seamless user experiences that drive engagement and conversions through thoughtful visual design."
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Website Maintenance & Optimization",
    description: "Ensure your website runs smoothly with regular updates, performance tuning, security checks, and continuous technical support."
  },
  {
    id: "seo",
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    description: "Improve your website's visibility on search engines through keyword research, on-page optimization, and strategic performance tuning."
  }
];

export const skills = {
  frontend: [
    { name: "HTML5 & CSS3", icon: Layout },
    { name: "JavaScript (ES6+)", icon: Terminal },
    { name: "TypeScript", icon: Code2 },
    { name: "React.js", icon: Code2 },
    { name: "Next.js", icon: Globe },
    { name: "Tailwind CSS", icon: Layout },
  ],
  backend: [
    { name: "Node.js", icon: Server },
    { name: "Express.js", icon: Server },
    { name: "RESTful APIs", icon: Globe },
    { name: "Authentication (JWT)", icon: Lock },
  ],
  database: [
    { name: "PostgreSQL", icon: Database },
    { name: "Supabase", icon: Database },
    { name: "MongoDB", icon: Database },
    { name: "SQL Querying", icon: Database },
  ],
  tools: [
    { name: "Git & GitHub", icon: Terminal },
    { name: "VS Code", icon: Code2 },
    { name: "Figma & UI Design", icon: Palette },
    { name: "Vercel & Netlify", icon: Globe },
  ],
  interests: [
    { name: "Web Security & OWASP", icon: Shield },
    { name: "Cloud Architecture", icon: Shield },
    { name: "AI Integration", icon: Cpu },
    { name: "SEO Optimization", icon: Search },
  ]
};

export const projectCategories = ["All", "Web Design", "UI/UX", "Branding", "Digital Art"];

export const projects = [
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
    answer: "Project timelines vary depending on scope and complexity. A standard website typically takes 4–8 weeks from initial consultation to launch. More complex projects like e-commerce sites or custom web applications may take 8–12 weeks. I provide a detailed timeline after our initial scope discussion."
  },
  {
    question: "Do you offer ongoing maintenance after launch?",
    answer: "Yes, I offer maintenance packages to suit different needs. These include regular software updates, security monitoring, performance optimization, and content updates to ensure your site remains secure, fast, and performing optimally."
  },
  {
    question: "What technologies do you work with?",
    answer: "My core stack includes HTML5, CSS3, JavaScript (ES6+), React, Next.js, Node.js, Express, PostgreSQL, Supabase, MongoDB, and Tailwind CSS. I also design in Figma and Photoshop."
  },
  {
    question: "How do you handle revisions and feedback?",
    answer: "Collaboration is key to successful projects. I include 2–3 revision rounds in my proposals and schedule regular check-ins to review progress and gather your input at key project milestones."
  },
  {
    question: "What's your pricing structure?",
    answer: "I offer both fixed-price projects for well-defined scopes and hourly rates for flexible, open-ended work. After our initial consultation, I provide a clear, itemized proposal based on your specific goals."
  }
];

export const experience = [
  {
    year: "2024 — Present",
    role: "Web Designer & Full-Stack Developer",
    company: "DevBySukhen (Self-Employed / Freelance)",
    description: "Designing and developing responsive websites, web applications, custom UI components, and backend REST APIs for clients and independent projects."
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
