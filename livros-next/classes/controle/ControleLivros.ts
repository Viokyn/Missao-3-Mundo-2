import Livro from "../modelo/Livro";

const livros: Array<Livro> = [
    {
        codigo: 1,
        codEditora: 1,
        titulo: "Livro 1",
        resumo: "Resumo Livro 1.",
        autores: ["Autor 1", "Autor 2"],
    },
    {
        codigo: 2,
        codEditora: 2,
        titulo: "Livro 2",
        resumo: "Resumo Livro 2.",
        autores: ["Autor 3", "Autor 4"],
    },
    {
        codigo: 3,
        codEditora: 3,
        titulo: "Livro 3",
        resumo: "Resumo Livro 3.",
        autores: ["Autor 5"],
    },
]

class ControleLivro {
    obterLivros(): Array<Livro> {
        return livros
    }

    incluir(livro: Livro): void {
        livro.codigo = livros.length > 0 ? livros.at(-1)!.codigo + 1 : 1;
        livros.push(livro);
    }

    excluir(codigo: number) {
        const index = livros.findIndex((livro) => livro.codigo === codigo);
        livros.splice(index, 1);
    }
}
export default ControleLivro