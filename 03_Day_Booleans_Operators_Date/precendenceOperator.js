// Método alert()
// O método alert() exibe uma caixa de alerta com uma mensagem especificada e um botão de OK.

alert('JS rocks');


// Método prompt()
// O método prompt() exibe uma caixa prompt com uma entrada em seu navegador para obter valores de entrada e os dados podem ser armazenados em uma variável
prompt('texto obrigatório', 'texto opcional')

let number = prompt('Digite o número', 'o número vai aqui')
console.log(number);


//Método confirm()
//O método confirm() exibe uma caixa de diálogo com uma mensagem especificada, junto com um OK e um botão de cancelar. Recebe uma string como argumento.
const agree = confirm('Tem certeza de que dejeja excluir?')
console.log(agree)

