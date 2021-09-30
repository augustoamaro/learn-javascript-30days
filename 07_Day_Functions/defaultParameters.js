// As vezes, passamos valores padrão para parâmetros, quando invocamos a função, se não passarmos um argumento, o valor padrão será usado.
// Tanto a declaração de função quanto a arrow function podem ter um valor ou valores padrão

// Exemplo acima com function
function greetings(name = 'Augusto') {
    let message = `${name}`
    return message
}

console.log(greetings());
console.log(greetings('Leonidas'));

// Exemplo acima com arrow function
const greetingsArrowFunction = (firstName = 'Leonidas') => {
    let message = firstName + ', bem-vindo a Sparta!';
    return message;
}

console.log('Arrow Function Example: ', greetingsArrowFunction());

// Exemplo acima com function
function generateFullName(firstName = 'Leonidas', lastName = 'Amaro') {
    let space = ' ';
    let fullName = firstName + space + lastName;
    return fullName;
}

console.log(generateFullName());
console.log(generateFullName('Luis', 'Miguel'));


// Exemplo acima com arrow function
const generateFullNameArrowFunction = (firstName = 'Leonidas', lastName = 'Amaro') => {
    let space = ' ';
    let fullName = firstName + space + lastName;
    return fullName;
}

console.log('Arrow Function Example: ', generateFullNameArrowFunction())


// Exemplo acima com function
function calculateAge(birthYear, currentYear = 2021) {
    let age = currentYear - birthYear;
    return age;
}

console.log('Age:', calculateAge(1700));

//Exemplo acima com arrow function
const calculateAgeArrowFunction = (birthYear, currentYear = 2021) => {
    let age = currentYear - birthYear;
    return age;
}

console.log('Arrow Function Example: ', 'Age:', calculateAgeArrowFunction(1992));


// Exemplo acima com function
function weightObject(mass, gravity = 9.81) {
    let weight = mass * gravity + 'N'; // o valor precisa ser mudado para string primeiro
    return weight;
}

console.log('Weight of an object in Newton: ', weightObject(100)) // gravidade na superfice da terra
console.log('Weight of an object in Newton: ', weightObject(100, 1.62)) // gravidade na superfíce da lua