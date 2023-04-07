/*
Escreva um programa para simular um baralho de cartas. O programa deve fornecer um menu interativo, que contém a quantidade
de cartas que atualmente estão no baralho, e as opções “Adicionar uma Carta”, que deve perguntar o nome da carta e adicioná-la
ao topo do baralho, “Puxar uma Carta”, que deve retirar a carta do topo do baralho e mostrar o nome da carta puxada, e “Sair”.
*/

let opt = ""
let arr = []
while (opt !== "3"){
    opt = prompt(
        "Qntd. de Cartas: " + arr.length +
        "\n\n1. Adicionar uma Carta" +
        "\n2. Puxar uma Carta" +
        "\n3. Sair"
    )
    switch (opt){
        case "1":
            let added = prompt("Digite a nova carta:")
            arr.push(added)
            break

        case "2":
            let removed = arr.pop()
            removed ? alert("Carta puxada: " + removed) : alert("Não há nenhuma carta no baralho.")
            break

        case "3":
            break

        default:
            alert("Favor escolher uma opção válida.")
            break
    }
}