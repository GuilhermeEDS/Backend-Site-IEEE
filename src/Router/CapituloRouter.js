import { Router } from 'express';
import CapituloController from '../Controller/CapituloController.js';
import multer from "../Middlewares/uploadimage.js"

const capituloRouter = Router()
const controller = new CapituloController();

capituloRouter.get('/', controller.todos);
capituloRouter.get('/:id', controller.porId);
capituloRouter.post('/', multer.single('logo'), controller.criar);

export default capituloRouter;