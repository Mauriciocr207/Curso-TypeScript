import { Router } from "express";
import TodoController from "../controllers/TodoController";

const router = Router();

router.get('/', TodoController.getAll);
router.post('/', TodoController.create);
router.patch('/:id', TodoController.update);
router.delete('/:id', TodoController.delete);

export default router;