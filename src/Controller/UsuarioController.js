import { PrismaClient } from "@prisma/client";
const repository = new PrismaClient().usuario;
export default class UsuarioController {
    
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

}