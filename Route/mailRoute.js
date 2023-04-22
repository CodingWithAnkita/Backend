
const {sendMail} = require('../Controller/mailController')

const Route = require('express').Router()

Route.post('/',sendMail)

module.exports = Route