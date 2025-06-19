// ./js/projects.js
function openProjectModal(projectId) {
    const project = projects[projectId];
    if (!project) return;
    
    document.getElementById('project-title').textContent = project.title;
    document.getElementById('project-description').textContent = project.description;
    document.getElementById('project-image').src = project.image;
    
    const techContainer = document.getElementById('project-technologies');
    techContainer.innerHTML = '';
    project.technologies.forEach(tech => {
        const badge = document.createElement('div');
        badge.className = 'tech-badge';
        badge.textContent = tech;
        techContainer.appendChild(badge);
    });
    
    const featuresContainer = document.getElementById('project-features');
    featuresContainer.innerHTML = '';
    project.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresContainer.appendChild(li);
    });
    
    document.getElementById('project-demo-link').href = project.demo;
    document.getElementById('project-github-link').href = project.github;
    document.getElementById('project-modal').classList.add('active');
}

function closeProjectModal() {
    document.getElementById('project-modal').classList.remove('active');
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.file-item.folder').forEach(item => {
        item.addEventListener('click', function() {
            openProjectModal(this.dataset.project);
        });
    });
});


// Функция для инициализации портфолио
function initPortfolio() {
    const grid = document.getElementById('portfolio-grid');
    if (!grid) return;

    // Очищаем сетку
    grid.innerHTML = '';

    // Добавляем иконки проектов
    projects.forEach(project => {
        const icon = document.createElement('div');
        icon.className = 'portfolio-icon';
        icon.innerHTML = `
            <div class="icon-container" data-project="${project.id}">
                <div class="icon-wrapper">
                    <img src="${project.icon}" alt="${project.title}" class="rotating-icon">
                </div>
                <span class="icon-title">${project.title}</span>
            </div>
        `;
        grid.appendChild(icon);
    });

    // Добавляем обработчики событий
    document.querySelectorAll('.icon-container').forEach(container => {
        container.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            openProjectModal(projectId);
        });

        // Эффект при наведении
        container.addEventListener('mouseenter', function() {
            this.querySelector('.icon-wrapper').style.transform = 'scale(1.15) translateZ(10px)';
        });

        container.addEventListener('mouseleave', function() {
            this.querySelector('.icon-wrapper').style.transform = 'scale(1) translateZ(0)';
        });
    });
}

// Вызываем инициализацию при загрузке
document.addEventListener('DOMContentLoaded', initPortfolio);

// Глобальные переменные для отслеживания текущего состояния
let currentLanguage = null;
let currentProject = null;

// Функция для инициализации языков программирования
function initLanguages() {
    const grid = document.getElementById('languages-grid');
    if (!grid) return;

    // Очищаем сетку
    grid.innerHTML = '';

    // Добавляем иконки языков
    languages.forEach(lang => {
        const icon = document.createElement('div');
        icon.className = 'portfolio-icon';
        icon.innerHTML = `
            <div class="icon-container" data-lang="${lang.id}">
                <div class="icon-wrapper">
                    <img src="${lang.icon}" alt="${lang.title}" class="rotating-icon">
                </div>
                <span class="icon-title">${lang.title}</span>
            </div>
        `;
        grid.appendChild(icon);
    });

    // Добавляем обработчики событий
    document.querySelectorAll('.icon-container').forEach(container => {
        container.addEventListener('click', function() {
            const langId = this.getAttribute('data-lang');
            openProjectsExplorer(langId);
        });

        // Эффект при наведении
        container.addEventListener('mouseenter', function() {
            this.querySelector('.icon-wrapper').style.transform = 'scale(1.15) translateZ(10px)';
        });

        container.addEventListener('mouseleave', function() {
            this.querySelector('.icon-wrapper').style.transform = 'scale(1) translateZ(0)';
        });
    });
}

// Открыть файловый менеджер проектов для выбранного языка
function openProjectsExplorer(langId) {
    const lang = languages.find(l => l.id === langId);
    if (!lang) return;

    currentLanguage = lang;

    // Скрыть сетку языков
    document.getElementById('languages-grid').style.display = 'none';
    
    // Показать файловый менеджер проектов
    const explorer = document.getElementById('projects-explorer');
    explorer.style.display = 'block';
    
    // Установить название языка
    document.getElementById('current-language').textContent = lang.title;
    document.getElementById('language-title').textContent = `Проекты на ${lang.title}`;
    
    // Показать проекты для этого языка
    showProjects(lang);
}

// Вернуться к сетке языков
function backToLanguages() {
    document.getElementById('projects-explorer').style.display = 'none';
    document.getElementById('languages-grid').style.display = 'grid';
    currentLanguage = null;
}

// Показать проекты для выбранного языка
function showProjects(lang) {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = '';
    
    lang.projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'folder-item';
        projectElement.innerHTML = `
            <div class="folder-icon">
                <i class="fas fa-folder"></i>
            </div>
            <div class="folder-name">${project.name}</div>
        `;
        projectElement.addEventListener('click', () => openProjectDetail(project));
        projectsGrid.appendChild(projectElement);
    });
}

// Открыть детали проекта
function openProjectDetail(project) {
    currentProject = project;

    // Скрыть файловый менеджер проектов
    document.getElementById('projects-explorer').style.display = 'none';
    
    // Показать детали проекта
    const detail = document.getElementById('project-detail');
    detail.style.display = 'block';
    
    // Установить название проекта
    document.getElementById('project-detail-title').textContent = project.name;
    
    // Установить видео
    const video = document.getElementById('project-video');
    video.src = project.video;
    video.load();
    
    // Построить структуру проекта
    buildProjectStructure(project);
}

// Вернуться к проектам языка
function backToProjects() {
    document.getElementById('project-detail').style.display = 'none';
    document.getElementById('projects-explorer').style.display = 'block';
    currentProject = null;
}

// Построить структуру проекта в стиле редактора кода
function buildProjectStructure(project) {
    const structureContainer = document.getElementById('project-structure');
    structureContainer.innerHTML = '';
    
    // Рекурсивная функция для отрисовки элементов
    const renderItem = (item, container, level = 0) => {
        const itemElement = document.createElement('div');
        itemElement.className = 'structure-item';
        itemElement.style.paddingLeft = `${level * 20}px`;
        
        const icon = document.createElement('i');
        icon.className = item.type === 'folder' ? 'fas fa-folder' : 'fas fa-file';
        
        const name = document.createElement('span');
        name.textContent = item.name;
        
        itemElement.appendChild(icon);
        itemElement.appendChild(name);
        container.appendChild(itemElement);
        
        // Рекурсивно отрисовываем детей
        if (item.children && item.children.length > 0) {
            item.children.forEach(child => {
                renderItem(child, container, level + 1);
            });
        }
    };
    
    // Добавляем корневые элементы
    project.structure.forEach(item => {
        renderItem(item, structureContainer);
    });
}

// Вызываем инициализацию при загрузке
document.addEventListener('DOMContentLoaded', initLanguages);