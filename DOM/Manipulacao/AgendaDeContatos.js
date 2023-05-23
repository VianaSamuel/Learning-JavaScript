function addContact(){
    // puxa a seção (section) de contatos
	const contactSection = document.getElementById('contacts-list')

    // cria o título (h3)
    const h3 = document.createElement('h3')
    h3.innerText = 'Contato'
    // cria a lista (ul)
    const ul = document.createElement('ul')

    // cria o ITEM (li) nome
    const nameLi = document.createElement('li')
    nameLi.innerText = 'Nome: '
    // cria o INPUT
    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'fullname'
    //
    // amarra o input no item (li)
    nameLi.appendChild(nameInput)
    // amarra o item (li) na lista (ul)
    ul.append(nameLi, document.createElement('br'))
    
    // cria o ITEM (li) telefone
    const phoneLi = document.createElement('li')
    phoneLi.innerText = 'Telefone: '
    // cria o INPUT
    const phoneInput = document.createElement('input')
    phoneInput.type = 'text'
    phoneInput.name = 'phone'
    //
    // amarra o input no item (li)
    phoneLi.appendChild(phoneInput)
    // amarra o item (li) na lista (ul)
    ul.append(phoneLi, document.createElement('br'))
    
    // cria o ITEM (li) endereço
    const addressLi = document.createElement('li')
    addressLi.innerText = 'Endereço: '
    // cria o INPUT
    const addressInput = document.createElement('input')
    addressInput.type = 'text'
    addressInput.name = 'address'
    //
    // amarra o input no item (li)
    addressLi.appendChild(addressInput)
    // amarra o item (li) na lista (ul)
    ul.append(addressLi, document.createElement('br'))

    // amarra o título (h3) e a lista (ul) na seção (section)
    contactSection.append(h3, ul)
}

function removeContact(){
    // puxa a seção (section) de contatos
	const contactSection = document.getElementById('contacts-list')

    // puxa os títulos (h3) e os contatos (ul)
    const titles = document.getElementsByTagName('h3')
    const contacts = document.getElementsByTagName('ul')

    // remove o último título e último contato
    contactSection.removeChild(titles[titles.length - 1])
    contactSection.removeChild(contacts[contacts.length - 1])
}