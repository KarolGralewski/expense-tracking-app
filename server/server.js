const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

const cors = require('cors');
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Piwo!' });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
