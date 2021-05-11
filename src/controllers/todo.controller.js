const Todo = require('../models/todo.model')

module.exports.todo_create = (req, res, next) => {
    Todo.create({
        text: req.body.text,
        isDone: req.body.isDone
    }, (err) => {
        if (err) return next(err)
        res.send('Цель создана!')
    })
}

module.exports.todo_all = (req, res, next) => {
    Todo.find({}, (err, items) => {
        res.send(items)
    })
}

module.exports.todo_update = (req, res, next) => {
    Todo.findByIdAndUpdate(req.params.id, { $set: req.body}, 
        (err, todo) => {
            if (err) return next(err)
            res.send('Цель изменена.')
        } )
}

module.exports.todo_delete = (req, res, next) => {
    Todo.findByIdAndRemove(req.params.id, (err) => {
        if (err) return next(err)
        res.send('Цель удалена.')
    })
}