const express = require('express');

const app = express();
const port = 3000;

// Ruta Get
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Puerto de escucha
app.listen(port, () => {
  console.log(`App Listinging at ${port}`)
});