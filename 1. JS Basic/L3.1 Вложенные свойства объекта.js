// Вложенные свойства

const myCity ={
    city:'New York',
    info: { // вложенное свойство
        isPopular:true,
        country: 'USA'
    }
}

console.log(myCity.info.isPopular)

delete myCity.info['isPopular']

console.log(myCity)