// Избегание мутаций
// Вариант 2
const person = {
    name: 'Anton',
    cli4ka: 'Gandon',
    age: 12
}

const person2 = { ...person } // ... = оператор разделения объекта на свойства

person2.name = 'Eva'
person2.cli4ka = 'Shlushka'

console.log(person2.name)
console.log(person.name)
// Вариант удобнее чем первый, но попрежнему ненадёжный, тк вложенные свойства будут изменяться