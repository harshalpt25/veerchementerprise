// Navigation
function navigateToPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });

    const targetPage = document.getElementById(pageId + '-page');
    if (targetPage) {
        targetPage.style.display = 'block';
    }

    updateNavigation(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu();
}

function updateNavigation(currentPage) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === currentPage) {
            link.classList.add('active');
        }
    });
}

function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

function closeMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.remove('active');
}

// Form handling
function handleFormSubmit(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        company: document.getElementById('company').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = 'Thank you! We\'ll get back to you soon.';
    formMessage.style.display = 'block';

    setTimeout(() => {
        document.getElementById('contactForm').reset();
        formMessage.style.display = 'none';
    }, 3000);
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Show home page by default
    navigateToPage('home');

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const navMenu = document.getElementById('navMenu');
        const hamburger = document.getElementById('hamburger');
        const navLogo = document.querySelector('.nav-logo');

        if (!navMenu.contains(event.target) &&
            !hamburger.contains(event.target) &&
            !navLogo.contains(event.target)) {
            closeMenu();
        }
    });
});
