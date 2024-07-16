"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TodoRoutes_1 = __importDefault(require("./routes/TodoRoutes"));
const body_parser_1 = require("body-parser");
const app = (0, express_1.default)();
const port = 3000;
app.use((0, body_parser_1.json)());
app.use("/todos", TodoRoutes_1.default);
app.use((err, req, resp, next) => {
    resp.status(500).json({ message: err.message });
});
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
