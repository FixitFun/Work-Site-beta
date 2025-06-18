// Добавьте этот код в отдельный файл (например, navigation.js) и подключите ко всем страницам
document.addEventListener("DOMContentLoaded", function() {
  // Получаем текущий URL страницы
  const currentPage = window.location.pathname.split('/').pop();
  
  // Находим все ссылки в навигации
  const navLinks = document.querySelectorAll('.header-nav a');
  
  // Перебираем ссылки и сравниваем их атрибут href с текущим URL
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop();
    
    if (linkPage === currentPage) {
      link.classList.add('active');
      
      // Обновляем заголовок окна (если нужен)
      const pageName = link.getAttribute('data-page') || 'Document';
      document.querySelector('.window-title').textContent = `${pageName}.html — Visual Studio Code`;
    }
  });
});