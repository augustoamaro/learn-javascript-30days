// O método console.table() exibe dados como uma tabela no console. Exibe dados tabulares como uma tabela. O console.table() leva um dados de argumento obrigatório, que deve ser um array ou objeto, e uma coluna de parâmetro opcional adicional.

// O primeiro exemplo é com um array. O código exibe uma tabela com duas colunas. Uma coluna de índice para exibir o índice e a coluna de valor para exibir os nomes.

const names = ['Augusto', 'Amaro', 'Thor', 'Tobi'];
console.table(names)


// Exemplo com objeto

const user = {
    name: 'Augusto',
    title: 'Programmer',
    country: 'Brasil',
    age: 758
}

console.table(user)