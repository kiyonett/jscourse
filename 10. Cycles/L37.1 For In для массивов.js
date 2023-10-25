const myArray = [true, 10, 'abc', null]

for (const key in myArray) { // key - индекс каждого элемента массива
    console.log(myArray[key])
}

// так делать не рекомендуется