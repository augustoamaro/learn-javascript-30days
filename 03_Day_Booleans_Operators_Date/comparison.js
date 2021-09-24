console.log(3 > 2);              // true, 3 maior que 2
console.log(3 >= 2);             // true, 3 maior que 2
console.log(3 < 2);              // false,  3 maior 2
console.log(2 < 3);              // true, 2 menor que 3
console.log(2 <= 3);             // true, 2 menor que 3
console.log(3 == 2);             // false, 3 não é igual a 2
console.log(3 != 2);             // true, 3 não é igual a 2
console.log(3 == '3');           // true, comparando apenas o valor
console.log(3 === '3');          // false, comprando o valor e o tipo
console.log(3 !== '3');          // true, comprando o valor e o tipo
console.log(3 != 3);             // false, comparando o valor
console.log(3 !== 3);            // false, comprando o valor e o tipo
console.log(0 == false);         // true, equivalente
console.log(0 === false);        // false, não exatamente o mesmo
console.log(0 == '');            // true, equivalente
console.log(0 == ' ');           // true, equivalente
console.log(0 === '');           // false, não exatamente o mesmo
console.log(1 == true);          // true, equivalente
console.log(1 === true);         // false, não exatamente o mesmo
console.log(undefined == null);  // true
console.log(undefined === null); // false
console.log(NaN == NaN);         // false, diferente
console.log(NaN === NaN);        // false
console.log(typeof NaN);         // number

console.log('mango'.length == 'avocado'.length);  // false
console.log('mango'.length != 'avocado'.length);  // true
console.log('mango'.length < 'avocado'.length);   // true
console.log('milk'.length == 'meat'.length);      // true
console.log('milk'.length != 'meat'.length);      // false
console.log('tomato'.length == 'potato'.length);  // true
console.log('python'.length > 'dragon'.length);   // false