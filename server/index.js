const path = require('path')
const express = require('express')
const PORT = process.env.PORT || 8080
const app = express()
module.exports = app

if (process.env.NODE_ENV !== 'production') require('../secrets')


const createApp = () => {
  // static file-serving middleware
  app.use(express.static(path.join(__dirname, '..', 'public')))

  // error handling endware
  app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })
}

const startListening = () => {

  app.listen(PORT, () =>
    console.log(`Listening on port ${PORT}`)
  )
}

createApp()
startListening()
