/*
Construa uma página web que permita montar a escalação de um time de jogadores.
Nele deverá ser possível:
- ESCALAR UM JOGADOR
    - Informar a posição.
    - Informar o nome.
    - Informar o número da camisa.
    - Ter um botão “Escalar”, que confirma a ação e insere as informações em uma lista na página.
    - Após a escalação, os campos de texto devem ser limpos.
- REMOVER UM JOGADOR
    - Informar o número da camisa.
    - Ter um botão “Remover”, que confirma a ação e remove o jogador da lista na página.
    - Após a remoção, o campo de texto deve ser limpo.
*/

function addPlayer(){
    const position = document.getElementById('position').value
    const name = document.getElementById('name').value
    const number = document.getElementById('number').value

    const save = confirm('Escalar ' + name + ' como ' + position + '?')
    if (save){
        const teamList = document.getElementById('team-list')
        const playerItem = document.createElement('li')

        playerItem.id = 'player-' + number
        playerItem.innerText = position + ': ' + name + ' (' + number + ')'

        teamList.appendChild(playerItem)
        document.getElementById('position').value = ''
        document.getElementById('name').value = ''
        document.getElementById('number').value = ''
    } 
}

function removePlayer(){
    const numberToRemove = document.getElementById('numberToRemove').value
    const playerToRemove = document.getElementById('player-' + numberToRemove)

    const save = confirm('Remover o jogador ' + playerToRemove.innerText + '?')
    if (save){
        playerToRemove.remove()
        document.getElementById('numberToRemove').value = ''
    }
}