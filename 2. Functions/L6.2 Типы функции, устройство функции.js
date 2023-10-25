// Типы функций
// Именованная && Присвоена переменной && анонимной && аргументом, при вызове другой функции && методом
// Функция это объект


function myFn(a,b) {
    let c
    a = a+1
    c = a+b
    return c
}

function conlog(output) {
    return console.log(output)
}

conlog(myFn(1,44))


function numb() {

}

conlog(numb())