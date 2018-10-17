const express= require('express')
const server = express()

//path
const path = require('path')

//import dataRoute
const dataRoute = require('../server/routes/dataRoute')

//middleware
server.use(express.static(path.join(__dirname, '..', './public')))
server.use(express.json())

//data routes
server.use('/api/data', dataRoute)

module.exports = server