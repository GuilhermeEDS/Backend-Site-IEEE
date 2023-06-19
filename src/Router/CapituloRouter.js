import { Router } from 'express';
import CapituloController from '../Controller/CapituloController';

const capituloRouter = Router()
const controller = new CapituloController();

capituloRouter.get('/', controller.todos);
capituloRouter.get('/:id', controller.porId);
capituloRouter.post('/', controller.criar);
capituloRouter.put('/', controller.atualizar);s
capituloRouter.delete('/:id', controller.remover);

export default capituloRouter;