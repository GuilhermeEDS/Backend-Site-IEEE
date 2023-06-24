import { Router } from 'express';
import PostController from '../Controller/PostController.js';

const postRouter = Router()
const controller = new PostController();

postRouter.get('/', controller.todos);
postRouter.get('/:id', controller.porId);
postRouter.post('/', controller.criar);
postRouter.put('/', controller.atualizar);
postRouter.delete('/:id', controller.remover);

export default postRouter;