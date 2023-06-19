import { PrismaClient } from "@prisma/client";

export default class RamoController {
    static repository = new PrismaClient().ramo;

  todos() {
    return repository.findMany();
  }

  porId(id) {
    return repository.findUnique({ where: { id } });
  }

  criar(ramo) {
    return repository.create({ data: ramo })
  }

  atualizar(ramo) {
    return repository.update({
      where: { id: ramo.id },
      data: ramo
    });
  }

  remover(id) {
    return repository.delete({ where: { id } });
  }
}