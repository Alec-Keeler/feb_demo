// Task 17a
const express = require('express');
const cookieParser = require('cookie-parser');
const { Breadditor } = require('./models');
const userRouter = require('./routes/users.js');
const postRouter = require('./routes/posts.js');
const app = express();
// Task 19a
app.set('view engine', 'pug')
// Task 23
app.use(express.static('./public'))

// Task 28a
app.use(express.urlencoded({extended: false}))

app.use(cookieParser())
// Task 27a
app.use((req, res, next) => {
    // console.log('MIDDLEWARE TEST')
    req.banana = true
    next()
})
// Task 21b
app.use('/users', userRouter)
app.use('/breadditors', userRouter)
app.use('/posts', postRouter)

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
app.get('/home/:num', (req, res) => {
    console.log('HELLO?')
    const param = parseInt(req.params.num)
    if (param === 1) {
        res.send(data[param])
    } if (param === 2) {
        res.render('colors', { title: 'Colors', colors: data[param]})
    }
})

app.get('/:num1/:num2/:num3', (req, res) => {
    console.log(req.params.num1)
})

// // Task 20a
// app.get('/users', async(req, res) => {
//     const breadditors = await Breadditor.findAll()

//     res.render('users', {title: 'Breaddit', breadditors: breadditors})
// })

// // /users/1
// // Task 20c
// app.get('/users/:id', async(req, res) => {
//     console.log(req.path)
//     console.log(req.params)
//     const user = await Breadditor.findByPk(req.params.id)
//     // console.log(user)
//     res.render('profile', {breadditor: user, title: 'Profile Page'})
// })


// W11D2 Project
// good
// /valid
// /thisisok
// /s01sth1s/
// /and-this
// /also_this/

// bad
// /not/ok
// /thisisabad/1/2

app.all('*', (req, res) => {
    // console.log('catch all')
    res.send('404 page not found')
})


// Task 17b
const port = 8081;
app.listen(port, () => console.log(`Listening on port ${port}...`));