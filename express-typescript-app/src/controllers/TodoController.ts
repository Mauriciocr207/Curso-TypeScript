import { RequestHandler } from "express";
import { TodoModel } from "../models/TodoModel";

const TODOS: TodoModel[] = [];
export default class TodoController {
    static create: RequestHandler = (req , res) => {
        const text = (req.body as {text: string}).text;
        const newTodo = new TodoModel(Math.random()+"", text);
        TODOS.push(newTodo);
        res.status(201).json({message: "Todo fue creado", todo: newTodo});
    }

    static getAll: RequestHandler = (req, res) => {
        res.status(200).json({todos: TODOS});
    }

    static update: RequestHandler<{id: string}> = (req, res) => {
        const todoId = req.params.id;
        const updatedText = (req.body as {text: string}).text;
        
        const index = TODOS.findIndex(todo => todo.id === todoId);
        
        if(index < 0) {
            throw new Error('Todo no fue encontrado');
        }

        const newTodo = new TodoModel(todoId, updatedText);

        TODOS[index] = newTodo;

        res.status(201).json({message: 'Actualizado correctamente', newTodo});
    }

    static delete: RequestHandler<{id: string}> = (req, res) => {
        const todoId = req.params.id;

        const index = TODOS.findIndex(todo => todo.id === todoId);
        
        if(index < 0) {
            throw new Error('Todo no fue encontrado');
        }

        TODOS.splice(index, 1);

        res.status(201).json({message: "Eliminado correctamente"});
    }
}