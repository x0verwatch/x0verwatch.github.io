// Simplified Particle System (Performance Optimized)
function createLightParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particles-container';
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
        overflow: hidden;
    `;
    
    document.body.appendChild(particleContainer);
    
    // Reduced from 50 to 15 particles for better performance
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: simpleFloat ${Math.random() * 15 + 15}s infinite linear;
        `;
        
        particleContainer.appendChild(particle);
    }
}

// Simplified CSS animation
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes simpleFloat {
        0% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
        }
        50% {
            opacity: 0.6;
        }
        100% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

// Start simplified particle system once
document.addEventListener('DOMContentLoaded', () => {
    createLightParticles();
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.98)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll(
        '.section-title, .timeline-item, .project-card, .skill-category, .cert-card, .award-card'
    );
    
    elementsToAnimate.forEach(el => observer.observe(el));
    
    // Initialize custom checkboxes
    initializeCheckboxes();
});

// Typing effect for hero subtitle
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing effect
document.addEventListener('DOMContentLoaded', () => {
    const subtitle = document.querySelector('.hero-description');
    if (subtitle) {
        const originalText = subtitle.textContent;
        setTimeout(() => {
            typeWriter(subtitle, originalText, 50);
        }, 1000);
    }
});

// Optimized Typewriter Effect
document.addEventListener('DOMContentLoaded', () => {
    const typewriter = document.getElementById('typewriter');
    const texts = [
        'Cybersecurity Engineer',
        'Threat Hunter', 
        'DFIR Specialist'
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let speed = 150;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typewriter.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            speed = 75;
        } else {
            typewriter.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            speed = 150;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            speed = 3000; // Longer pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            speed = 1000; // Longer pause before next word
        }
        
        setTimeout(type, speed);
    }
    
    // Start typewriter after page load
    setTimeout(() => {
        type();
    }, 2500);
});

// Contact form handling
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Create mailto link
            const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
            const mailtoLink = `mailto:qaseem.infosec@gmail.com?subject=${subject}&body=${body}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Reset form
            this.reset();
            
            // Show success message
            showNotification('Message prepared! Your email client should open now.', 'success');
        });
    }
});

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#ffffff' : '#1a1a1a'};
        color: ${type === 'success' ? '#000000' : '#ffffff'};
        padding: 1rem 2rem;
        border-radius: 8px;
        z-index: 9999;
        font-weight: 600;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        border: 1px solid ${type === 'success' ? '#e5e7eb' : '#333'};
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const gridOverlay = document.querySelector('.grid-overlay');
    
    if (hero && gridOverlay) {
        const rate = scrolled * -0.5;
        gridOverlay.style.transform = `translate3d(0, ${rate}px, 0)`;
    }
});

// Stats counter animation
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.ceil(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            if (statNumber && !statNumber.classList.contains('animated')) {
                statNumber.classList.add('animated');
                const target = parseInt(statNumber.textContent.replace('+', ''));
                animateCounter(statNumber, target);
            }
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const stats = document.querySelectorAll('.stat');
    stats.forEach(stat => statsObserver.observe(stat));
});

// Add loading animation
document.addEventListener('DOMContentLoaded', () => {
    // Hide loading screen if exists
    const loader = document.querySelector('.loader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.remove();
            }, 500);
        }, 1000);
    }
    
    // Add fade-in effect to hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 500);
    }
});

// Premium Page Loading Animation
window.addEventListener('load', () => {
    const loader = document.getElementById('page-loader');
    setTimeout(() => {
        loader.classList.add('hidden');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 800);
    }, 1000);
});

// Removed tilt effect for better performance

// Add active link highlighting in navigation
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add CSS for active nav link
const style = document.createElement('style');
style.textContent = `
    .nav-menu a.active {
        color: #ffffff !important;
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.5) !important;
    }
    
    .nav-menu a.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style);

// Removed cursor effects for better performance

// Custom Checkbox Enhancements
function initializeCheckboxes() {
    const checkboxes = document.querySelectorAll('.custom-checkbox input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
        // Add click sound effect (optional)
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                // Add a subtle glow effect when checked
                this.closest('.custom-checkbox-container').style.animation = 'checkboxGlow 0.5s ease-out';
                setTimeout(() => {
                    this.closest('.custom-checkbox-container').style.animation = '';
                }, 500);
            }
        });
        
        // Add keyboard accessibility
        checkbox.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.checked = !this.checked;
                this.dispatchEvent(new Event('change'));
            }
        });
    });
}

// Add checkbox glow animation
const checkboxStyle = document.createElement('style');
checkboxStyle.textContent = `
    @keyframes checkboxGlow {
        0% {
            transform: scale(1);
            filter: drop-shadow(0 0 0 rgba(0, 255, 159, 0));
        }
        50% {
            transform: scale(1.02);
            filter: drop-shadow(0 0 10px rgba(0, 255, 159, 0.5));
        }
        100% {
            transform: scale(1);
            filter: drop-shadow(0 0 0 rgba(0, 255, 159, 0));
        }
    }
`;
document.head.appendChild(checkboxStyle);

// Initialize custom checkboxes
document.addEventListener('DOMContentLoaded', () => {
    initializeCheckboxes();
});
