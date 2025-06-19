// ./js/theme.js
function enableDarkTheme() {
    document.body.classList.add('dark-theme');
    document.getElementById('theme-toggle').innerHTML = '<i class="fas fa-sun"></i>';
    isDarkTheme = true;
    localStorage.setItem('theme', 'dark');
}

function disableDarkTheme() {
    document.body.classList.remove('dark-theme');
    document.getElementById('theme-toggle').innerHTML = '<i class="fas fa-moon"></i>';
    isDarkTheme = false;
    localStorage.setItem('theme', 'light');
}

// Инициализация темы
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        enableDarkTheme();
    }
    
    document.getElementById('theme-toggle').addEventListener('click', () => {
        if (isDarkTheme) disableDarkTheme();
        else enableDarkTheme();
    });
});