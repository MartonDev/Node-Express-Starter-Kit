//require modules, server and config
const express = require('express'),
bodyParser = require('body-parser'),
session = require('express-session'),

config = require('./config.json'),
routes = require('./src/routes/routes'),
errors = require('./src/errors'),
logger = require('./src/logger'),

app = express()

//session
app.set('trust proxy', 1)
app.use(session({

  secret: 'RANDOM_SECRET',
  resave: false,
  saveUninitialized: true,
  //cookie: { secure: true } //use when https:// is active

}))

//routing
app.use(express.static('./public', { extensions: ['html'] }))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', routes)
app.use(errors.errorHandler)
app.use(errors.nullRoute)

logger.info('Starting express server...')

app.listen(config.port, () => {

  logger.info(`Server started on port ${config.port}`)

})
