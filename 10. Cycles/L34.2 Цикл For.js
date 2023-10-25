for (let i = 0; i < 5; i++) { // три исходные инструкции
    console.log(i)
}

// цикл фор для массива

const myArray = ['first','second','third'];

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i])
}

// правильный перебор через форич

myArray.forEach((element, index) => {
    console.log(element, index)
});