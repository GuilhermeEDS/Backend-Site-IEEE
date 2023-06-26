import { Router } from 'express';
import RamoController from '../Controller/RamoController.js';
import multer from "../Middlewares/uploadimage.js"

const ramoRouter = Router()
const controller = new RamoController();

ramoRouter.get('/', controller.todos);
ramoRouter.get('/:id', controller.porId);
ramoRouter.post('/', multer.single('logo'), controller.criar);

export default ramoRouter;