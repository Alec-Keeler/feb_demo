// Task 21a
const express = require('express');
const asyncHandler = require('express-async-handler')
const { Breadditor } = require('../db/models');
const router = express.Router();

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
    if (req.banana) {
        console.log('BANANA IS NOT A LIE')
        console.log(req.potato)
    } else {
        console.log('BANANA IS A LIE D:')
    }
    res.render('users', { title: 'Breaddit', breadditors: breadditors })
})

// /users/1
// Task 20c
router.get('/:id', asyncHandler(async (req, res, next) => {
    console.log(req.path)
    console.log(req.params)
    const user = await Breadditor.findByPk(req.params.id)
    // console.log(user)
    res.render('profile', { breadditor: user, title: 'Profile Page' })
}))

router.get(/(stuff)?(house)?/, (req, res) => {
    console.log('hello this is stuff')
})

module.exports = router;