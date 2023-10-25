const sendLog = (sm1,sm2,sm3 = ``,sm4 = ``,sm5 = ``) => {
    console.log(sm1,sm2,sm3,sm4,sm5)
}


const value1 = 11; const value2 = 25;

value1 && value2
    ? sendLog(value1,value2)
    : myFunction2()