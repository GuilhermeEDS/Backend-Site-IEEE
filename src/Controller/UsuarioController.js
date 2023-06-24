import { PrismaClient } from "@prisma/client";
const repository = new PrismaClient().usuario;
export default class UsuarioController {
    
  async todos(req, res) {
    const entidades = await repository.findMany();
    res.status(201).json(entidades);;
  }

  async porId(req, res) {
    const id = Number(req.params.id);
    const entidade = await repository.findUnique({ where: { id } })
      if (entidade == null) {
        res.status(404).send();
      } else {
        res.status(201).json(entidade);
      }
  }

  async criar(req, res) {
    const entidade = await repository.create(req.body) 
    res.status(201).json(entidade);
  }

  async atualizar(req, res) {
    repository.update({
      where: { id: capitulo.id },
      data: capitulo
    }).then((entidade) => { res.status(201).json(entidade); }).catch(next);
  }

  async remover(req, res) {
    repository.delete({ where: { id } }).then((entidade) => { res.status(200).json(entidade); }).catch(next);;
  }
}