import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import ramoRouter from './Router/RamoRouter.js';
import capituloRouter from'./Router/CapituloRouter.js';
import usuarioRouter from './Router/UsuarioRouter.js';
import postRouter from './Router/PostRouter.js';
import path from 'path'

const prisma = new PrismaClient();
const app = express();
const PORTA = 8080;

app.use(express.json());
app.use(cors());
app.use('/ramo', ramoRouter);
app.use('/capitulo',capituloRouter);
app.use('/usuario', usuarioRouter);
app.use('/post', postRouter);


app.route('/image/:file').get((req, res) => {
  const file = req.params.file.toString();
  const imagePath = path.resolve("./src/public/upload/" + file); 
  res.sendFile(imagePath);
})

app.listen(PORTA, () => {
  console.log(`Iniciou na porta ${PORTA}`);
});