import { PostType, PrismaClient } from "@prisma/client";
const repository = new PrismaClient().post;
export default class PostController { 

  async todos(req, res) {
    const entidades = await repository.findMany();
    res.status(200).json(entidades);
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
      req.body.imagem = req.file.filename.toString();
      let {tipo, titulo, descricao, imagem} = req.body;
      if(tipo == 1){
        tipo = PostType.NOTICIA
      } else if(tipo == 2){
        tipo = PostType.EVENTO
      }else{
        tipo = PostType.PROJETO
      }
      const entidade = await repository.create({
        data:{
          tipo,
          titulo,
          descricao,
          imagem
        }
      }) 
      res.status(201).json(entidade);
    }
  }

  async noticias(req, res) {
    const entidades = await repository.findMany({where: { tipo: PostType.NOTICIA}});
    res.status(200).json(entidades);
  }

  async eventos(req, res) {
    const entidades = await repository.findMany({where: { tipo: PostType.EVENTO}});
    res.status(200).json(entidades);
  }

  async projetos(req, res) {
    const entidades = await repository.findMany({where: { tipo: PostType.PROJETO}});
    res.status(200).json(entidades);
  }

}