
const {getCart,postCart,putCart,deleteCart} = require('../Controller/cartController')

const Route = require('express').Router()

Route.get('/',getCart)
Route.post('/',postCart)
Route.put('/:id',putCart)
Route.delete('/:id',deleteCart)


module.exports = Route

