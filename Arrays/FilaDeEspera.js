/*
Escreva um programa para simular uma fila de espera em um consultório médico. O programa deve iniciar fornecendo
um menu interativo, que contém a lista de todos os pacientes que estão esperando, de forma ordenada, mostrando
sua posição ao lado do nome. O menu também deve permitir escolher entre as opções “Novo Paciente”, que adiciona
um novo paciente ao fim da fila, “Consultar Paciente”, que retira e mostra o nome do primeiro paciente da fila, e “Sair”.
*/

let opt = ""
let fila = []
while (opt != 3) {
    let pacientes = "Fila:\n"
    if (fila.length === 0) pacientes += "(VAZIA)\n"
    else {
        for (let i=0; i<fila.length; i++){ pacientes += (i+1) + ": "+ fila[i] + "\n" }
    }

    opt = prompt(
        pacientes +
        "\nOpções:" +
        "\n1. Novo Paciente" +
        "\n2. Consultar Paciente" +
        "\n3. Sair"
    );
    switch (opt) {
        case "1":
            let nome = prompt("Digite o nome do paciente:")
            fila.push(nome)
            break;

        case "2":
            fila.length !== 0 ? alert("O paciente " + fila.shift() + " foi consultado.") : alert("Não há paciente a ser consultado.")
            break;

        case "3":
            break;

        default:
            alert("Favor escolher uma opção válida.")
            break;
    }
}