// ./js/time.js
function updateTime() {
    const now = new Date();
    const timeElement = document.getElementById('current-time');
    if (timeElement) {
        timeElement.textContent = now.toLocaleTimeString([], {
            hour: '2-digit', 
            minute: '2-digit'
        });
    }
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    setInterval(updateTime, 1000);
    updateTime();
});