document.addEventListener("DOMContentLoaded", function () {
    // Haal de knoppen op
    const projectsBtn = document.querySelector('.header__button--projects');
    const aboutBtn = document.querySelector('.header__button--about');
    const contactBtn = document.querySelector('.header__button--contact');

    // Voeg scrollgedrag toe aan de knoppen
    projectsBtn.addEventListener('click', () => {
        document.querySelector('.section--projects').scrollIntoView({ behavior: 'smooth' });
    });

    aboutBtn.addEventListener('click', () => {
        document.querySelector('.section--about').scrollIntoView({ behavior: 'smooth' });
    });

    contactBtn.addEventListener('click', () => {
        document.querySelector('.section--contact').scrollIntoView({ behavior: 'smooth' });
    });

    // Voeg hier eventueel taalwisselfunctionaliteit toe
});


class LanguageToggle {
    constructor() {
        this.languageToggle = document.getElementById("language-toggle");
        this.headerTitle = document.querySelector(".header__title");
        this.projectsButton = document.querySelector(".header__button--projects");
        this.aboutButton = document.querySelector(".header__button--about");
        this.contactButton = document.querySelector(".header__button--contact");

        this.setupEventListeners();
    }

    setupEventListeners() {
        this.languageToggle.addEventListener("click", () => this.toggleLanguage());
    }

    toggleLanguage() {
        if (this.languageToggle.textContent === "Taal") {
            this.languageToggle.textContent = "Language";
            this.headerTitle.textContent = "Uday Singh";
            this.projectsButton.textContent = "My Projects";
            this.aboutButton.textContent = "About Me";
            this.contactButton.textContent = "Contact";
        } else {
            this.languageToggle.textContent = "Taal";
            this.headerTitle.textContent = "Uday Singh";
            this.projectsButton.textContent = "Mijn Projecten";
            this.aboutButton.textContent = "Over Mij";
            this.contactButton.textContent = "Contact";
        }
    }
}

// Maak een nieuw LanguageToggle object nadat de pagina is geladen
window.addEventListener("load", () => {
    const languageToggle = new LanguageToggle();
});


class ScrollToTopButton {
    constructor() {
        this.button = document.getElementById("scroll-to-top");
        if (this.button) {
            this.addEventListeners();
        }
    }

    addEventListeners() {
        // Voeg een eventlistener toe om te detecteren wanneer er wordt gescrold
        window.addEventListener("scroll", () => this.toggleVisibility());

        // Voeg een eventlistener toe om naar de bovenkant van de pagina te scrollen wanneer erop wordt geklikt
        this.button.addEventListener("click", () => this.scrollToTop());
    }

    toggleVisibility() {
        if (window.scrollY >= 0) {
            this.button.style.display = "block"; // Toon de knop als je omlaag scrollt
        } else {
            this.button.style.display = "none"; // Verberg de knop als je bovenaan bent
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Scroll soepel naar boven
        });
    }
}

// Maak een nieuw ScrollToTopButton object als de knop aanwezig is
document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopButton = new ScrollToTopButton();
});

