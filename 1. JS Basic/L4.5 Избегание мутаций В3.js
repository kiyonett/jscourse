// Избегание мутаций
// Вариант 3
const person = {
    name: 'Anton',
    cli4ka: 'Gandon',
    age: 12
}

const person2 = JSON.parse(JSON.stringify(person))

person2.name = 'Eva'
person2.cli4ka = 'Shlushka'

console.log(person2.name)
console.log(person.name)
// just BRUH
// зато полностью надёжный