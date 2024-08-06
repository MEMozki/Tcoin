let score = 0;

document.addEventListener('DOMContentLoaded', () => {
    updateScore();
    // Проверка аутентификации
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        // Пользователь аутентифицирован
        console.log(`Добро пожаловать, ${user.username}`);
    } else {
        console.log('Пользователь не аутентифицирован');
    }
});

function handleClick() {
    score++;
    updateScore();
}

function updateScore() {
    document.getElementById('score-value').innerText = score;
}

// Обработка данных Telegram
window.addEventListener('message', (event) => {
    if (event.origin === 'https://oauth.telegram.org') {
        const user = event.data;
        localStorage.setItem('user', JSON.stringify(user));
        console.log(`Добро пожаловать, ${user.username}`);
    }
});

export {};
