// ./js/contact.js
function openContactModal() {
    document.getElementById('contact-modal').classList.add('active');
    document.getElementById('contact-name').focus();
}

function closeContactModal() {
    document.getElementById('contact-modal').classList.remove('active');
}

function closeSuccessModal() {
    document.getElementById('success-modal').classList.remove('active');
}

function sendContactMessage() {
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;
    
    if (!name || !email || !message) {
        alert('Пожалуйста, заполните все поля');
        return;
    }
    
    closeContactModal();
    document.getElementById('success-modal').classList.add('active');
    
    // Очистка формы
    document.getElementById('contact-name').value = '';
    document.getElementById('contact-email').value = '';
    document.getElementById('contact-message').value = '';
}

function handlePowerShellInput(e) {
    if (e.key !== 'Enter') return;
    
    const input = document.getElementById('powershell-input');
    const command = input.value.trim();
    input.value = '';
    
    const output = document.getElementById('terminal-output');
    if (!output) return;
    
    // Добавление команды в вывод
    const commandLine = document.createElement('div');
    commandLine.className = 'terminal-line';
    commandLine.innerHTML = `<span class="terminal-prompt">PS C:\\Users\\Alexey></span> <span class="command">${command}</span>`;
    output.appendChild(commandLine);
    
    // Обработка команд
    if (command.toLowerCase() === 'help' || command === '?') {
        const helpLine = document.createElement('div');
        helpLine.className = 'terminal-line output';
        helpLine.innerHTML = `
            <div>Доступные команды:</div>
            <div>• Send-Message - открыть форму для отправки сообщения</div>
            <div>• Clear - очистить терминал</div>
            <div>• Exit - закрыть PowerShell</div>
        `;
        output.appendChild(helpLine);
    }
    else if (command.toLowerCase() === 'clear') {
        output.innerHTML = '';
    }
    else if (command.toLowerCase() === 'exit') {
        closeWindow('contact');
    }
    else if (command.toLowerCase() === 'send-message') {
        openContactModal();
    }
    else {
        const errorLine = document.createElement('div');
        errorLine.className = 'terminal-line output';
        errorLine.innerHTML = `<span style="color:var(--danger)">Ошибка:</span> Неизвестная команда "${command}". Введите "help" для списка команд.`;
        output.appendChild(errorLine);
    }
    
    // Добавление новой строки приглашения
    const newPrompt = document.createElement('div');
    newPrompt.className = 'terminal-line';
    newPrompt.innerHTML = `<span class="terminal-prompt">PS C:\\Users\\Alexey></span> `;
    output.appendChild(newPrompt);
    output.scrollTop = output.scrollHeight;
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('powershell-input')?.addEventListener('keypress', handlePowerShellInput);
});