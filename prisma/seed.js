import { PostType, PrismaClient, Role } from '@prisma/client'

const prisma = new PrismaClient();

const capituloList = [
  {
    nome: "CS",
    logo: '1687710807111_CS-IEEE UFRN Symbol.png',
    path: "/SobreCS",
	ramoId: 1
  },
  {
    nome: "PELS/IAS",
    logo: '1687710826569_Logo PELS_IAS UFRN.png',
    path: "/SobrePelsias",
	ramoId: 1
  },
  {
    nome: "WIE",
    logo: '1687710836600_LOGO WIE FUNDO TRANSPARENTE.png',
    path: "/SobreWie",
	ramoId: 1
  },
  {
    nome: "In Class",
    logo: '1687710847548_Logo_In_Class.png',
    path: "/SobreInClass",
	ramoId: 1
  },
  {
    nome: "RAS",
	logo: "1687778560008_LOGO RAS.png",
	path: "/SobreRAS",
	ramoId: 1
  }
];

const postList = [
    {
		tipo: PostType.NOTICIA,
		titulo: "Confraternização IEEE",
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		imagem: "1687780408222_img.png"
	},
	{
		tipo: PostType.EVENTO,
		titulo: "Curso IEEE",
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		imagem: "1687781479353_img.jpg"
	},
	{
		tipo: PostType.PROJETO,
		titulo: "IEEE Irmão",
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		imagem: "1687782055912_IEEE IrmÃ£o.jpeg"
	},
	{
		tipo: PostType.NOTICIA,
		titulo: "Confraternização IEEE",
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		imagem: "1687782160439_img.png"
	},
	{
		tipo: PostType.NOTICIA,
		titulo: "Confraternização IEEE",
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		imagem: "1687782163286_img.png"
	},
	{
		tipo: PostType.EVENTO,
		titulo: "Evento IEEE",
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		imagem: "1687782177648_img.jpg",
	},
	{
		tipo: PostType.EVENTO,
		titulo: "Evento IEEE",
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		imagem: "1687782178255_img.jpg"
	},
	{
		tipo: PostType.PROJETO,
		titulo: "Evento IEEE",
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		imagem: "1687782203214_IEEE IrmÃ£o.jpeg"
	},
	{
		tipo: PostType.PROJETO,
		titulo: "Evento IEEE",
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		imagem: "1687782203886_IEEE IrmÃ£o.jpeg"
	}
];

async function cadastrarCapitulo() {
  capituloList.forEach((capitulo) => (prisma.capitulo.create({ data: capitulo }).catch(error => console.log('error:', error))));
}

async function cadastrarPost() {
    postList.forEach((post) => (prisma.post.create({ data: post }).catch(error => console.log('error:', error))));
  }

async function cadastrarUsuario() {
    prisma.usuario.create({
        data: {
            email: "admin@gmail.com",
		    name: "admin",
		    role: Role.ADMIN,
		    capituloId: 1
        }
      }).catch((error => console.log('error:', error)))
}

async function main() {
  prisma.ramo.create({
    data: {
        nome: "IEEE",
        logo: "1687710503812_logo-44.png"
    }
  }).then(cadastrarCapitulo).then(cadastrarUsuario).then(cadastrarPost)
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })