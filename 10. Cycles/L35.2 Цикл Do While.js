// обязательно выполнится, хотя бы один раз

do { // делай что то пока...
    //4eto
} while (false) // ...(тру)

let i = 0

//do {
//    console.log(i);
//    i++
//} while (i < 5)

// итог, do while следует использовать, если нужно чтобы цикл ХОТЬ РАЗ выполнился
// и вообще он мне кажется более удобным

i = 10

do {
    console.log(i);
    i++
} while (i < 5)