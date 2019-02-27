const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 4000;

const app = express();

app.use(cors({
  // dynamic CORS: parrot back the Origin header from the HTTP request
  origin: (origin, callback) => callback(null, true),
  credentials: true,
}));

app.get('/user', (req, res) => {
  res.status(200).json({
    id: 50,
    name: 'Bob',
    email: 'bob@realpeople.com',
    emailVerified: false,
  })
});

app.get('/', (req, res) => {
  res.status(200).send('Things are working!');
});

app.listen(port, () =>
  console.log(`w2d4 lecture running on :${port}`));
