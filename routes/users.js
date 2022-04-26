// Task 21a
const express = require('express');
const { Breadditor } = require('../models');
const router = express.Router();

// Task 20a
router.get('/', async (req, res) => {
    const breadditors = await Breadditor.findAll()

    res.render('users', { title: 'Breaddit', breadditors: breadditors })
})

// /users/1
// Task 20c
router.get('/:id(\\d+)', async (req, res) => {
    console.log(req.path)
    console.log(req.params)
    const user = await Breadditor.findByPk(req.params.id)
    // console.log(user)
    res.render('profile', { breadditor: user, title: 'Profile Page' })
})

router.get(/(stuff)?(house)?/, (req, res) => {
    console.log('hello this is stuff')
})

module.exports = router;