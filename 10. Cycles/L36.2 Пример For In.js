const myObject = {
    x: 12,
    y: 11,
    z: `abc`
}

// Цикл For In удобен для массовых действий со свойствами объекта
// Например для изменения его свойств

for(const key in myObject) { // key - в данной фукнции принимает значения каждого свойства по порядку
    console.log(key, myObject[key])
}