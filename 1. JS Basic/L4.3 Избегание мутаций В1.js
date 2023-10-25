// Избегание мутаций
// Вариант 1
const person = {
    name: 'Anton',
    cli4ka: 'Gandon',
    age: 12
}

const person2 = Object.assign({}, person)

person2.age = 91

console.log(person2.age)
console.log(person.age)
// В первом варианте мы просто с помощью ассайн присваеваем пустому объекту, объект персон
// То есть, создаём новый