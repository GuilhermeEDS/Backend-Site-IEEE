import { PrismaClient } from "@prisma/client";

export default class CapituloController {
    static repository = new PrismaClient().capitulo;

  todos() {
    return repository.findMany();
  }

  porId(id) {
    return repository.findUnique({ where: { id } });
  }

  criar(capitulo) {
    return repository.create({ data: capitulo })
  }

  atualizar(capitulo) {
    return repository.update({
      where: { id: capitulo.id },
      data: capitulo
    });
  }

  remover(id) {
    return repository.delete({ where: { id } });
  }
}