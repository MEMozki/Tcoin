const express = require('express');
const crypto = require('crypto');
const app = express();
const PORT = 3000;

const BOT_TOKEN = '6990505895:AAG1NpL3c98dCHULHHVlUsTI2DZ8mxYtkdk';

function verifyTelegramAuth(data) {
    const {hash, ...params} = data;
    const secret = crypto.createHash('sha256').update(BOT_TOKEN).digest();
    const checkString = Object.keys(params).sort().map(key => (`${key}=${params[key]}`)).join('\n');
    const hmac = crypto.createHmac('sha256', secret).update(checkString).digest('hex');
    return hmac === hash;
}

app.get('/auth/telegram', (req, res) => {
    if (verifyTelegramAuth(req.query)) {
        // Аутентификация успешна
        res.send('Аутентификация успешна!');
    } else {
        // Аутентификация не удалась
        res.send('Аутентификация не удалась.');
    }
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
