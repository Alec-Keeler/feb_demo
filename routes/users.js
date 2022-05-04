// Task 21a
const express = require('express');
const asyncHandler = require('express-async-handler')
const { Breadditor } = require('../db/models');
const router = express.Router();
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });
const bcrypt = require('bcryptjs');

// task 27b
router.use((req, res, next) => {
    if (req.banana) {
        req.potato = false
    } else {
        req.potato = true
    }
    next()
})

// Task 27c
const routeMiddleware = (req, res, next) => {
    if (req.potato) {
        console.log('ERROR D:')
    } else {
        console.log('Successful check!')
        next()
    }

}

// Task 20a
router.get('/', routeMiddleware, async (req, res, next) => {
    const breadditors = await Breadditor.findAll()
    if (req.session) {
        console.log(req.session.auth)
    } else {
        console.log('BANANA IS A LIE D:')
    }
    res.render('users', { title: 'Breaddit', breadditors: breadditors })
})

// /users/1
// Task 20c
router.get('/:id(\\d+)', asyncHandler(async (req, res, next) => {
    console.log(req.path)
    console.log(req.params)
    const user = await Breadditor.findByPk(req.params.id)
    // console.log(user)
    res.render('profile', { breadditor: user, title: 'Profile Page' })
}))

// router.get(/(stuff)?(house)?/, (req, res) => {
//     console.log('hello this is stuff')
// })

router.get('/signup', csrfProtection, (req, res) => {
    res.render('signup', { csrfToken: req.csrfToken(), errors: [], user: {} })
})

const signUpValidator = (req, res, next) => {
    const { name, email, password, confirmPassword } = req.body;
    const emailReg = /^[^\s@]+@\w+\.[A-z]{2,3}$/
    req.errors = [];

    if (name.length < 2) {
        req.errors.push('Please provide a longer name')
    }
    if (!emailReg.test(email)) {
        req.errors.push('Please provide a valid email')
    }
    if (!(password === confirmPassword)) {
        req.errors.push('Please make sure to type the same password both times!')
    }

    next()
}

router.post('/signup', csrfProtection, signUpValidator, async (req, res) => {
    const { name, country, email, password,  } = req.body
    if (req.errors.length > 0) {
        res.render('signup', {
            csrfToken: req.csrfToken(),
            errors: req.errors,
            user: req.body
        })
    } else {
        //Perform password hashing before creating the user
        // Task 35a
        const hashedPassword = await bcrypt.hash(password, 12)
        const user = await Breadditor.create({
            name, country, email, hashedPassword
        })
        res.redirect('/users')
    }
})

router.get('/login', csrfProtection, (req, res) => {
    res.render('login', { csrfToken: req.csrfToken(), errors: [], user: {} })
})

router.post('/login', csrfProtection, async (req, res) => {
    const { email, password } = req.body
    req.errors = []
    const user = await Breadditor.findOne({
        where: {
            email
        }
    })
    //Fill out with password hashing
    const isPassword = await bcrypt.compare(password, user.hashedPassword)
    if (user && isPassword) {
        console.log('successful login!')
        req.session.auth = {
            name: user.name,
            userId: user.id
        }
        console.log('session: ', req.session)
        res.redirect('/users')
    } else {
        req.errors.push('Account validation failed.  Please Try again.')
        res.render('login', { csrfToken: req.csrfToken(), errors: req.errors, user: { email } })
    }
})

// Task 36c
router.get('/logout', (req, res) => {
    delete req.session.auth
    // Task 36d
    req.session.save(() => res.redirect('/users'))
    // res.redirect('/users')
})


module.exports = router;