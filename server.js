const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Home Route
app.get('/', (req, res) => {
    res.send('Welcome to the Simple HTTP Web Service!');
});

// API Route
app.get('/api/data', (req, res) => {
    const responseData = {
        message: 'Hello from the server!',
        timestamp: new Date().toISOString()
    };
    res.json(responseData);
});

// Start Server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
