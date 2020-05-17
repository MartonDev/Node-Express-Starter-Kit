//handle all errors
module.exports.errorHandler = (err, req, res, next) => {

  const logger = require('../logger')
  logger.error(err)

  if(err.status) {

    res.status(err.status).json({ 'message': err.message })

  }else {

    res.status(500).json({ message: 'Internal server error' })

  }

}

//404 error
module.exports.nullRoute = (req, res, next) => {

  if(req.accepts('html') && req.method.toLowerCase() == 'get') {

    //in a vue or react app, we redirect to a custom 404 route, defined in the front-end
    //res.redirect(`/404`)
    res.send('Not found')
    return

  }

  res.status(404)

  if(req.accepts('json')) {

    res.json({ error: 'Not found' })
    return

  }

  res.type('txt').send('Not found')

}

//error object for the api error handler
module.exports.newHttpError = (status, message) => {

  let err

  if(message == null) {

    err = new Error()

  }else {

    err = new Error(message)

  }

  err.status = status

  return err

}
