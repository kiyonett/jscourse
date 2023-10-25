const a = 5

function myFn() {
    function innerFn() {
        console.log(a)
    }
    innerFn() // то есть при вызове переменной, процесс будет идти до тех пор пока не найдет эту переменную в любой области видимости
}
myFn()

setTimeout(myFn,1000)