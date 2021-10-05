const techs = new Set() // criando um set vazio
console.log(techs.size) // 0

techs.add('JS');
techs.add('React');
techs.add('HTML');
techs.add('CSS');
techs.add('Node');
techs.add('TypeScript');

console.log(techs.size);
console.log(techs);

// Deletando um elemento de set
console.log(techs.delete('Node'));
console.log(techs.size); // 5 ao inves de 6 como foi criado no início