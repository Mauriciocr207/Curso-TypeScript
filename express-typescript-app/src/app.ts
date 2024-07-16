import express, { NextFunction, Request, Response } from "express";
import router from "./routes/TodoRoutes";
import { json } from "body-parser";

const app = express();
const port = 3000;

app.use(json());
app.use("/todos", router);
app.use((
    err: Error, 
    req: Request, 
    resp: Response,
    next: NextFunction
) => {
    resp.status(500).json({message: err.message});
});
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
