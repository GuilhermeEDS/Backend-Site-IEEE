import { Router } from 'express';
import RamoController from '../Controller/RamoController';

const ramoRouter = Router()
const controller = new RamoController();

ramoRouter.get('/', controller.todos);
ramoRouter.get('/:id', controller.porId);
ramoRouter.post('/', controller.criar);
ramoRouter.put('/', controller.atualizar);s
ramoRouter.delete('/:id', controller.remover);

export default ramoRouter;