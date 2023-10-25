// объекты в js

const myCity = { // в данном примере myCity это объект, а всё в скобках это его свойства
    city: 'Osaka',
    country: 'Japan',
    popular: true
}

console.log(myCity) // в этой строке я вывожу объект майСити и его свойство 'город' в консоль

console.log(myCity)
// используемый тут синтаксис это точечная запись (Dot notation)

//далее используя точечную запись я могу изменить свойства объекта
myCity.popular = false

console.log(myCity)

//точно также я могу и создать новые свойства

myCity.isItMine = ' нет, не мой'

console.log(myCity)

// а сейчас с помощью оператора делит, я удалю свойство isItMine

delete myCity.isItMine

console.log(myCity)