const doubleVar = (variable) => {
    if (typeof variable == 'number') {
        return variable*variable;
    } else if (typeof variable == 'string') {
        return variable+variable;
    } 
    
    else {
        return console.log(`${variable} is not a string or a number`)
    }
}

console.log(doubleVar(true))