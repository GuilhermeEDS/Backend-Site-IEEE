import { PrismaClient } from "@prisma/client";
const repository = new PrismaClient();
export default class CapituloController {
    
  async todos(req, res) {
    const entidades = await repository.capitulo.findMany();
    res.status(200).json(entidades);
  }

  async porId(req, res) {
    const id = Number(req.params.id);
    const entidade = await repository.capitulo.findUnique({ where: { id } })
      if (entidade == null) {
        res.status(404).send();
      } else {
        res.status(200).json(entidade);
      }
  }

  async criar(req, res) {
    if(req.file){
      req.body.logo = req.file.filename.toString();
      let {nome, logo, ramoId} = req.body;
      ramoId = Number(ramoId) 
      const entidade = await repository.capitulo.create({
        data:{
          nome,
          logo,
          ramoId
        }
      }) 
      res.status(201).json(entidade);
    }
  }

}