// Task 17a
const express = require('express');

const app = express();

// Task 18
app.get('/', (req, res) => {
    res.send('Welcome to the home page')
})


// Task 17b
const port = 8081;
app.listen(port, () => console.log(`Listening on port ${port}...`));