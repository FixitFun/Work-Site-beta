// ./js/chat.js
function sendMessage() {
    const input = document.getElementById('message-input');
    const message = input.value.trim();
    if (!message) return;
    
    const messagesContainer = document.getElementById('chat-messages');
    
    // Сообщение пользователя
    const userMessage = document.createElement('div');
    userMessage.className = 'message user';
    userMessage.innerHTML = `
        <div>${message}</div>
        <div class="message-info">
            <span>Вы</span>
            <span>Только что</span>
        </div>
    `;
    messagesContainer.appendChild(userMessage);
    input.value = '';
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    // Ответ системы
    setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.className = 'message bot';
        botMessage.innerHTML = `
            <div>Спасибо за ваш отзыв! Я обязательно учту ваше мнение.</div>
            <div class="message-info">
                <span>Система</span>
                <span>Только что</span>
            </div>
        `;
        messagesContainer.appendChild(botMessage);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 1000);
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('message-input')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
});