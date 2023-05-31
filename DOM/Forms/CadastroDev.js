/*
Construa uma página web que permita cadastrar desenvolvedores, suas tecnologias e tempos de experiência. 
    - A página deve ter um input para o nome completo do desenvolvedor e um botão para adicionar uma nova tecnologia.
    - Ao clicar no botão, um evento deve ser disparado, criando no formulário uma nova linha de inputs contendo:
        - Um campo de texto para o nome da tecnologia.
        - Um grupo de botões (tipo “radio”) com opções de tempo de experiência (por exemplo, “0-2 anos”, “3-4 anos” e “5+ anos”).
        - Um botão de remover, que deve excluir essa linha.
    - O formulário também deve ter um botão de cadastrar, que salva as informações do dev em um array e limpa o formulário.
Para testar o funcionamento, você pode utilizar um simples console.log()
Para esse exercício, você deve utilizar apenas eventos adicionados via JavaScript.
A página deve funcionar sem acionar um recarregamento.
*/

// inicializa contagem de fileiras e array de desenvolvedores
let rowsCount = 0
const developers = []

// puxa form e botao de adicionar
const form = document.getElementById('dev-form')
const addTechBtn = document.getElementById('add-tech-btn')

//=====BOTAO DE ADICIONAR=====//
addTechBtn.addEventListener('click', function (ev){
    // inicializacao
    ev.preventDefault()
    const br = document.createElement('br')

    // puxa lista (fileiras) de stacks
    const stackRows = document.getElementById('dev-stack')
    // cria nova fileira (nome da tecnologia, tempo de experiencia, botao de remover)
    const newRow = document.createElement('ul')

    // controle de indice da fileira
    const rowIndex = rowsCount
    rowsCount++

    // cria id com o numero da fileira
    newRow.id = 'stack-row-' + rowIndex
    // cria classe geral
    newRow.className = 'stack-row'

    //-----NOME DA TECNOLOGIA-----// 
    let tempTech = 'tech-input-' + rowIndex
    const techNameLabel = createLabel('Nome: ', tempTech)
    const techNameInput = createInput(tempTech, null, 'tech-input', 'Ex.: JavaScript...')

    //-----TEMPO DE EXPERIENCIA-----//
    let tempXp = 'xp-radio-' + rowIndex
    const id1 = tempXp + '.1'
    const id2 = tempXp + '.2'
    const id3 = tempXp + '.3'
    const xpLabel = createLabel('Experiência: ')
    const xpRadio1 = createInput(id1, '0-2 anos', 'row-' + rowIndex, null, 'radio')
    const xpLabel1 = createLabel('0-2 anos', id1)
    const xpRadio2 = createInput(id2, '3-4 anos', 'row-' + rowIndex, null, 'radio')
    const xpLabel2 = createLabel('3-4 anos', id2)
    const xpRadio3 = createInput(id3, '5+ anos', 'row-' + rowIndex, null, 'radio')
    const xpLabel3 = createLabel('5+ anos', id3)

    //-----BOTAO DE REMOVER-----//
    const removeRowBtn = document.createElement('button')
    removeRowBtn.type = 'button'
    removeRowBtn.innerText = 'Remover'
    removeRowBtn.addEventListener('click', function(){
        stackRows.removeChild(newRow)
        stackRows.removeChild(br)
    })

    // anexa itens na fileira
    newRow.append(techNameLabel, techNameInput, xpLabel, xpRadio1, xpLabel1, xpRadio2, xpLabel2, xpRadio3, xpLabel3, removeRowBtn)
    // anexa fileira na lista
    stackRows.append(newRow, br)
})

//=====BOTAO DE CADASTRAR=====//
form.addEventListener('submit', function(ev){
    // inicializacao
    ev.preventDefault()

    // cria array de stacks
    let stacks = []

    // puxa nome e todas as fileiras
    const fullname = document.getElementById('fullname')
    const stackRows = document.querySelectorAll('.stack-row')

    // itera sobre as fileiras de stack
    stackRows.forEach(function(row){
        // puxa nome da tecnologia
        const techName = document.querySelector('#' + row.id + ' input[name="tech-input"]').value
        // puxa tempo de experiencia
        const techXp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value

        // a empurra no array de stacks
        stacks.push({name: techName, xp: techXp})
    })

    // cria dev e o empurra no array de desenvolvedores
    const newDev = {fullname: fullname.value, stacks: stacks}
    developers.push(newDev)
    alert('Desenvolvedor cadastrado com sucesso!')

    // limpa as entradas
    fullname.value = ''
    stackRows.forEach(function (row){
        row.remove()
    })
    
    // saida
    developers.forEach(function(dev){
        let stackOut = ''
        dev.stacks.forEach((function(stack){
            stackOut += 'Tecnologia: ' + stack.name + '\n'
            stackOut += 'Tempo de Experiência: ' + stack.xp + '\n'
        }))

        alert(
            'Nome: ' + dev.fullname + '\n\n' +
            stackOut + '\n'
        )
    })
    console.log(developers)
})

//=====FUNCOES AUXILIARES=====//
function createLabel(text, htmlFor){
    const label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText = text
    return label
}
function createInput(id, value, name, placeholder='', type='text'){
    const input = document.createElement('input')
    input.id = id
    input.value = value
    input.name = name
    input.placeholder = placeholder
    input.type = type
    return input
}