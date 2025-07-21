# 💼 DevBySukhen - Professional Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Responsive](https://img.shields.io/badge/Responsive-Yes-brightgreen)](https://devbysukhen.github.io)
![Tech Stack](https://img.shields.io/badge/HTML5-TailwindCSS-JavaScript-orange)

A cutting-edge portfolio website demonstrating modern web development capabilities with exceptional UX design principles.

---

## 🌟 Key Features

### 🎯 Core Functionality
- **Interactive UI Components** – Custom animated cursor,  
- **Dynamic Content** – Typing animation, filterable project gallery  
- **Professional Contact System** – EmailJS integration with form validation  
- **Performance Optimized** – 95+ Lighthouse score (Desktop)

### ⚙️ Technical Highlights
- Mobile-first responsive design  
- CSS custom properties for theme management  
- Intersection Observer API for scroll effects  
- Modular JavaScript architecture with clear separation of concerns

---

## 🛠 Technology Stack

| Category         | Technologies                          |
|------------------|---------------------------------------|
| Frontend         | HTML5, CSS3, JavaScript (ES6+)        |
| CSS Framework    | Tailwind CSS                          |
| Animation        | CSS Transforms, Transitions, GSAP     |
| Email Integration| EmailJS                               |
| Icons            | Font Awesome 6                        |

---

## 📁 Project Architecture

src/
├── assets/
│ ├── images/ # Optimized project images
│ └── pdf/ # Downloadable resources (e.g., resume)
├── css/
│ └── style.css # Custom styles (with Tailwind classes)
├── js/
│ └── main.js # Modular JavaScript logic
└── index.html # Semantic HTML5 structure


---

## 🔗 Professional Integrations

### 📧 EmailJS Configuration

```javascript
// Initialize EmailJS
emailjs.init("YOUR_PUBLIC_KEY");

// Send email
emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
  from_name: "Client Name",
  email_id: "client@example.com",
  message: "Project details or inquiry"
});

🚀 Performance Optimization
✅ Critical CSS inlined
🖼️ Lazy-loaded images
⏱️ Minimized render-blocking resources
⚡ Efficient animation using will-change and hardware acceleration

⚙️ Setup & Deployment
git clone https://github.com/DevBySukhen/portfolio.git
cd portfolio

🏭 Production Deployment (Asset Minification)
🧪 Local Development
# Install build tools (if not already installed)
npm install -g clean-css-cli uglify-js

# Minify CSS
cleancss -o css/style.min.css css/style.css

# Minify JS
uglifyjs js/main.js -o js/main.min.js

📄 License
This project is licensed under the MIT License – you are free to use, modify, and distribute.

🙏 Acknowledgments
Tailwind Labs – CSS Framework
Font Awesome – Icon Toolkit
EmailJS – Contact form integration
All open-source contributors and libraries

📬 Professional Contact
📧 Email: devbysukhen@gmail.com

🌐 Live Site: portfolio.devbysukhen.com

💼 LinkedIn: linkedin.com/in/sukhen-das

---

### ✅ Ready To Use!

Just:
- Replace `"YOUR_PUBLIC_KEY"`, `"YOUR_SERVICE_ID"` etc. with real EmailJS values.
- Adjust paths or repo name if needed.
- Push this into your GitHub repo as `README.md`.

Let me know if you’d like:
- A **dark version badge**
- A **"Made with 💖 by Sukhen Das" footer**
- A **lightweight Bengali version for local audiences**

Keep it up — you're documenting like a pro! 🚀

