// 1. Declare um array vazio
let array = new Array();
console.log('1)', array);

// 2. Declara um array com mais de 5 números de elementos
let numbers = [1, 2, 3, 4, 5];
console.log('2)', numbers);

// 3. Encontre o comprimento do seu array
console.log('3)', numbers.length);

// 4. Pegue o primeiro item, o item do meio e o último item do array
console.log('4)', numbers[0], numbers[2], numbers[4]);

// 5. Declare um array chamado mixedDataTypes, coloque diferentes tipos de dados na matriz e encontre o comprimento do array. O tamanho do array deve ser maior que 5
const mixedDataTypes = [
    'Augusto',
    29,
    true,
    ['0010101010'],
    {
        nome: 'Augusto',
        sobrenome: 'Amaro'
    }
];

console.log('5)', mixedDataTypes.length);

// 6. Declare um nome de variável de array itCompanies e atribua valores iniciais Facebook, Google, Microsoft, Apple, IBM, Oracle e Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 7. Imprima o array usando console.log()
console.log('7)', itCompanies);

// 8. Imprima o número de empresas do array
console.log('8)', itCompanies);

// 9. Imprime a primeira empresa, a média e a última empresa
console.log('9)', itCompanies[0], itCompanies[3], itCompanies[6]);

// 10. Imprima cada empresa
console.log('10)', itCompanies[0], itCompanies[1], itCompanies[2], itCompanies[3], itCompanies[4], itCompanies[5], itCompanies[6]);

// 11. Mude o nome de cada empresa para maiúsculas um por um e imprima-os
console.log('11)', itCompanies[0].toLocaleUpperCase(), itCompanies[1].toLocaleUpperCase(), itCompanies[2].toLocaleUpperCase(), itCompanies[3].toLocaleUpperCase(), itCompanies[4].toLocaleUpperCase(), itCompanies[5].toLocaleUpperCase(), itCompanies[6].toLocaleUpperCase());

// 12. Imprima o array como uma frase: Facebook, Google, Microsoft, Apple, IBM, Oracle e Amazon são grandes empresas de TI.
console.log('12)',itCompanies.toString());

// 13. Verifique se uma determinada empresa existe no array itCompanies. Se existir devolver a empresa senão devolver uma empresa não encontrada
const existe = itCompanies !== -1 ? console.log('Empresa Existe') : console.log('Não existe')
console.log('13)', existe);
// 14. Filtre as empresas que têm mais de um 'o' sem o método de filtro


// 15. Classifique o array usando o método sort()
console.log('15)', itCompanies. sort());

// 16. Inverta o array usando o método reverse()
console.log('16)', itCompanies.reverse());

// 17. Divida as 3 primeiras empresas do array
console.log('17)', itCompanies.slice(0, 3));

// 18. Divida as últimas 3 empresas do array
console.log('18)', itCompanies.slice(4, 7));

// 19. Separar a empresa ou empresas de TI intermediária do array
console.log('19)', itCompanies.slice(3, 4));

// 20. Remova a primeira empresa de TI do array
console.log('20)', itCompanies.shift());

// 21. Remova a empresa do meio do array
console.log('21)', itCompanies.splice(3, 3));

// 22. Remova a última empresa de TI do array
console.log('22)', itCompanies.pop());

// 23. Remova todas as empresas de TI do array
console.log('23)', itCompanies.splice());