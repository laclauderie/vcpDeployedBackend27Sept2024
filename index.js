// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware (if needed)

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, this is your Express.js app!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
