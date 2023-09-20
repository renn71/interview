const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const Rover = require('./helpers/rover');
app.use(bodyParser.json());

app.use(cors());

app.post('/api/rovers', (req, res) => {
  const { rovers, position } = req.body;
  const rover = new Rover();

  res.json({
    rovers: rover.getRovers(rovers),
  });
});

app.get('/', (req, res) => {
  res.json({ message: 'Ok!' });
});

const port = process.env.PORT || 3004;

app.listen(port, () => {
  console.log(`Server run in PORT:${port}`);
});
