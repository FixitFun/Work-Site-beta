// ./js/blog.js
function getStatusClass(status) {
    return {
        'Опубликован': 'published',
        'Черновик': 'draft',
        'Архив': 'archived'
    }[status] || '';
}

function populateBlogTable() {
    const tableBody = document.getElementById('blog-posts');
    tableBody.innerHTML = '';
    
    blogPosts.forEach(post => {
        const row = document.createElement('tr');
        row.dataset.id = post.id; // Добавляем ID поста
        
        row.innerHTML = `
            <td>${post.id}</td>
            <td>${post.title}</td>
            <td>${post.description}</td>
            <td>${post.year}</td>
            <td class="${post.status.toLowerCase()}">${post.status}</td>
        `;
        
        // Добавляем обработчик клика
        row.addEventListener('click', function() {
            openBlogPost(post.id);
        });
        
        tableBody.appendChild(row);
    });
}

// Функция для открытия страницы поста
function openBlogPost(postId) {
    // Сохраняем ID поста в localStorage для использования на другой странице
    localStorage.setItem('currentPostId', postId);
    
    // Переходим на страницу поста
    window.location.href = 'blog-post.html';
}

// Инициализация
document.addEventListener('DOMContentLoaded', populateBlogTable);