let a,b // undef

function myFn(){
    let b // new undef
    a = true
    b = 10 // number
    console.log('b =',b,'a =',a)
}

myFn()

console.log(a) // true
console.log(b) // undef так как ищем в глобале, а тут оно undef


// ЛОКАЛЬНАЯ ОБЛ ВИДИМОСТИ > ГЛОБАЛ