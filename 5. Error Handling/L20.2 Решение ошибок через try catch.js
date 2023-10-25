const fnWithError = () => { // стрелочная функция
    throw new Error('error for testing')
}

try {
    fnWithError() // выполнение блока кода
} catch(error) { // это выполняется в случае возникновения ошибок в блоке try
    console.log('Сейчас будет выведена ошибка как реальная ошибка.')
    console.error(error)
    console.log('А сейчас только её сообщение')
    console.log(error.message)
}
console.log(' ')
console.log('А это подтверждение работоспособности кода') 

// !! crash likeable block of code should be putted in try/catch blocks !!