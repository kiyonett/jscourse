// Мутация в JS
// Значения примитивных типов
const a = 10

let b = a

b = 30

console.log(a)

console.log(b)

// Значения ссылочного типа

//const person = {
//    name: 'Bob',
//    age: 21
//}

//person.age = 22         // Мутация объекта
//person.adult = true

//console.log(person)

// Мутирование копий

const person = {
    name: 'Bob',
    age: 21
}

const person2 = person // копирование ссылки

person2.age = 11
person2.adult = false
console.log(person)