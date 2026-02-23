
if (localStorage.getItem('theme') === 'dark') {
    document.getElementById('theme').setAttribute('href', 'style-dark.css');    
}
else {
    document.getElementById('theme').setAttribute('href', 'style-light.css');
}
