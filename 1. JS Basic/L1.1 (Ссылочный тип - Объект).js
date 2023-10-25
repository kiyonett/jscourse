const muzarom = {
    jopa:'big',
    brain:false
} // создал объект (ссылочный тип)

const copyOfMuzaromStupidness = muzarom // сделал ещё один объект, который ссылается на первый
// потому что может :))

copyOfMuzaromStupidness.tits = "huge" // добавил ссылке необходимый аттребут

console.log(copyOfMuzaromStupidness) // и при выводе мы видим что и оригиналу он был присвоен, тк объект ЭТО ССЫЛОЧНЫЙ ТИП