import { Livro } from "../modelo/Livro";

const livros: Array<Livro> = [
  { codigo: 1, codEditora: 1, titulo: 'Livro 1', resumo: 'Resumo 1', autores: ['Autor X']},
  { codigo: 2, codEditora: 2, titulo: 'Livro 2', resumo: 'Resumo 2', autores: ['Autor Y']},
  { codigo: 3, codEditora: 3, titulo: 'Livro 3', resumo: 'Resumo 3', autores: ['Autor Z']},
];

class ControleLivro {
  obterLivros(): Array<Livro> {
    return livros;
  }

  incluir(novoLivro: Livro): void {
    const maiorCodigo =  livros.reduce((max, livro) => livro.codigo > max ? livro.codigo : max, 0);

    novoLivro.codigo = maiorCodigo + 1;

    livros.push(novoLivro);
  }

  excluir(codigo: number): void {
    const index = livros.findIndex(livro => livro.codigo === codigo);
    if (index !== -1) {
      livros.splice(index, 1);
    }
  }
}

export { ControleLivro };