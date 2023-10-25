const myArray = [1,2,3]
console.log(myArray)

const newArray = myArray.map((el) => {
    return el*3
}) // map делает тоже самое что и foreach, только возвращает новый массив

console.log(newArray)
console.log(myArray)