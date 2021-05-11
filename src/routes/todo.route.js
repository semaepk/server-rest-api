const express = require('express')
const router  = express.Router()

const todo_controller = require('../controllers/todo.controller')

router.post('/create', todo_controller.todo_create)

router.get('/', todo_controller.todo_all)

router.put('/:id/update', todo_controller.todo_update)

router.delete('/:id/delete', todo_controller.todo_delete)

module.exports = router