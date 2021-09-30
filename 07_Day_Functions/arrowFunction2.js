const changeToUpperCase = arr => {
    const newArr = [];
    for (const element of arr) {
        newArr.push(element.toUpperCase())
    }
    return newArr;
}

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpperCase(countries));


const printFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
}

console.log(printFullName('Augusto', 'Amaro'));

// A função acima possui apenas a instrução return, poranto, podemos retorná-la explicitamente da seguinte maneira.

const printFullName2 = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(printFullName2('Leonidas', 'of Sparta'));