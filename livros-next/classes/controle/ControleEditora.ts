import Editora from "../modelo/Editora";

const editoras: Array<Editora> = [
    { codEditora: 1, nome: "Editora 1" },
    { codEditora: 2, nome: "Editora 2" },
    { codEditora: 3, nome: "Editora 3" },
    { codEditora: 4, nome: "Editora 4" },
]


class ControleEditora {
    getEditoras(): Array<Editora> {
        return editoras
    }

    getNomeEditora(codEditora: number): string {
        const editora = editoras.filter((e) => e.codEditora === codEditora)[0]
        return editoras ? editora.nome : ""
    }
}

export default ControleEditora