/*
Escreva um programa que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:
- O menu interativo deve mostrar, em seu topo, a quantidade de imóveis cadastrados.
- O menu deve fornecer as opções de salvar um novo imóvel e mostrar todos os imóveis salvos.
- Para salvar um novo imóvel, as seguintes informações devem ser pedidas:
    - Nome do Proprietário.
    - Quantidade de quartos.
    - Quantidade de banheiros.
    - Se possui garagem.
*/

let imoveis = []
let opt = ""
while (opt !== "3"){
    opt = prompt(
        "---------------------------\n" +
        "CADASTRO DE IMÓVEIS\n" +
        "---------------------------\n" +
        "Imóveis Salvos: " + imoveis.length +
        "\n\nEscolha uma opção:" +
        "\n1. Novo Imóvel" +
        "\n2. Lista de Imóveis" +
        "\n3. Sair"
    )
    switch(opt){
        case "1":
            const imovel = {}
            imovel.prop = prompt("Proprietário do imóvel:")
            imovel.quartos = prompt("Quantidade de quartos:")
            imovel.banheiros = prompt("Quantidade de banheiros:")
            imovel.garagem = confirm("O imóvel possui garagem?")

            let temp = imovel.garagem ? "Sim" : "Não"
            const save = confirm(
                "Salvar este imóvel?" +
                "\n\nProprietário: " + imovel.prop +
                "\nQuartos: " + imovel.quartos +
                "\nBanheiros: " + imovel.banheiros +
                "\nPossui garagem: " + temp
            )
            if (save) imoveis.push(imovel)
            break

        case "2":
            if (imoveis.length !== 0){
                for (let i=0; i<imoveis.length; i++){
                    let temp = imoveis[i].garagem ? "Sim" : "Não"
                    alert(
                        "\n-----------" +
                        "\nIMÓVEL " + (i+1) +
                        "\n-----------" +
                        "\nProprietário: " + imoveis[i].prop +
                        "\nQuartos: " + imoveis[i].quartos +
                        "\nBanheiros: " + imoveis[i].banheiros +
                        "\nPossui garagem: " + temp
                    )
                }
            } else {
                alert("Não há nenhum imóvel cadastrado.")
            }

        case "3":
            break

        default:
            alert("Favor escolher uma opção válida.")
            break
    }
}