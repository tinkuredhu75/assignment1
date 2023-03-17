const express = require('express')
const router = express.Router()

// Games
router.get('/game', (req, res) => {
        res.json({ title: 'Games', body: 'Type your text here...' })
})

// Search.... For example: /search?query=banana
router.get('/search', (req, res) => {
    const query = req.query.query
    res.json({ msg: `We see you're looking the service: '${query}'. We will find it soon.`})
})

// Internal Error 
router.get('/error', (req, res) => {
    throw new Error("WHAT ARE YOU DOING?!")
})

module.exports = router