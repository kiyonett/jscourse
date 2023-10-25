function conlog(op){
    return console.log(op)
}
// Передача значения по ссылке || Создание копии объекта функции

const personOne = { // объект персон уан
    name: 'Bob',
    age: 17,
    morality: false
}

//function increacePersonAgeAndMorality(person){
//    person.age++
//    person.morality = true
//    return person
//} // функция мутирует объект по ссылке

function increaseAgeAndMorality(ncPerson){
    const updatedPerson = {... ncPerson}
    updatedPerson.age++
    updatedPerson.morality = true
    return updatedPerson
}

//increacePersonAgeAndMorality(personOne)

const updatedPersonOne = increaseAgeAndMorality(personOne)

conlog(updatedPersonOne)
conlog(personOne)