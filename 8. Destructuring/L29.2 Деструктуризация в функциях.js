const userProfile = {
    name: 'Yori',
    commentsQty: 11,
    hasProved: false,
}

const userInfo = ({ name, commentsQty }) => { // взяли свойства из объекта
    if (!commentsQty) { // если НЕ (!value проверяет на наличие, тоесть если у объекта нету валуе то возвращается нижняя строка)
        return `user ${name} has no comments`
    }

    return `User ${name} has ${commentsQty} comments`
}

userInfo(userProfile)