const myObject = {
    x: 12,
    y: 11,
    z: `abc`
} // x,y,z - ключи объекта - названия свойств

Object.keys(myObject).forEach(key => { // Object.keys - получение всех ключей объекта в виде массива || превращаем мойОбъект в массив
// грубо говоря, конвертируем объект в массив - что не есть удобно
    console.log(key, myObject[key])
})