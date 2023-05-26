const express = require('express');
const app = express();
const port = process.env.PORt || 3001;

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello!' });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
