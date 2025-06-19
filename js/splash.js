// ./js/splash.js
function createSplashScreen() {
    const splashScreen = document.createElement('div');
    splashScreen.id = 'splash-screen';
    splashScreen.innerHTML = `
        <style>
            @keyframes spin { to { transform: rotate(360deg); } }
        </style>
        <div style="margin-bottom: 40px;">
            <img src="./img/windows12.svg" alt="Логотип" style="width: 250px;">
        </div>
        <div style="
            width: 50px;
            height: 50px;
            border: 5px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            border-top-color: #fff;
            animation: spin 1s linear infinite;
        "></div>
    `;
    
    Object.assign(splashScreen.style, {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#0f172a',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
        transition: 'opacity 0.5s ease'
    });
    
    document.body.appendChild(splashScreen);
    return splashScreen;
}