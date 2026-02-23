localStorage.getItem('theme') 

function toggleTheme() 
{
    let themeLink = document.getElementById('theme');
    let imgLink = document.getElementById('hero-img');
    let faviconLink = document.getElementById('logo');
    
    if (themeLink.getAttribute('href') === 'style-dark.css') {
        themeLink.setAttribute('href', 'style-light.css');
        imgLink.setAttribute('src', 'hero.jpg');
        faviconLink.setAttribute('src', 'favicon.png');
        localStorage.setItem('theme', 'light');
    } else {
        themeLink.setAttribute('href', 'style-dark.css');
        imgLink.setAttribute('src', 'hero-dark.jpg');
        faviconLink.setAttribute('src', 'favicon-dark.png');
        localStorage.setItem('theme', 'dark');
    }
}



document.addEventListener('DOMContentLoaded', function() {
    
    let themeLink = document.getElementById('theme');
    let imgLink = document.getElementById('hero-img');
    let faviconLink = document.getElementById('logo');
    
    if (localStorage.getItem('theme') === 'dark') {
        if(imgLink) imgLink.setAttribute('src', 'hero-dark.jpg');
        if(faviconLink) faviconLink.setAttribute('src', 'favicon-dark.png');
    }
    else {
        if(imgLink) imgLink.setAttribute('src', 'hero.jpg');
        if(faviconLink) faviconLink.setAttribute('src', 'favicon.png');
    }
    
    const themeButton = document.getElementById('theme-button');
    themeButton.addEventListener('click', toggleTheme);
    
});