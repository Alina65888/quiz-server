const express = require('express');
const cors = require('cors');
const app = express();

// ★★★★ ОБЯЗАТЕЛЬНЫЕ НАСТРОЙКИ ★★★★
app.use(cors());
app.use(express.json());

// Простое хранилище (в проде используйте базу)
let players = {};

// GET /api/profile/me
app.get('/api/profile/me', (req, res) => {
  console.log('✅ Кто-то запросил профиль');
  res.json({
    name: "Игрок СИБУР",
    rating: 100,
    battles: 0,
    wins: 0,
    losses: 0,
    draws: 0,
    badges: []
  });
});

// POST /api/duels/finish
app.post('/api/duels/finish', (req, res) => {
  console.log('🎯 Завершена дуэль:', req.body);
  res.json({
    new_rating: 115,
    rating_delta: 15,
    badges_unlocked: ["rookie"]
  });
});

// GET /api/leaderboard
app.get('/api/leaderboard', (req, res) => {
  console.log('🏆 Запрошен рейтинг');
  res.json({
    items: [
      {position: 1, name: "Антон, производство", rating: 180, battles: 10, wins: 8},
      {position: 2, name: "Мария, лаборатория", rating: 165, battles: 8, wins: 6},
      {position: 3, name: "Игорь, безопасность", rating: 150, battles: 7, wins: 5},
      {position: 4, name: "Вы", rating: 115, battles: 1, wins: 1}
    ]
  });
});

// GET /api/duels/find-opponent
app.get('/api/duels/find-opponent', (req, res) => {
  console.log('🔍 Ищут соперника');
  res.json({
    opponent: {
      name: "Реальный коллега",
      rating: 140,
      initials: "РК",
      isReal: true
    }
  });
});

// Проверка здоровья сервера
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Сервер SIBUR Quiz работает!',
    timestamp: new Date().toISOString()
  });
});

// Корневой маршрут
app.get('/', (req, res) => {
  res.json({
    message: '🚀 SIBUR Quiz Battle Server запущен!',
    endpoints: {
      profile: 'GET /api/profile/me',
      finish: 'POST /api/duels/finish', 
      leaderboard: 'GET /api/leaderboard',
      opponent: 'GET /api/duels/find-opponent'
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log('🎉 ==================================');
  console.log('🚀 SIBUR QUIZ SERVER ЗАПУЩЕН!');
  console.log(`📍 Порт: ${PORT}`);
  console.log(`🌐 URL: http://0.0.0.0:${PORT}`);
  console.log('✅ Готов принимать запросы от игры');
  console.log('🎉 ==================================');
});