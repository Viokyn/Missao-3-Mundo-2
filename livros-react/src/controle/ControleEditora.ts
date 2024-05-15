import { Editora } from "../modelo/Editora";

const editoras: Array<Editora> = [
  { codEditora: 1, nome: 'Editora X'},
  { codEditora: 2, nome: 'Editora Y'},
  { codEditora: 3, nome: 'Editora Z'}
];

class ControleEditora {
  getEditoras(): Array<Editora> {
    return editoras;
  }

  getNomeEditora(codEditora: number): string | undefined {
    const editora = editoras.find(editora => editora.codEditora === codEditora);
    return editora ? editora.nome : undefined;
  }

}

export { ControleEditora };