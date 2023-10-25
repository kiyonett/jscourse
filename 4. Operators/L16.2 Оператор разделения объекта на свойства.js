// ... - опер раз об на св


// НИХУЯ НАКОНЕЦ ТАКИ

const button = {
    width: 200,
    text: "Buy"
}

const redButton = {
    ...button,
    color: 'red'
}

const redButtonBold = {
    ...redButton,
    format: 'bold'
}

console.table(redButtonBold)