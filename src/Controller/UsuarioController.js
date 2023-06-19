import { PrismaClient } from "@prisma/client";

export default class UsuarioController {
    static repository = new PrismaClient().usuario;

  todos() {
    return repository.findMany();
  }

  porId(id) {
    return repository.findUnique({ where: { id } });
  }

  criar(usuario) {
    return repository.create({ data: usuario })
  }

  atualizar(usuario) {
    return repository.update({
      where: { id: usuario.id },
      data: usuario
    });
  }

  remover(id) {
    return repository.delete({ where: { id } });
  }
}