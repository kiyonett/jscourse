// Практика доступ к сайту, по данным переменной

const userInfo = {
    name: 'Sergey',
    nickname: 'kiyonett',
    age: 17
}

const { age } = userInfo

const clickNsfw = (age) => {
    return age >= 18 ? 'Вход выполнен' : 'Вход провален'
}

console.log(clickNsfw());