//=====ESTILIZAÇÃO POR CLASSES=====//
function switchTheme(){
    document.body.classList.toggle('is-light')
    document.body.classList.toggle('is-dark')
}

//=====ESTILIZAÇÃO INLINE (prioritária)=====//
function useLightTheme(){
    document.body.style.color = '#212529'
    document.body.style.backgroundColor = '#f1f5f9'
}
function useDarkTheme(){
    document.body.style.color = '#f1f5f9'
    document.body.style.backgroundColor = '#212529'
}

//=====EVENTOS=====//
document.getElementById('light-btn').addEventListener('click', useLightTheme)
document.getElementById('dark-btn').addEventListener('click', useDarkTheme)
document.getElementById('switch-btn').addEventListener('click', switchTheme)