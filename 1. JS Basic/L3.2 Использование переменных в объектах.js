// Объекты. Использование переменных

const name = 'Sergey'
const postQty = 18

const userProfile = { // то есть, в качестве значений и названий свойств можно использовать переменные
    name, // если одинаковые то, можно писать и вот так
    postQty, // сокр свойства рекомендуется размещать В НАЧАЛЕ объекта
    hasSighnedAgreement: false
}

console.log(userProfile)