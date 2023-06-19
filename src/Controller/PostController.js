import { PrismaClient } from "@prisma/client";

export default class PostController {
    static repository = new PrismaClient().post;

  todos() {
    return repository.findMany();
  }

  porId(id) {
    return repository.findUnique({ where: { id } });
  }

  criar(post) {
    return repository.create({ data: post })
  }

  atualizar(post) {
    return repository.update({
      where: { id: post.id },
      data: post
    });
  }

  remover(id) {
    return repository.delete({ where: { id } });
  }
}