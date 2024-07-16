"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TodoModel_1 = require("../models/TodoModel");
const TODOS = [];
class TodoController {
}
TodoController.create = (req, res) => {
    const text = req.body.text;
    const newTodo = new TodoModel_1.TodoModel(Math.random() + "", text);
    TODOS.push(newTodo);
    res.status(201).json({ message: "Todo fue creado", todo: newTodo });
};
TodoController.getAll = (req, res) => {
    res.status(200).json({ todos: TODOS });
};
TodoController.update = (req, res) => {
    const todoId = req.params.id;
    const updatedText = req.body.text;
    const index = TODOS.findIndex(todo => todo.id === todoId);
    if (index < 0) {
        throw new Error('Todo no fue encontrado');
    }
    const newTodo = new TodoModel_1.TodoModel(todoId, updatedText);
    TODOS[index] = newTodo;
    res.status(201).json({ message: 'Actualizado correctamente', newTodo });
};
TodoController.delete = (req, res) => {
    const todoId = req.params.id;
    const index = TODOS.findIndex(todo => todo.id === todoId);
    if (index < 0) {
        throw new Error('Todo no fue encontrado');
    }
    TODOS.splice(index, 1);
    res.status(201).json({ message: "Eliminado correctamente" });
};
exports.default = TodoController;
