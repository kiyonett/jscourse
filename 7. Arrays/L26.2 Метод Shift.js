const myArray = [1,2,3]
console.log(myArray)

myArray.shift() // тоже самое что и поп, только удаляет первый элемент

console.log(myArray)

const removedElement = myArray.shift() // точно также как и поп, возможно вызвать его результат

console.log(myArray, '  Удалённый элемент -', removedElement)