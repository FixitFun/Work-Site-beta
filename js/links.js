// ./js/links.js
function populateLinks() {
    const container = document.getElementById('links-list');
    if (!container) return;
    
    container.innerHTML = '';
    links.forEach(link => {
        const item = document.createElement('div');
        item.className = 'task-manager-item';
        item.innerHTML = `
            <div style="display: flex; align-items: center;">
                <div class="link-icon" style="background: ${link.color}">
                    <i class="${link.icon}"></i>
                </div>
                <div class="link-name">${link.name}</div>
            </div>
            <div class="link-type">${link.type}</div>
            <div>
                <span class="link-status">${link.status}</span>
            </div>
            <div class="link-actions">
                <button class="task-btn open" data-url="${link.url}">
                    <i class="fas fa-external-link-alt"></i> Открыть
                </button>
                <button class="task-btn copy" data-url="${link.url}">
                    <i class="fas fa-copy"></i>
                </button>
            </div>
        `;
        container.appendChild(item);
    });
    
    // Обработчики для кнопок
    document.querySelectorAll('.task-btn.open').forEach(btn => {
        btn.addEventListener('click', () => {
            window.open(btn.dataset.url, '_blank');
        });
    });
    
    document.querySelectorAll('.task-btn.copy').forEach(btn => {
        btn.addEventListener('click', () => {
            navigator.clipboard.writeText(btn.dataset.url);
            const originalHTML = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i>';
            setTimeout(() => btn.innerHTML = originalHTML, 2000);
        });
    });
}

function updatePerformanceStats() {
    const memoryUsage = (Math.random() * 2 + 1).toFixed(1);
    const cpuUsage = Math.floor(Math.random() * 20 + 5);
    
    document.getElementById('memory-usage').textContent = `${memoryUsage} ГБ`;
    document.getElementById('cpu-usage').textContent = `${cpuUsage}%`;
}

function initTaskManager() {
    populateLinks();
    updatePerformanceStats();
    setInterval(updatePerformanceStats, 5000);
}

// Инициализация
document.addEventListener('DOMContentLoaded', initTaskManager);