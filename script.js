document.addEventListener('DOMContentLoaded', function () {
    // Check if mobile device
    const isMobile = window.innerWidth <= 768;

    // Mobile Menu Toggle
    document.getElementById('mobile-menu-button')?.addEventListener('click', function () {
        const menu = document.getElementById('mobile-menu');
        if (menu) {
            menu.classList.toggle('hidden');
            document.body.classList.toggle('no-scroll', !menu.classList.contains('hidden'));

            // Mobile menu animation
            if (isMobile) {
                if (menu.classList.contains('hidden')) {
                    menu.style.animation = 'slideUp 0.4s ease-out forwards';
                } else {
                    menu.style.animation = 'slideDown 0.4s ease-out forwards';
                }
            }
        }
    });

    // Typing Animation
    const typingElement = document.querySelector('.typing');
    if (typingElement) {
        typingElement.textContent = 'Web Designer & Developer';
        initTypingEffect();
    }

    // Initialize all functions
    animateOnScroll();
    setupFAQAccordion();
    setupPortfolioFilter();
    setupTestimonialForm();
    setupBackToTopButton();
    setupSmoothScrolling();
    if (!isMobile) setupCustomCursor();
    setupCounters();
    setupTestimonials();

    // Mobile-specific animations
    if (isMobile) {
        setupMobileAnimations();
    }

    // Initialize EmailJS
    emailjs.init("i7bzv9oIiI_04XGKs"); // Replace with your public key

    // Show page after load
    window.addEventListener('load', () => {
        document.body.style.opacity = '1';
    });
});

// Mobile Animations Setup
function setupMobileAnimations() {
    // Hero section animation
    const heroSection = document.querySelector('#home');
    if (heroSection) {
        heroSection.style.animation = 'mobileFadeInUp 0.8s ease-out forwards';
    }

    // Touch feedback for buttons
    document.querySelectorAll('a, button').forEach(btn => {
        btn.addEventListener('touchstart', function () {
            this.style.transform = 'scale(0.95)';
        });
        btn.addEventListener('touchend', function () {
            this.style.transform = 'scale(1)';
        });
    });

    // Portfolio items animation
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach((item, index) => {
        item.style.animation = 'mobileFadeInUp 0.6s ease-out forwards';
        item.style.animationDelay = `${index * 0.1}s`;
        item.style.opacity = '0';
    });

    // Testimonial cards animation
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach((card, index) => {
        card.style.animation = 'mobileFadeIn 0.5s ease-out forwards';
        card.style.animationDelay = `${index * 0.15}s`;
        card.style.opacity = '0';
    });

    // Contact form animation
    const contactFormInputs = document.querySelectorAll('#contact-form input, #contact-form textarea');
    contactFormInputs.forEach((input, index) => {
        input.style.animation = 'mobileFadeInRight 0.5s ease-out forwards';
        input.style.animationDelay = `${index * 0.1}s`;
        input.style.opacity = '0';
    });
}

// Typing Effect
function initTypingEffect() {
    const typingElements = document.querySelectorAll('.typing');
    typingElements.forEach(el => {
        const text = el.textContent || 'Web Designer & Developer';
        el.innerHTML = '';
        el.style.borderRight = '3px solid var(--primary)';
        let i = 0;
        const typing = setInterval(() => {
            if (i < text.length) {
                el.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(typing);
                setInterval(() => {
                    el.style.borderRight = el.style.borderRight === '3px solid transparent'
                        ? '3px solid var(--primary)' : '3px solid transparent';
                }, 500);
            }
        }, 100);
    });
}

// FAQ Accordion
function setupFAQAccordion() {
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const faqContent = question.nextElementSibling;
            const icon = question.querySelector('i');
            faqItem.classList.toggle('active');
            if (faqContent.style.maxHeight) {
                faqContent.style.maxHeight = null;
                if (icon) icon.style.transform = 'rotate(0deg)';
            } else {
                faqContent.style.maxHeight = faqContent.scrollHeight + 'px';
                if (icon) icon.style.transform = 'rotate(180deg)';
            }
        });
    });
}

