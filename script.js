// Mobile Menu Toggle
const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    // Basic CSS toggle for visibility in JS
    if (navMenu.style.display === "flex") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "flex";
        navMenu.style.flexDirection = "column";
        navMenu.style.position = "absolute";
        navMenu.style.top = "70px";
        navMenu.style.left = "0";
        navMenu.style.width = "100%";
        navMenu.style.background = "#fff";
        navMenu.style.padding = "20px";
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple reveal animation on scroll
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.card, .profile, .step, .donate-card').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.6s ease-out";
    observer.observe(el);
});

// Donate via M-Pesa
function donateViaMpesa() {
    let amount = prompt("Enter donation amount in KES (e.g., 100):");
    if (amount && !isNaN(amount) && amount > 0) {
        let recipient = "0702037855";
        let ussd = `*334*1*${amount}*${recipient}#`;
        window.location.href = `tel:${ussd}`;
    } else {
        alert("Please enter a valid amount.");
    }
}