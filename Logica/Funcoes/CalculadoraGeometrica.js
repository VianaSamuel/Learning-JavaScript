/*
Escreva um programa que calcula a área de diferentes formas geométricas. O programa deve iniciar com um menu contendo as
diferentes opções de cálculos. As opções devem ser:
- área do triângulo: base * altura / 2
- área do retângulo: base * altura
- área do quadrado: lado^2
- área do trapézio: (base maior + base menor) * altura / 2
- área do círculo: pi * raio^2 (considere pi = 3.14)
Você deve escrever o programa utilizando funções sempre que possível, a fim de separar os procedimentos.
*/

function areaTriangulo(b, h){
    b = parseFloat(prompt("Digite a base:"))
    h = parseFloat(prompt("Digite a altura:"))
    return (b*h)/2
}
function areaRetangulo(b, h){
    b = parseFloat(prompt("Digite a base:"))
    h = parseFloat(prompt("Digite a altura:"))
    return b*h
}
function areaQuadrado(l){
    l = parseFloat(prompt("Digite o lado:"))
    return l*l
}
function areaTrapezio(bMaior, bMenor, h){
    bMaior = parseFloat(prompt("Digite a base maior:"))
    bMenor = parseFloat(prompt("Digite a base menor:"))
    h = parseFloat(prompt("Digite a altura:"))
    return ((bMaior + bMenor) * h) / 2
}
function areaCirculo(r){
    r = parseFloat(prompt("Digite o raio:"))
    const pi = 3.14
    return pi * (r*r)
}

function menu(){
    return prompt(
        "---------------------------------" +
        "\nCALCULADORA GEOMÉTRICA" +
        "\n---------------------------------" +
        "\n\n1. Área de um Triângulo" +
        "\n2. Área de um Retângulo" +
        "\n3. Área de um Quadrado" +
        "\n4. Área de um Trapézio" +
        "\n5. Área de um Círculo" +
        "\n\n6. Sair"
    )
}
function executar(){
    let opt = ""

    while (opt !== "6"){
        opt = menu()
        let resultado
    
        switch (opt){
            case "1":
                resultado = areaTriangulo()
                break
    
            case "2":
                resultado = areaRetangulo()
                break
                
                case "3":
                    resultado = areaQuadrado()
                break
    
            case "4":
                resultado = areaTrapezio()
                break
            
            case "5":
                resultado = areaCirculo()
                break
    
            case "6":
                break
    
            default:
                alert("Favor escolher uma opção válida.")
                break
        }

        if (resultado) alert("Resultado: " + resultado)
    }
}

executar()