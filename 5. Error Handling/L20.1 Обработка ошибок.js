// error handling

const fnWithError = () => { // стрелочная функция
    throw new Error('error for testing')
}

fnWithError() // непойманая ошибка

console.log('test')