// ./js/windows.js
function openWindow(windowId) {
    const window = document.getElementById(windowId);
    if (!window) return;
    
    window.classList.add('open');
    bringToFront(windowId);
    centerWindow(window);
    
    // Обновление активной иконки
    document.querySelectorAll('.taskbar-icon').forEach(icon => {
        icon.classList.remove('active');
    });
    
    const iconIndex = getTaskbarIconIndex(windowId);
    const taskbarIcon = document.querySelector(`.taskbar-icon:nth-child(${iconIndex + 1})`);
    if (taskbarIcon) taskbarIcon.classList.add('active');
}

function closeWindow(windowId) {
    const window = document.getElementById(windowId);
    if (window) window.classList.remove('open');
}

function maximizeWindow(windowId) {
    const window = document.getElementById(windowId);
    if (!window) return;
    
    if (window.style.width === '90vw') {
        window.style.width = '';
        window.style.height = '';
        centerWindow(window);
    } else {
        window.style.width = '90vw';
        window.style.height = '90vh';
        window.style.left = '5vw';
        window.style.top = '5vh';
    }
    bringToFront(windowId);
}

function centerWindow(windowElement) {
    if (!windowElement || windowElement.id === 'links') return;
    
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    let left = Math.max(20, (screenWidth - windowElement.offsetWidth) / 2);
    let top = Math.max(20, (screenHeight - windowElement.offsetHeight) / 3);
    
    if (screenWidth < 768) {
        left = 10;
        top = 60;
    }
    
    windowElement.style.left = `${left}px`;
    windowElement.style.top = `${top}px`;
}

function bringToFront(windowId) {
    const windows = document.querySelectorAll('.window');
    let maxZIndex = 10;
    
    windows.forEach(window => {
        const zIndex = parseInt(window.style.zIndex || 10);
        if (zIndex > maxZIndex) maxZIndex = zIndex;
    });
    
    const targetWindow = document.getElementById(windowId);
    if (targetWindow) targetWindow.style.zIndex = maxZIndex + 1;
}

function getTaskbarIconIndex(windowId) {
    const windows = ['about-me', 'portfolio', 'skills', 'blog', 'contact', 'comments', 'links'];
    return windows.indexOf(windowId) + 1;
}

// Drag & Drop
function startDrag(e) {
    if (e.target.closest('.window-controls')) return;
    
    const windowElement = e.currentTarget.parentElement;
    bringToFront(windowElement.id);
    
    const style = getComputedStyle(windowElement);
    dragData = {
        windowElement,
        startX: e.clientX,
        startY: e.clientY,
        startLeft: parseInt(style.left) || 0,
        startTop: parseInt(style.top) || 0
    };
    
    document.addEventListener('mousemove', dragWindow);
    document.addEventListener('mouseup', stopDrag);
}

function dragWindow(e) {
    if (!dragData) return;
    
    const { windowElement, startX, startY, startLeft, startTop } = dragData;
    windowElement.style.left = `${startLeft + (e.clientX - startX)}px`;
    windowElement.style.top = `${startTop + (e.clientY - startY)}px`;
}

function stopDrag() {
    dragData = null;
    document.removeEventListener('mousemove', dragWindow);
    document.removeEventListener('mouseup', stopDrag);
}

// Инициализация обработчиков
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.window-header').forEach(header => {
        header.addEventListener('mousedown', startDrag);
    });
    
    // Обработчики для иконок рабочего стола
    document.querySelectorAll('.desktop-icon').forEach(icon => {
        const windowId = icon.getAttribute('onclick').match(/openWindow\('(.+)'\)/)[1];
        icon.onclick = () => openWindow(windowId);
    });
});