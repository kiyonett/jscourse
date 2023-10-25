const myObject = {
    x: 12,
    y: 11,
    z: `abc`
}

Object.values(myObject).forEach(value => { // превращаем мойОбъект в массив
    console.log(value) // можно сделать и так, только мы не сможем вывести названия свойств объекта
})