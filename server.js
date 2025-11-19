const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Профиль пользователя
app.get('/api/profile/me', (req, res) => {
  res.json({
    id: "user123",
    name: "Игрок 123",
    rating: 100,
    battles: 0,
    wins: 0,
    losses: 0,
    draws: 0,
    badges: []
  });
});

// Поиск соперника
app.get('/api/duels/find-opponent', (req, res) => {
  res.json({
    opponent: {
      name: "Соперник",
      rating: 105,
      initials: "SP"
    }
  });
});

// Завершение дуэли
app.post('/api/duels/finish', (req, res) => {
  res.json({
    new_rating: 110,
    rating_delta: 10,
    battles: 1,
    wins: 1,
    losses: 0,
    draws: 0,
    badges: []
  });
});

// Таблица лидеров
app.get('/api/leaderboard', (req, res) => {
  res.json({
    items: [
      { name: "Игрок 1", rating: 150, battles: 10, wins: 7 },
      { name: "Игрок 2", rating: 130, battles: 5, wins: 3 }
    ],
    me: {
      position: 3,
      rating: 110,
      battles: 1,
      wins: 1,
      losses: 0,
      draws: 0
    }
  });
});

// корневой маршрут для проверки
app.get('/', (req, res) => {
  res.send('Quiz server is running');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
