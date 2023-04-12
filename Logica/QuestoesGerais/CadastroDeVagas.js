/*
Escreva um programa que simule um sistema de vagas de emprego, onde é possível adicionar candidatos e gerenciar as vagas.
Ele deve atender os seguintes requisitos:
    - Listar vagas disponíveis (mostrar: índice, nome e quantidade de candidatos inscritos de todas as vagas)
    - Criar um nova vaga (pedir: nome para a vaga, descrição e data limite; exigir confirmação antes de salvar)
    - Visualizar uma vaga (pedir: índice da vaga; mostrar: índice, nome, descrição, data limite, nomes e quantidade de candidatos)
    - Inscrever um candidato em uma vaga (pedir: nome do candidato e índice da vaga; exigir confirmação antes de salvar)
    - Excluir uma vaga (pedir: índice da vaga; mostrar: suas informações; exigir confirmação antes de excluir)
    - Sair
Este é o exercício de revisão do módulo.
Utilizar os recursos vistos, como arrays, objetos e funções.
*/
function listar(){
    if (vagas.length === 0) alert("Não há nenhuma vaga disponível.")
    else {
        const vagasStr = vagas.reduce(function (str, vaga, i){
            str += (i+1) + ". "
            str += vaga.nome + " "
            str += "(" + vaga.candidatos.length + " candidato(s))\n"
            return str
        }, "")
    
        alert(vagasStr)
    }
}

function criar(){
    const nome  = prompt("Digite um nome para a vaga:")
    const descricao = prompt("Digite uma descrição para a vaga:")
    const dataLimite = prompt("Digite uma data limite (dd/mm/aaaa) para a vaga:")
    
    const save = confirm(
        "Criar essa vaga?" +
        "\n\nNome: " + nome +
        "\nDescrição: " + descricao +
        "\nData Limite: " + dataLimite
    )
    if (save){
        const novaVaga = {nome, descricao, dataLimite, candidatos: []}
        vagas.push(novaVaga)
    }
}

function vagaInfo(i){
    const vaga = vagas[i]
    const candidatosStr = vaga.candidatos.reduce(function (str, candidato){
        return str + "\n - " + candidato
    }, "")

    let str = ""
    str += "\nNome: " + vaga.nome
    str += "\nDescrição: " + vaga.descricao
    str += "\nData Limite: " + vaga.dataLimite
    str += "\nQntd. de Candidatos: " + vaga.candidatos.length
    if (vaga.candidatos.length !== 0) str += "\n\nCandidato(s): " + candidatosStr

    return str
}
function visualizar(){
    let i = prompt("Digite o índice da vaga a ser visualizada:")
    i--
    if (isNaN(i) || i >= vagas.length || i < 0) alert("Índice inválido.")
    else{
        const info = vagaInfo(i)
        alert(
            "---------" +
            "\nVAGA " + (i+1) +
            "\n---------" +
            info
        )
    }
}

function inscrever(){
    const candidato = prompt("Digite o nome do candidato:")
    let i = prompt("Digite o índice da vaga:")
    i--
    if (isNaN(i) || i >= vagas.length || i < 0) alert("Índice inválido.")
    else{
        const vaga = vagas[i]
        const save = confirm(
            "Inscrever candidato?" +
            "\n\nVaga: " + vaga.nome +
            "\nCandidato: " + candidato
        )
        if (save) vaga.candidatos.push(candidato)
    }
}

function excluir(){
    let i = prompt("Digite o índice da vaga:")
    i--
    if (isNaN(i) || i >= vagas.length || i < 0) alert("Índice inválido.")
    else{
        const info = vagaInfo(i)
        const save = confirm(
            "Excluir vaga?\n" +
            info
        )
        if (save) vagas.splice(i, 1)
    }
}

function menu(){
    return prompt(
        "-------------------------" +
        "\nCADASTRO DE VAGAS" +
        "\n-------------------------" +
        "\n\n1. Listar Vagas" +
        "\n2. Criar Vaga" +
        "\n3. Visualizar Vaga" +
        "\n4. Inscrever Candidato" +
        "\n5. Excluir Vaga" +
        "\n\n6. Sair"
    )
}
function executar(){
    let opt = ""
    while (opt !== "6"){
        opt = menu()
        switch(opt){
            case "1":
                listar()
                break
    
            case "2":
                criar()
                break
    
            case "3":
                visualizar()
                break
    
            case "4":
                inscrever()
                break
    
            case "5":
                excluir()
                break
    
            case "6":
                break
    
            default:
                alert("Favor escolher uma opção válida.")
                break
        }
    }
}

let vagas = []
executar()