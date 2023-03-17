const express = require('express')
const router = express.Router()

// TST API
router.get('/open', (req, res) => {
        res.json({ title: 'Open', body: 'Type your text here...' })
})

// Search.... For example: /search?query=192.168.0.12
router.get('/search', (req, res) => {
    const query = req.query.query
    res.json({ msg: `Type address: '${query}'. We get you soon` })
})

// Internal Error 
router.get('/error', (req, res) => {
    throw new Error("WHAT ARE YOU DOING?!")
})


module.exports = router