const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const compression = require('compression')
const app = express()
 
// init  middleware
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())
// app.use(morgan('combine'))
// app.use(morgan('common'))
// app.use(morgan('short'))
// app.use(morgan('tiny'))

//init db
require('./dbs/init.mongodb')
const {checkOverLoad} = require('./helpers/check.connect')
checkOverLoad()
//init routes
app.get('/',(req, res, next) => {
    const strCompress = "Javascripts"
    return res.status(200).json({
        'message': 'Welcome to TipJS 2',
        metadata: strCompress.repeat(100000)
    })
})
//handling error
module.exports = app
