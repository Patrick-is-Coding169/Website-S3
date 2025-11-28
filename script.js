// Navigation zwischen Sektionen
function showSection(sectionId) {
    // Alle Sektionen verstecken
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Gewählte Sektion anzeigen
    document.getElementById(sectionId).classList.add('active');
    
    // Navigation Links aktualisieren
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Aktiven Link markieren
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    // Mobile Menu schließen
    document.getElementById('navLinks').classList.remove('active');
    
    // Nach oben scrollen
    window.scrollTo(0, 0);
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Scroll Animationen für fade-in Effekte
function handleScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Event Listeners
window.addEventListener('scroll', handleScrollAnimations);
window.addEventListener('load', handleScrollAnimations);

// Initial call für bereits sichtbare Elemente
handleScrollAnimations();
