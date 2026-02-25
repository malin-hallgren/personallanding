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