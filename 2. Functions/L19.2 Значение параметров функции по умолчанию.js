function multByFactor(value, multiplier = 1) { // multiplier = 1 - присвовение дефолтного значения
    return value * multiplier
}

console.log(multByFactor(10,2))
console.log(multByFactor(5))

function plus(value, value2 = 0) {
    return value + value2
}

console.log(`Сложение 2 и 3 = ${plus(2,3)}`)
console.log(`Сложение 2 и не заданое число = ${plus(2)}`)

// переписать как анон
const tempvalue = function (value, multiplier) {
    return value * multiplier
}

// переписать как стрелочную
const tempvalue2 = (value,multiplier) => value * multiplier

// вывод
console.log(tempvalue(4,2), tempvalue2(4,4))

// ==========
// ==========
// ==========

console.log(' ')
console.log(' ')
console.log(' ')
console.log(' ')
console.log(' ')

// второй пример

const newPost = (post, addedAt = Date()) => ({ // () - неявно возвращают объект
    ...post, // чисто копируем значение post 
    addedAt,
})

const firstPost = {
    id: '1',
    author: 'yori'
}

console.table(newPost(firstPost))