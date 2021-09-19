// 1. Declare uma variável chamada desafio e atribua-a a um valor inicial '30 Days of JavaScript'.
let challenge = '30 Days of JavaScript ';

// 2. Imprima a string no console do navegador usando console.log()
console.log('2) ', challenge);

// 3. Imprima o comprimento da string no console do navegador usando console.log ()
console.log('3) ' ,challenge.length);

// 4. Altere todos os caracteres da string para letras maiúsculas usando o método toUpperCase ()
console.log('4) ', challenge.toUpperCase());

// 5. Altere todos os caracteres da string para letras minúsculas usando o método toLowerCase()
console.log('5) ', challenge.toLowerCase());

// 6. Corte a primeira palavra da cadeia utilizando substr() ou substring()
console.log('6) ', challenge.substr(1));

// 7. Corte a frase Dias de JavaScript de 30 Days of JavaScript.
console.log('7) ', challenge.slice(3));

// 8. Verifique se a string contém uma palavra Script usando o método includes ()
console.log('8) ', challenge.includes('Script'));

// 9. Divida a string em um array usando o método split()
console.log('9) ', challenge.split(''));

// 10. Divida a string 30 Days of JavaScript no espaço usando o método split()
console.log('10) ', challenge.split(' '));

// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' divida a string na vírgula e alterá-la para um array.
let string = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log('11) ', string.split(' '));

// 12. Altere 30 Days of JavaScript para 30 Days of Python usando o método replace().
console.log('12) ', challenge.replace('JavaScript', 'Python'));

// 13. Qual o caractere no índice 15 na string '30 Days of JavaScript' ? Use o método charAt().
console.log('13) ', challenge.charAt(15));

// 14. Qual é o código de caractere de J na string '30 Days of JavaScript'usando charCodeAt().
console.log('14) ', challenge.charCodeAt('J'));

// 15. Use indexOf para determinar a posição da primeira ocorrência de 'a' em 30 Days of JavaScript.
console.log('15) ', challenge.indexOf('a'));

// 16. Use lastIndexOf para determinar a posição da última ocorrência de a em 30 Days of JavaScript.
console.log('16) ', challenge.lastIndexOf('a'));

// 17. Use indexOf para encontrar a posição da primeira ocorrência da palavra porque na seguinte frase: 'Você não pode terminar uma frase com porque porque porque é uma conjunção'.
let phrase = 'Você não pode terminar uma frase com porque porque porque é uma conjunção'
console.log('17) ', phrase.indexOf('porque'));

// 18. Use lastIndexOf para encontrar a posição da última ocorrência da palavra porque na seguinte frase: 'Você não pode terminar uma frase com porque porque porque é uma conjunção'.
console.log('18) ', phrase.lastIndexOf('porque'));

// 19. Use a pesquisa para encontrar a posição da primeira ocorrência da palavra porque na seguinte frase: 'Você não pode terminar uma frase com porque porque porque é uma conjunção'.
console.log('19) ', phrase.search('porque'));

// 20. Use trim () para remover qualquer espaço em branco no início e no final de uma string. Ex: '30 Days of JavaScript'.
console.log('20) ', challenge.trim(' '));

// 21. Use o método startsWith () com a string 30 Days of JavaScript e torna o resultado verdadeiro.
console.log('21) ', challenge.startsWith('30'));

// 22. Use o método endsWith() com a string 30 Days of JavaScript e torne o resultado verdadeiro.
console.log('22) ', challenge.endsWith('JavaScript'))

// 23. Use match() método para encontrar todo 'a' em 30 Days of JavaScript.
console.log('23) ', challenge.match('a'));

// 24. Use concat() e mescle '30 dias de 'of' JavaScript 'em uma única string, '30 Days of JavaScript'.
let days = '30 Days of';
console.log('24) ', days.concat('JavaScript'));

// 25. Use o método repeat() para imprimir 30 Days of JavaScript 2 vezes.
console.log('25) ', challenge.repeat(10));