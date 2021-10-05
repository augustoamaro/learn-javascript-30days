// Adicionando um elemento usando set
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

// Também podemos usar loop para adicionar um elemento a um conjunto.

setOfTechs = new Set()

for (const tech of techs) {
    setOfTechs.add(tech)
    console.log(tech)
}