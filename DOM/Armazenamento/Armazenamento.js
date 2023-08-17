document.getElementById('saveSession').addEventListener('click', function(){
    const input = document.getElementById('session')
    sessionStorage.setItem('sessionInfo', input.value)
    input.value = ''
})
document.getElementById('readSession').addEventListener('click', function (){
    const info = sessionStorage.getItem('sessionInfo')
    info === null ? alert('Não há nenhum registro salvo.') : alert('O registro salvo é: ' + info)
})

document.getElementById('saveLocal').addEventListener('click', function (){
    const input = document.getElementById('local')
    localStorage.setItem('localInfo', input.value)
    input.value = ''
})
document.getElementById('readLocal').addEventListener('click', function(){
    const info = localStorage.getItem('localInfo')
    info === null ? alert('Não há nenhum registro salvo.') : alert('O registro salvo é: ' + info)
})

document.getElementById('saveCookie').addEventListener('click', function(){
    const expirationDate = new Date()
    expirationDate.setDate(expirationDate.getDate() + 2)
    const input = document.getElementById('cookie')
    const cookie = 'info=' + input.value + ';'
    const expiration = 'expires=' + expirationDate + ';'
    const path = 'path=/;'
    document.cookie = cookie + expiration + path
    input.value = ''
})