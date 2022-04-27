const express = require('express');
const { Breadditor, Post, Subbreaddit, Subscription } = require('../models')
const router = express.Router();

// Task 26a
router.get('/new', async(req, res) => {
    const subs = await Subbreaddit.findAll()
    res.render('create-post', {subs})
})

router.post('/', (req, res) => {
    console.log('You have arrived at the post post route')
})


module.exports = router;