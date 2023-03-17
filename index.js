// imports
const express = require('express')
const app = express()
require('dotenv').config()
const port = 3000

// middleware
app.set('views', './views')   
app.set('view engine', 'ejs')           
app.use(express.static('./static'))

// routers
const publicRouter = require('./routes/public')
const gamesRouter = require('./routes/games')   
const tst_apiRouter = require('./routes/tst_api')

app.use('/', publicRouter)
app.use('/games', gamesRouter)
app.use('/tst_api', tst_apiRouter)

// 404 handler
app.all('*', (req, res) => {
    res.render('404', { route: req.path, method: req.method })
})

//error handler
const errorHandler = (err, req, res, next) => {
    console.error(err.stack)
    res.status(500).render('index', { title: 'Internal error', body: err.message })
}
app.use(errorHandler)

// Listen...
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})