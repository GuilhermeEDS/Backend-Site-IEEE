import { Router } from 'express';
import PostController from '../Controller/PostController.js';
import multer from "../Middlewares/uploadimage.js"

const postRouter = Router()
const controller = new PostController();

postRouter.get('/', controller.todos);
postRouter.get('/find/:id', controller.porId);
postRouter.post('/', multer.single('imagem'), controller.criar);
postRouter.get('/noticia', controller.noticias);
postRouter.get('/evento', controller.eventos);
postRouter.get('/projeto', controller.projetos);

export default postRouter;