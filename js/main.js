// ./js/main.js
function closeWelcomeModal() {
    document.getElementById('welcome-modal').classList.remove('active');
    
    // Воспроизведение звука
    const audio = new Audio('./media/media_startup.mp3');
    audio.volume = 0.3;
    audio.play().catch(e => console.log("Ошибка воспроизведения:", e));
}

function toggleStartMenu(event) {
    if (event) event.stopPropagation();
    
    const menu = document.getElementById('start-menu');
    const startButton = document.querySelector('.os-icon');
    
    // Переключаем состояние меню
    const isVisible = menu.style.display === 'flex';
    menu.style.display = isVisible ? 'none' : 'flex';
    
    // Переключаем подсветку кнопки
    if (isVisible) {
        startButton.classList.remove('active');
    } else {
        startButton.classList.add('active');
        // Позиционируем меню относительно иконки
        positionStartMenu();
    }
}

function closeStartMenu() {
    const menu = document.getElementById('start-menu');
    const startButton = document.querySelector('.os-icon');
    
    menu.style.display = 'none';
    startButton.classList.remove('active');
}

function positionStartMenu() {
    const menu = document.getElementById('start-menu');
    const startButton = document.querySelector('.os-icon');
    
    if (!menu || !startButton) return;
    
    const rect = startButton.getBoundingClientRect();
    
    // Убедимся, что меню не выходит за пределы экрана
    const menuWidth = menu.offsetWidth;
    const menuHeight = menu.offsetHeight;
    const windowWidth = window.innerWidth;
    
    let left = rect.left;
    let bottom = window.innerHeight - rect.top + 10; // 10px отступ сверху
    
    // Корректировка для правого края
    if (left + menuWidth > windowWidth) {
        left = windowWidth - menuWidth - 20;
    }
    
    // Корректировка для верхнего края
    if (bottom + menuHeight > window.innerHeight) {
        bottom = window.innerHeight - menuHeight - 20;
    }
    
    menu.style.left = `${left}px`;
    menu.style.bottom = `${bottom}px`;
}

function mainOnLoad() {
    // Инициализация меню
    document.querySelector('.os-icon')?.addEventListener('click', toggleStartMenu);
    
    // Закрытие меню при клике вне его
    document.addEventListener('click', (e) => {
        if (!e.target.closest('#start-menu') && !e.target.closest('.os-icon')) {
            closeStartMenu();
        }
    });
    
    // Закрытие меню при выборе пункта
    document.querySelectorAll('#start-menu .menu-item').forEach(item => {
        item.addEventListener('click', closeStartMenu);
    });
    
    // Закрытие меню при открытии окна
    const originalOpenWindow = window.openWindow;
    window.openWindow = function(windowId) {
        closeStartMenu();
        originalOpenWindow(windowId);
    };
    
    // Закрытие приветственного окна и меню
    document.querySelector('.welcome-button')?.addEventListener('click', function() {
        closeStartMenu();
        closeWelcomeModal();
    });
    
    // Обработчики для отправки сообщения
    const messageInput = document.getElementById('message-input');
    if (messageInput) {
        messageInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
    
    // Устанавливаем фокус на PowerShell при открытии
    if (document.getElementById('contact')?.classList.contains('open')) {
        const powershellInput = document.getElementById('powershell-input');
        if (powershellInput) powershellInput.focus();
    }
    
    // Обновление времени
    setInterval(updateTime, 1000);
    updateTime();
    
    // Ресайз для корректного позиционирования
    window.addEventListener('resize', positionStartMenu);
}

// Точка входа
document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = createSplashScreen();
    
    setTimeout(() => {
        splashScreen.style.opacity = '0';
        setTimeout(() => {
            splashScreen.remove();
            mainOnLoad();
        }, 500);
    }, 2000);
});