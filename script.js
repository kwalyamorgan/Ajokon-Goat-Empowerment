// Page Load Animation
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.display = 'none';
        }
    }, 2000);
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Mobile touch enhancements
if ('ontouchstart' in window) {
    // Add touch feedback for interactive elements
    document.querySelectorAll('.card, .impact-card, .btn-primary, .btn-secondary, .copy-btn, .overview-card').forEach(el => {
        el.addEventListener('touchstart', () => {
            el.style.transform = 'scale(0.98)';
        });
        el.addEventListener('touchend', () => {
            el.style.transform = '';
        });
    });
}

// Enhanced reveal animation on scroll
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.card, .profile, .step, .donate-card, .section-title, .about-content, .model-description, .impl-item, .impact-card, .overview-card, .project-card, .testimonial-card, .news-card, .partner-card').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.6s ease-out";
    observer.observe(el);
});

// Donate via M-Pesa
function copyNumber(id, feedbackId) {
    const number = document.getElementById(id).textContent;
    navigator.clipboard.writeText(number).then(() => {
        const feedback = document.getElementById(feedbackId);
        feedback.textContent = '✅ Copied to clipboard!';
        feedback.classList.add('show');
        setTimeout(() => {
            feedback.classList.remove('show');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
        alert('Failed to copy number. Please copy manually.');
    });
}

// Floating Animation for Card Icons
document.querySelectorAll('.card i').forEach(icon => {
    icon.style.animation = 'float 3s ease-in-out infinite';
});

// Pulse Effect on Buttons
document.querySelectorAll('.btn-primary, .btn-secondary, .copy-btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.animation = 'pulse 1s infinite';
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.animation = '';
    });
});

// Staggered Reveal for Grid Items
const gridObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0) scale(1)";
            }, index * 200);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.grid .card').forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px) scale(0.8)";
    card.style.transition = "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    gridObserver.observe(card);
});

// Hover Animation for Navigation Links
document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'scale(1.1) translateY(-2px)';
        link.style.transition = 'all 0.3s ease';
    });
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'scale(1) translateY(0)';
    });
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
    }
});

// Animated Counters for Impact Section
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.impact-number');
            counters.forEach(counter => {
                animateCounter(counter);
            });
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.impact-section').forEach(section => {
    counterObserver.observe(section);
});

// Animated Counters for CTA Section
const ctaCounterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.cta-stat .stat-number');
            counters.forEach(counter => {
                animateCounter(counter);
            });
            ctaCounterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.cta-section').forEach(section => {
    ctaCounterObserver.observe(section);
});

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const step = target / (duration / 16); // 60fps
    let current = 0;

    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Newsletter Form Handler
document.addEventListener('DOMContentLoaded', () => {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            if (email) {
                // Here you would typically send the email to your server
                alert('Thank you for subscribing! We\'ll keep you updated on our work.');
                newsletterForm.reset();
            }
        });
    }
});