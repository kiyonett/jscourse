// Методы

// МЕТОД - ЭТО СВОЙСТВО ОБЪЕКТА, ЗНАЧЕНИЕ КОТОРОГО - ФУНКЦИЯ

const myCity = {
    city: 'New York',
    cityGreeting: function () { // <-- это метод
        console.log('Greetings!!')
    }
}

myCity.cityGreeting()