const userProfile = {
    name: 'Kiyonett',
    userId: '1',
    commentsQty: 23,
    nsfwfilter: false
}

const { name, commentsQty } = userProfile // мы взяли эти свойства из локальной области видимости объекта
// и пересоздали их как глобальные переменные

// тоесть они есть и внутри объекта и снаружи, но они с друг другом не связаны
const { nsfwfilter, userId } = userProfile

userProfile.userId = 2

console.log(userProfile)
console.log()
console.log(name)
console.log(commentsQty, userId)