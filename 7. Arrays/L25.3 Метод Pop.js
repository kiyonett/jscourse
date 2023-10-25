const myArray = [1,2,3]
console.log('Оригинальный',myArray)

myArray.pop() // !! Удаляет элемент в конце массива !! || Не использует никаких аргументов (чистые скобки) 

console.log(myArray)

const removedElement = myArray.pop() // метод помимо удаления, также и возвращает удалённый элемент

console.log(myArray)
console.log(removedElement)