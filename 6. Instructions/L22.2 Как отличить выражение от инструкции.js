// Выражения могут быть использованы как аргументы в вызовах функций

const myFn = (text, value = 1) => { // тут выражением служит text
    for(let i = 0; i < value; i++){
        console.log(text); // выражение-инструкция
    }
    return text
}

const b = true; // явная инструкция
let c = 10; // явная инструкция

myFn(2+3, 2) // Передали выражение
myFn(b) // Передали выражение
myFn(c = c + 1) // Передали выражение
// myFn(c = c + 1;) = Error "Uncaught SyntaxError" || передали инструкцию
// myFn(let d) = Error "Uncaught SyntaxError" || потому что инструция