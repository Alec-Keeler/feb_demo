const express = require('express');
const { Breadditor, Post, Subbreaddit, Subscription } = require('../models')
const router = express.Router();

const csrf = require('csurf');

const csrfProtection = csrf({cookie: true})

// Task 26a
router.get('/new', csrfProtection, async(req, res) => {
    const subs = await Subbreaddit.findAll()
    res.render('create-post', {subs, csrfToken: req.csrfToken()})
})

const errorArray = (req, res, next) => {
    req.errors = []
    next()
}

const emailCheck = (req, res, next) => {
    const email = req.body.email
    const exp = /^[\w-\.]+@[A-z]+\.[A-z]{2,3}$/

    const isEmail = email.test(exp)
    if (isEmail) {
        next()
    } else {
        req.errors.push('Please provide a valid email')
        next()
    }
}

router.post('/', csrfProtection, errorArray, emailCheck, async(req, res) => {
    console.log('You have arrived at the post post route')
    console.log(req.errors)
    const { title, content, subId } = req.body;

    const post = await Post.create({
        title,
        content,
        subId,
        pinned: false,
        breadditorId: 1
    })
})


module.exports = router;