import { Router } from 'express';
import usuarioController from '../Controller/UsuarioController.js';

const usuarioRouter = Router()
const controller = new usuarioController();

usuarioRouter.get('/', controller.todos);
usuarioRouter.get('/:id', controller.porId);
usuarioRouter.post('/', controller.criar);
usuarioRouter.put('/', controller.atualizar);
usuarioRouter.delete('/:id', controller.remover);

export default usuarioRouter;