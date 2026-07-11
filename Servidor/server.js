// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// A simple API route that returns a message
app.get('/api/message', (req, res) => {
  res.json({ text: "Hello from the Node.js server!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});