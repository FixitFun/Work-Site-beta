// ./js/data.js
const links = [
    { 
        name: "GitHub", 
        url: "https://github.com/username", 
        icon: "fab fa-github", 
        color: "#6e5494",
        type: "Разработка",
        status: "Активна"
    },
    // ... остальные ссылки
];

const blogPosts = [
    {
        id: 1,
        title: "Введение в React Hooks",
        description: "Основные концепции React Hooks и их применение",
        year: "2025",
        status: "Опубликовано",
        author: "Алексей Иванов",
        date: "15 мая 2025"
    },
    {
        id: 2,
        title: "Оптимизация производительности в React",
        description: "Методы оптимизации React-приложений",
        year: "2025",
        status: "Опубликовано",
        author: "Алексей Иванов",
        date: "22 мая 2025"
    },
    {
        id: 3,
        title: "TypeScript для React-разработчиков",
        description: "Преимущества использования TypeScript в React",
        year: "2025",
        status: "Черновик",
        author: "Алексей Иванов",
        date: "30 мая 2025"
    },
    // Добавьте другие посты по аналогии
];

const languages = [
    {
        id: "lua",
        title: "Lua",
        icon: "./img/icon_2/lua-svgrepo-com.svg",
        projects: [
            {
                id: "project1",
                name: "Игра на Roblox",
                video: "./media/video/sample-5s.mp4",
                structure: [
                    {
                        name: "src",
                        type: "folder",
                        children: [
                            { name: "main.lua", type: "file" },
                            { name: "config.lua", type: "file" }
                        ]
                    },
                    { name: "README.md", type: "file" }
                ]
            }
        ]
    },
    {
        id: "javascript",
        title: "JavaScript",
        icon: "./img/icon_2/javascript-svgrepo-com.svg",
        projects: [
            {
                id: "project3",
                name: "Интернет-магазин",
                video: "./videos/project3.mp4",
                structure: [
                    {
                        name: "public",
                        type: "folder",
                        children: [
                            { name: "index.html", type: "file" }
                        ]
                    },
                    {
                        name: "src",
                        type: "folder",
                        children: [
                            { 
                                name: "components",
                                type: "folder",
                                children: [
                                    { name: "Header.jsx", type: "file" },
                                    { name: "Footer.jsx", type: "file" }
                                ]
                            },
                            { name: "App.jsx", type: "file" },
                            { name: "index.js", type: "file" }
                        ]
                    },
                    { name: "package.json", type: "file" },
                    { name: "README.md", type: "file" }
                ]
            }
        ]
    },
    {
        id: "javascript",
        title: "C",
        icon: "./img/icon_2/C_SVG_Icon.svg",
        projects: [
            {
                id: "project3",
                name: "Интернет-магазин",
                video: "./videos/project3.mp4",
                structure: [
                    {
                        name: "public",
                        type: "folder",
                        children: [
                            { name: "index.html", type: "file" }
                        ]
                    },
                    {
                        name: "src",
                        type: "folder",
                        children: [
                            { 
                                name: "components",
                                type: "folder",
                                children: [
                                    { name: "Header.jsx", type: "file" },
                                    { name: "Footer.jsx", type: "file" }
                                ]
                            },
                            { name: "App.jsx", type: "file" },
                            { name: "index.js", type: "file" }
                        ]
                    },
                    { name: "package.json", type: "file" },
                    { name: "README.md", type: "file" }
                ]
            }
        ]
    },
    {
        id: "javascript",
        title: "GO",
        icon: "./img/icon_2/go-svgrepo-com.svg",
        projects: [
            {
                id: "project3",
                name: "Интернет-магазин",
                video: "./videos/project3.mp4",
                structure: [
                    {
                        name: "public",
                        type: "folder",
                        children: [
                            { name: "index.html", type: "file" }
                        ]
                    },
                    {
                        name: "src",
                        type: "folder",
                        children: [
                            { 
                                name: "components",
                                type: "folder",
                                children: [
                                    { name: "Header.jsx", type: "file" },
                                    { name: "Footer.jsx", type: "file" }
                                ]
                            },
                            { name: "App.jsx", type: "file" },
                            { name: "index.js", type: "file" }
                        ]
                    },
                    { name: "package.json", type: "file" },
                    { name: "README.md", type: "file" }
                ]
            }
        ]
    },
    {
        id: "javascript",
        title: "Python",
        icon: "./img/icon_2/python-svgrepo-com.svg",
        projects: [
            {
                id: "project3",
                name: "Интернет-магазин",
                video: "./videos/project3.mp4",
                structure: [
                    {
                        name: "public",
                        type: "folder",
                        children: [
                            { name: "index.html", type: "file" }
                        ]
                    },
                    {
                        name: "src",
                        type: "folder",
                        children: [
                            { 
                                name: "components",
                                type: "folder",
                                children: [
                                    { name: "Header.jsx", type: "file" },
                                    { name: "Footer.jsx", type: "file" }
                                ]
                            },
                            { name: "App.jsx", type: "file" },
                            { name: "index.js", type: "file" }
                        ]
                    },
                    { name: "package.json", type: "file" },
                    { name: "README.md", type: "file" }
                ]
            }
        ]
    },
    {
        id: "javascript",
        title: "Bash",
        icon: "./img/icon_2/terminal-bash-svgrepo-com.svg",
        projects: [
            {
                id: "project3",
                name: "Интернет-магазин",
                video: "./videos/project3.mp4",
                structure: [
                    {
                        name: "public",
                        type: "folder",
                        children: [
                            { name: "index.html", type: "file" }
                        ]
                    },
                    {
                        name: "src",
                        type: "folder",
                        children: [
                            { 
                                name: "components",
                                type: "folder",
                                children: [
                                    { name: "Header.jsx", type: "file" },
                                    { name: "Footer.jsx", type: "file" }
                                ]
                            },
                            { name: "App.jsx", type: "file" },
                            { name: "index.js", type: "file" }
                        ]
                    },
                    { name: "package.json", type: "file" },
                    { name: "README.md", type: "file" }
                ]
            }
        ]
    },
    {
        id: "javascript",
        title: "PowerShell",
        icon: "./img/icon_2/powershell-svgrepo-com.svg",
        projects: [
            {
                id: "project3",
                name: "Интернет-магазин",
                video: "./videos/project3.mp4",
                structure: [
                    {
                        name: "public",
                        type: "folder",
                        children: [
                            { name: "index.html", type: "file" }
                        ]
                    },
                    {
                        name: "src",
                        type: "folder",
                        children: [
                            { 
                                name: "components",
                                type: "folder",
                                children: [
                                    { name: "Header.jsx", type: "file" },
                                    { name: "Footer.jsx", type: "file" }
                                ]
                            },
                            { name: "App.jsx", type: "file" },
                            { name: "index.js", type: "file" }
                        ]
                    },
                    { name: "package.json", type: "file" },
                    { name: "README.md", type: "file" }
                ]
            }
        ]
    },
];


// Глобальные переменные
let dragData = null;
let isDarkTheme = false;


