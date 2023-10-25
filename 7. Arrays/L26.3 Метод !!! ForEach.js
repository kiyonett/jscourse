const myArray = [1,2,3,10]
console.log(myArray)

myArray.forEach(el => console.log(el*2)) // forEach перебирает все элементы массива
// и для каждого элемента он будет вызывать коллбек функцию
// метод фор ич возвращает андеф

console.log(myArray, 'Оригинальный массив не изменился.') 