const express = require('express')
const router = express.Router()

// Home
router.get('/', (req, res) => {
    res.render('index', { title: 'Home', h1: 'TEST OF Tinku', body: 'This is Home Text' })
})

// About
router.get('/about', (req, res) => {
    res.render('about', { title: 'About', body: 'This is About Body' })
})

// Game
router.get('/games', (req, res) => {
    res.render('games', { title: 'Games', body: 'This is game Body' })
})

// API
router.get('/tst_api', (req, res) => {
    res.render('tst_api', { title: 'API', body: 'This is Api Body' })
})

// Internal Error 
router.get('/error', (req, res) => {
    throw Error("What are you doing?")
})

module.exports = router