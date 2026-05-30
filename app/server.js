const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));
app.use('/styles', express.static(path.join(__dirname, 'styles')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3000, () => {
  console.log('Juice WRLD app running on port 3000');
});