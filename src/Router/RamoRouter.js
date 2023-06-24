import { Router } from 'express';
import RamoController from '../Controller/RamoController.js';

const ramoRouter = Router()
const controller = new RamoController();

ramoRouter.get('/', controller.todos);
ramoRouter.get('/:id', controller.porId);
ramoRouter.post('/', controller.criar);
ramoRouter.put('/', controller.atualizar);
ramoRouter.delete('/:id', controller.remover);

export default ramoRouter;