// Portfolio Filter
function setupPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.portfolio-filter button');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const filterValue = button.getAttribute('data-filter');
            portfolioItems.forEach((item, index) => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    setTimeout(() => {
                        item.style.display = 'block';
                        item.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.1}s`;
                    }, 50);
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Testimonial Form
function setupTestimonialForm() {
    const ratingStars = document.querySelectorAll('.rating-star');
    const ratingValue = document.getElementById('rating-value');
    const testimonialForm = document.getElementById('testimonial-form');
    if (!ratingStars.length || !ratingValue || !testimonialForm) return;

    ratingStars.forEach(star => {
        star.addEventListener('click', () => {
            const value = star.getAttribute('data-value');
            ratingValue.value = value;
            ratingStars.forEach((s, index) => {
                if (index < value) {
                    s.classList.add('text-yellow-400');
                    s.classList.remove('text-gray-400', 'hover:text-yellow-400');
                } else {
                    s.classList.remove('text-yellow-400');
                    s.classList.add('text-gray-400', 'hover:text-yellow-400');
                }
            });
        });
    });

    testimonialForm.addEventListener('submit', function (e) {
        e.preventDefault();
        this.style.transform = 'scale(0.98)';

        emailjs.send("service_weu46mj", "template_osiyarc", {
            from_name: document.getElementById("name").value,
            role: document.getElementById("role").value,
            rating: document.getElementById("rating-value").value,
            message: document.getElementById("testimonial").value
        }).then(function (response) {
            alert("✅ Feedback sent successfully!");
            testimonialForm.reset();
            ratingStars.forEach(star => {
                star.classList.remove('text-yellow-400');
                star.classList.add('text-gray-400', 'hover:text-yellow-400');
            });
            ratingValue.value = '0';
        }, function (error) {
            alert("❌ Failed to send feedback. Please try again.");
        }).finally(() => {
            this.style.transform = 'scale(1)';
        });
    });
}

// Back To Top Button
function setupBackToTopButton() {
    const backToTopButton = document.getElementById('back-to-top');
    if (!backToTopButton) return;

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.remove('opacity-0', 'invisible');
            backToTopButton.classList.add('opacity-100', 'visible');
        } else {
            backToTopButton.classList.remove('opacity-100', 'visible');
            backToTopButton.classList.add('opacity-0', 'invisible');
        }
    });
}

// Smooth Scrolling
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({ top: targetElement.offsetTop - 80, behavior: 'smooth' });
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    document.body.classList.remove('no-scroll');
                }
            }
        });
    });
}

// Custom Cursor (Desktop only)
function setupCustomCursor() {
    if (window.innerWidth <= 768) return;

    const cursor = document.createElement('div');
    const cursorFollower = document.createElement('div');
    cursor.classList.add('cursor');
    cursorFollower.classList.add('cursor-follower');
    document.body.appendChild(cursor);
    document.body.appendChild(cursorFollower);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        setTimeout(() => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    });

    document.querySelectorAll('a, button, .gradient-border').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(0.5)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
}

// Counter Animation
function setupCounters() {
    const statsSection = document.querySelector('#stats');
    if (!statsSection) return;

    const statsObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entries[0].target);
        }
    });

    statsObserver.observe(statsSection);
}

function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(animateCounters, 1);
        } else {
            counter.innerText = target;
        }
    });
}

// Scroll Animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const animationType = entry.target.getAttribute('data-animation') || 'fadeInUp';
                const delay = entry.target.getAttribute('data-delay') || '0';
                entry.target.style.animation = `${animationType} 0.8s ease-out forwards ${delay}s`;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => {
        observer.observe(element);
    });
}

// Testimonial Slider
function setupTestimonials() {
    const track = document.getElementById("testimonial-track");
    if (!track) return;

    let slides = Array.from(track.children);
    const dotContainer = document.createElement("div");
    dotContainer.className = "testimonial-dots";
    track.parentElement.appendChild(dotContainer);

    let index = 0;
    const intervalTime = 4000;
    let interval;
    let isHovered = false;

    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);
    track.appendChild(firstClone);
    track.insertBefore(lastClone, slides[0]);

    slides = Array.from(track.children);
    track.style.transform = `translateX(-101%)`;

    slides.forEach((_, i) => {
        if (i !== 0 && i !== slides.length - 1) {
            const dot = document.createElement("div");
            dot.className = "testimonial-dot";
            dot.addEventListener("click", () => goToSlide(i - 1));
            dotContainer.appendChild(dot);
        }
    });

    function updateDots() {
        document.querySelectorAll(".testimonial-dot").forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    }

    function goToSlide(i) {
        index = i;
        track.style.transition = 'transform 0.8s ease-in-out';
        track.style.transform = `translateX(-${(index + 1) * 101}%)`;
        updateDots();
    }

    function autoSlide() {
        if (!isHovered) {
            index++;
            track.style.transition = 'transform 0.8s ease-in-out';
            track.style.transform = `translateX(-${(index + 1) * 101}%)`;

            if (index >= slides.length - 2) {
                setTimeout(() => {
                    track.style.transition = 'none';
                    index = 0;
                    track.style.transform = `translateX(-101%)`;
                    updateDots();
                }, 800);
            }
            updateDots();
        }
    }

    function startAutoSlide() {
        interval = setInterval(autoSlide, intervalTime);
    }

    track.addEventListener("mouseenter", () => { isHovered = true; });
    track.addEventListener("mouseleave", () => { isHovered = false; });

    const prev = document.createElement("div");
    prev.className = "testimonial-nav prev";
    prev.innerHTML = "&#10094;";
    prev.onclick = () => {
        if (index <= 0) {
            track.style.transition = 'none';
            index = slides.length - 3;
            track.style.transform = `translateX(-${(index + 1) * 101}%)`;
            setTimeout(() => {
                track.style.transition = 'transform 0.8s ease-in-out';
                index--;
                track.style.transform = `translateX(-${(index + 1) * 101}%)`;
            }, 50);
        } else {
            index--;
            track.style.transition = 'transform 0.8s ease-in-out';
            track.style.transform = `translateX(-${(index + 1) * 101}%)`;
        }
        updateDots();
    };

    const next = document.createElement("div");
    next.className = "testimonial-nav next";
    next.innerHTML = "&#10095;";
    next.onclick = () => autoSlide();

    track.parentElement.appendChild(prev);
    track.parentElement.appendChild(next);

    updateDots();
    startAutoSlide();
}

// Contact Form Email Sending
function sendMail() {
    const btn = document.getElementById("sendBtn");
    const btnText = document.getElementById("btnText");
    const form = document.getElementById("contact-form");

    // Get form values
    const firstname = document.getElementById("first-name").value.trim();
    const lastname = document.getElementById("last-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim() || "New Contact Form Submission";
    const message = document.getElementById("message").value.trim();

    // Validate form fields
    if (!firstname || !email || !message) {
        alert("Please fill in all required fields");
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email address");
        return;
    }

    // Disable button during sending
    btn.disabled = true;
    btnText.innerText = "Sending...";

    // Try Formspree first
    const formspreeUrl = "https://formspree.io/f/manjkwqg";

    fetch(formspreeUrl, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: `${firstname} ${lastname}`,
            email: email,
            subject: subject,
            message: message
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Formspree failed');
            }
            return response.json();
        })
        .then(data => {
            alert("Message sent successfully!");
            form.reset();
        })
        .catch(error => {
            console.error("Formspree error:", error);
            alert("Something went wrong. Opening your email client as a fallback.");
            const mailBody = `Name: ${firstname} ${lastname}\nEmail: ${email}\n\nMessage:\n${message}`;
            window.location.href = `mailto:devbysukhen@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailBody)}`;
        })
        .finally(() => {
            btn.disabled = false;
            btnText.innerText = "Send Message";
        });
}
// projrct code
function setupPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.portfolio-filter button');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const viewAllBtn = document.getElementById('view-all-projects');

    function showAllProjects() {
        filterButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.filter === 'all') {
                btn.classList.add('active');
            }
        });

        portfolioItems.forEach((item, index) => {
            item.style.display = 'block';
            item.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.1}s`;
        });
    }

    viewAllBtn.addEventListener('click', function (e) {
        e.preventDefault();
        showAllProjects();
        const portfolioSection = document.getElementById('portfolio');
        if (portfolioSection) {
            portfolioSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filterValue = this.dataset.filter;

            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            portfolioItems.forEach((item, index) => {
                if (filterValue === 'all' || item.dataset.category === filterValue) {
                    setTimeout(() => {
                        item.style.display = 'block';
                        item.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.1}s`;
                    }, 50);
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    showAllProjects();
}




