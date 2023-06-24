import { Router } from 'express';
import CapituloController from '../Controller/CapituloController.js';

const capituloRouter = Router()
const controller = new CapituloController();

capituloRouter.get('/', controller.todos);
capituloRouter.get('/:id', controller.porId);
capituloRouter.post('/', controller.criar);
capituloRouter.put('/', controller.atualizar);
capituloRouter.delete('/:id', controller.remover);

export default capituloRouter;