// Пример

let a, b // создали в глобальной области видимости

function myFn() { // создали в глобальной области видимости
    let b // локальная область видимости
    a = true
    b = 10
    console.log(b)
}

myFn()

console.log(a)
console.log(b)