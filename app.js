// Task 17a
const express = require('express');
const { Breadditor } = require('./models');
const app = express();
// Task 19a
app.set('view engine', 'pug')

// Task 18
app.get('/', (req, res) => {
    // res.send('Welcome to the home page')
    // Task 19c
    res.render('home', {title: 'Breaddit', header: 'Welcome to Breaddit\'s Home Page'})
})

const data = {
    1: 'This is your first response',
    2: ['Blue', 'Green', 'Orange']
};

// Student Task Code

// Task 20a
app.get('/users', async(req, res) => {
    const breadditors = await Breadditor.findAll()

    res.render('users', {title: 'Breaddit', breadditors: breadditors})
})

// /users/1
// Task 20c
app.get('/users/:id', async(req, res) => {
    console.log(req.path)
    console.log(req.params)
    const user = await Breadditor.findByPk(req.params.id)
    // console.log(user)
    res.render('profile', {breadditor: user, title: 'Profile Page'})
})


// Task 17b
const port = 8081;
app.listen(port, () => console.log(`Listening on port ${port}...`));