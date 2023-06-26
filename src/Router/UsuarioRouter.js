import { Router } from 'express';
import usuarioController from '../Controller/UsuarioController.js';

const usuarioRouter = Router()
const controller = new usuarioController();

usuarioRouter.get('/', controller.todos);
usuarioRouter.get('/:id', controller.porId);

export default usuarioRouter;