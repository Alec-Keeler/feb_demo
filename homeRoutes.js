const data = {
    1: 'This is your first response',
    2: ['Blue', 'Green', 'Orange']
};

// Create a route handler for: GET /home/:num
// Use the num param to determine the correct response
// If num === 1, send a plain text response using the string contained at data[1]
// If num === 2, render a pug template that displays each color contained at data[2]
// You should iterate over the array in your pug template so that the page can remain dynamic