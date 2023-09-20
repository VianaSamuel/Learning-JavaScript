/*
Crie 4 funções que aceitem qualquer quantidade de parâmetros e utilizem a sintaxe de arrow functions para calcular as operações abaixo:
    - Média Aritmética Simples: Calculada somando todos os valores e dividindo o total da soma pela quantidade de valores;
    - Média Aritmética Ponderada: Calculada somando as multiplicações dos valores pelos seus respectivos pesos e dividindo o total pela soma dos pesos;
    - Mediana: Calculada encontrando o valor central de uma sequência de números e, caso existam dois números centrais, é calculada através da média aritmética simples desses dois números;
    - Moda: Calculada encontrando o valor que mais se repete em um dado conjunto.
*/

const mediaSimples = (...entries) => {
    // soma acumulativa de itens
    const soma = entries.reduce((accum, entry) => accum + entry.number, 0)
    // retorna (soma/qntd. itens)
    return (soma/entries.length).toFixed(1)
}
const mediaPonderada = (...entries) => {
    // soma acumulativa de itens (número * peso)
    const soma = entries.reduce((accum, { number, weight }) => accum + (number * (weight ?? 1)), 0)
    // soma de pesos
    const somaPesos = entries.reduce((accum, entry) => accum + (entry.weight ?? 1), 0)
    // retorna (soma/soma de pesos)
    return (soma/somaPesos).toFixed(1)
}
const mediana = (...entries) => {
    // ordenação crescente
    const ordered = [...entries].sort((a, b) => a - b)
    // definição do meio
    const middle = Math.floor(ordered.length/2)
    // se ímpar -> retorna meio, se par -> retorna média simples dos dois números centrais
    return entries.length % 2 !== 0 ? entries[middle].number : mediaSimples(ordered[middle], ordered[middle-1])
}
const moda = (...entries) => {
    // [[n, qntd], [n, qntd], [n, qntd]]
    // cria array de arrays onde [][0] é o número e [][1] é a quantidade de vezes em que ele repete
    const repeticoes = entries.map(entry => [
        entry.number,
        entries.filter(n => entry.number===n.number).length
    ])
    // ordenação decrescente, com base na quantidade de vezes em que um número repete
    repeticoes.sort((a, b) => b[1] - a[1])
    // retorna o número que mais repetiu
    return repeticoes[0][0]
}

const randomize = () => {
    const random = []
    const chaos = Math.floor(Math.random() * (7 - 4 + 1)) + 4
    for (let i=0; i<chaos; i++) {
        const number = Math.floor(Math.random() * 9) + 1
        const weight = Math.floor(Math.random() * 5) + 1
        random.push({ number: number, weight: weight })
    }
    return random
}
const random = randomize()
const showRandom = random.map(item => `${item.number}(${item.weight})`).join('  -  ')
alert(`Número e Peso:
${showRandom}

Moda: ${moda(...random)}
Mediana: ${mediana(...random)}
Média Aritmética Simples: ${mediaSimples(...random)}
Média Aritmética Ponderada: ${mediaPonderada(...random)}`)