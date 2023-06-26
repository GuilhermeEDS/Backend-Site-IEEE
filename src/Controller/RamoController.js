import { PrismaClient } from "@prisma/client";
const repository = new PrismaClient().ramo;
export default class RamoController {

  async todos(req, res) {
    const entidades = await repository.findMany();
    res.status(200).json(entidades);;
  }

  async porId(req, res) {
    const id = Number(req.params.id);
    const entidade = await repository.findUnique({ where: { id } })
      if (entidade == null) {
        res.status(404).send();
      } else {
        res.status(200).json(entidade);
      }
  }

  async criar(req, res) {
    if(req.file){
      req.body.logo = req.file.filename.toString();
      const {nome, logo} = req.body;
      const entidade = await repository.create({
        data:{
          nome,
          logo
        }
      }) 
      res.status(201).json(entidade);
    }
  }

}