const sumPositiveNumbers = (a,b) => {
    if (typeof a !== 'number' || typeof b !== 'number') { // !== (== проверка) (!= не) если тип а не нумбер
        return `One of the arguments isn't a number!`
    }

    if (a < 0 || b < 0) {
        return `Numbers aren't positive`
    }

    return a + b
}

console.log(sumPositiveNumbers(1,2))