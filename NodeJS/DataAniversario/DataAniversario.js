/*
Utiliando o módulo dayjs, crie uma função que:
    - Receba como parâmetro a data de nascimento de uma pessoa (no formato string);
    - Printe a idade dessa pessoa no dia atual;
    - Printe sua próxima data de aniversário, no formato “DD/MM/AAAA”;
    - Printe quantos dias faltam para o próximo aniversário.
Você deverá utilizar a sintaxe dos módulos CommonJS para trabalhar com o dayjs.
*/

const dayjs = require('dayjs')
const birth = '1974-12-25'

function calc(date){
    const today = dayjs()
    const birthday = dayjs(date)

    const age = today.diff(birthday, 'year')
    const nextBirthday = birthday.add(age+1, 'year')
    const daysToNextBirthday = nextBirthday.diff(today, 'day')

    console.log(`Idade: ${age}`)
    console.log(`Data de nascimento: ${birthday.format('DD/MM/YYYY')}`)
    console.log(`Próximo aniversário: ${nextBirthday.format('DD/MM/YYYY')}`)
    console.log(`Dias até completar ${age+1} anos: ${daysToNextBirthday}`)
}

calc(birth)