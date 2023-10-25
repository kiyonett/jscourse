const myArray = [1,2,3]
console.log(myArray)
// почему же мы может использовать фукнции массива в собсвенных массивах?
// да потому что собственных массив *наследует* их функции
myArray.push(4) // !! Добавляет объект в конец массива !! 

console.log(myArray)

myArray.push(true)

console.log(myArray)