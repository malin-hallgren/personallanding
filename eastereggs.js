const secret = ["h", "e", "l", "l", "o"];
let input = [];

const easterModal = document.getElementById("easter-modal");
const closeButton = document.getElementById("easter-close");

/* Theme Switcher */
function getCurrentTheme() {
    return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
}

function applyTheme(theme) {
    const themeLink = document.getElementById('theme');
    const imgLink = document.getElementById('hero-img');
    const faviconLink = document.getElementById('logo');
    const isDark = theme === 'dark';

    if (themeLink) {
        themeLink.setAttribute('href', isDark ? 'style-dark.css' : 'style-light.css');
    }

    if (imgLink) {
        imgLink.setAttribute('src', isDark ? 'hero-dark.jpg' : 'hero.jpg');
    }

    if (faviconLink) {
        faviconLink.setAttribute('src', isDark ? 'favicon-dark.png' : 'favicon.png');
    }
}

function toggleTheme() {
    const swapTo = getCurrentTheme() === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', swapTo);
    applyTheme(swapTo);
}

document.addEventListener('DOMContentLoaded', function() {
    applyTheme(getCurrentTheme());
    document.getElementById('theme-button')?.addEventListener('click', toggleTheme);
});

/* Easter Egg Modal */

document.addEventListener("keydown", (keyPressed) => {
    if (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA") {
        return; // Ignore key presses when typing in input fields or textareas
    }

    input.push(keyPressed.key.toLowerCase());

    if (input.length > secret.length) {
        input.shift();
    }

    if (input.join("") === secret.join("")) {
        showEasterModal();
        input = [];
    }
});

function showEasterModal() {
    easterModal.classList.add("show");
}

function hideEasterModal() {
    easterModal.classList.remove("show");
}

closeButton.addEventListener("click", (e) => {
    e.preventDefault();
    hideEasterModal();
});
