"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TodoController_1 = __importDefault(require("../controllers/TodoController"));
const router = (0, express_1.Router)();
router.get('/', TodoController_1.default.getAll);
router.post('/', TodoController_1.default.create);
router.patch('/:id', TodoController_1.default.update);
router.delete('/:id', TodoController_1.default.delete);
exports.default = router;
