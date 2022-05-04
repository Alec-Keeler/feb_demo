const express = require('express');
const { Breadditor, Post, Subbreaddit, Subscription } = require('../db/models')
const router = express.Router();

const csrf = require('csurf');

const csrfProtection = csrf({cookie: true})

// Task 38
router.get('/', asyncHandler(async (req, res) => {
    const posts = await Post.findAll();

    res.render('posts', { posts });
}))

// Task 37
const requireAuth = (req, res, next) => {
    if (req.session.auth) {
        next()
    } else {
        res.redirect('/users/login')
    }
}

// Task 26a
router.get('/new', requireAuth, csrfProtection, async(req, res) => {
    const subs = await Subbreaddit.findAll()
    res.render('create-post', {subs, csrfToken: req.csrfToken(), errors: [], data: {}})
})

const errorArray = (req, res, next) => {
    req.errors = []
    next()
}

// const emailCheck = (req, res, next) => {
//     const email = req.body.email
//     const exp = /^[\w-\.]+@[A-z]+\.[A-z]{2,3}$/

//     const isEmail = email.test(exp)
//     if (isEmail) {
//         next()
//     } else {
//         req.errors.push('Please provide a valid email')
//         next()
//     }
// }

const titleCheck = (req, res, next) => {
    const title = req.body.title;

    if (title.length < 1) {
        req.errors.push('You must provide a title')
    } if (title.length < 5) {
        req.errors.push('Your title must have at least 5 characters')
    }
    next()
}

router.post('/', csrfProtection, errorArray, titleCheck, async(req, res) => {
    console.log('You have arrived at the post post route')
    console.log(req.errors)
    console.log("body: ", req.body)
    const { title, content, subId } = req.body;

    if (req.errors) {
        const subs = await Subbreaddit.findAll()
        res.render('create-post', { subs, csrfToken: req.csrfToken(), errors: req.errors, data: req.body })
    } else {
        const post = await Post.create({
            title,
            content,
            subId,
            pinned: false,
            breadditorId: req.session.auth.userId
        })
        res.redirect('/users')
    }
})


module.exports = router;