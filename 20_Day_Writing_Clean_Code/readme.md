Escrevendo código limpo

Guia de estilo de JavaScript

Um guia de estilo JavaScript é um conjunto de padrões que informa como o código JavaScript deve ser escrito e organizado. Nesta seção, falaremos
sobre guias de JavaScript e como escrever um código limpo.

JavaScript é uma linguagem de programação e, como a linguagem humana, tem sintaxe. A sintaxe do JavaScript deve ser escrita seguindo uma determinada diretriz de estilo por uma 
questão de convecimento e simplicidade.

Por que precisamos de um guia de estilo

Você tem codificado sozinho por muito tempo, mas agora parece que funciona em equipe. Não importa de forma alguma que você escreva seu código, desde que esteja em execução, no entanto, quando você trabalha em uma equipe de 10 ou 20 ou mais desenvolvedores em um projeto e na mesma base de código, o código será confuso e difícil de gerenciar se houver não há nenhuma orientação.

Você pode desenvolver suas próprias diretrizes e convenções ou também pode adaptar diretrizes bem desenvolvidas. Deixe-nos conhecer as diretrizes mais comuns. Guias de estilo JavaScript mais comuns.

- Guia de estilo do Airbnb JavaScript
- Guia de estilo do padrão JavaScript
- Guia de estilo do Google JavaScript


Guia de estilo do Airbnb JavaScript

O Airbnb tem um dos guias de estilo JavaScript mais populares da Internet. Ele cobre quase todos os aspectos do JavaScript e é adotado por muitos desenvolvedores e empresas. Você pode verificar o guia de estilo do Airbnb. Eu também recomendaria tentar. Seu estilo é muito fácil de usar e simples de entender.
https://github.com/airbnb/javascript


Guia de estilo de JavaScript padrão

Esta diretriz não é tão popular quanto o Airbnb, mas vale a pena dar uma olhada. Eles removeram o ponto-e-vírgula em seu guia de estilo.
https://standardjs.com/

Guia de estilo do Google JavaScript

https://google.github.io/styleguide/jsguide.html


Convenções de codificação JavaScript

Neste desafio também usamos as convenções e guias gerais de escrita de codificação JavaScript. As convenções de codificação são diretrizes de estilo para programação que são desenvolvidas por um indivíduo, uma equipe ou uma empresa.

As convenções de codificação ajudam:

- escrever código limpo
- para melhorar a legibilidade do código
- para melhorar a reutilização e manutenção do código

As convenções de codificação incluem

- Regras de nomenclatura e declaração para variáveis
- Regras de nomenclatura e declaração para funções
- Regras para o uso de espaço em branco, recuo e comentários


Neste desafio, seguimos a convenção regular de JavaScript, mas também adicionei minha preferência de escrita

- Usamos camelCase para variáveis e funções.
- Todos os nomes de variáveis começam com uma letra.
- Optamos por usar constantes para constantes, matrizes, objetos e funções. Em vez de aspas duplas, optamos por usar aspas simples ou crase. Aspas simples estão se tornando moda.
- Também removemos o ponto-e-vírgula do nosso código, mas é uma questão de preferência pessoal.
- Espaço em torno de operadores aritméticos, operadores de atribuição e depois da vírgula.
- Função de seta em vez de declaração de função
- Retorno explícito em vez de retorno implícito se a função for uma linha.
- Sem vírgula no último valor de um objeto.
- Preferimos +=, -=, *=, /=, **= em vez da versão mais longa.
- Quando usamos console.log() é bom imprimir com uma string de tag para identificar de onde o console está vindo.

```js

let firstName = 'Augusto'
let lastName = 'Amaro'
let country = 'Brazil'

const PI = Math.PI

```

Arrays

Optamos por fazer nomes de array plurais

- nomes
- números
- países
- línguas
- habilidades
- frutas
- legumes

```js

const names = ['Augusto', 'Fulano', 'Ciclano'];
const numbers = [0, 3.14, 9.81, 37, 100];
const countries = ['Brasil', 'Iceland', 'USA'];
const skills = ['HTML', 'CSS', 'JS', 'React'];

```

Agora você está familiazirado com a declaração de função, função de expressão, função de seta e função anônima. Neste desafio, tendemos a usar a função de seta em vez de outras funções. A função de seta não substitui outras funções. Além disso, as função de seta e declarações de função são exatamente as mesmas. Portanto, você deve saber quando usar e quando não usar. Usaremos o retorno explícito em vez do retorno implícito se a função for de uma linha.

```js

// função que imprime o nome completo de uma pessoa
const printFullName = (firstName, lastName) => firstName + ' ' + lastName

// função que calcula o quadrado de um número
const square = (n) => n * n

// uma função que gera cores hexa aleatórias
const hexaColor = () => {
    const str = '0123456789abcdef'
    let hexa = '#'
    let index
    for (let i = 0; i < 6; i++) {
        index = Math.floor(Math.random() * str.length)
        hexa += str[index]
    }
    return hexa
}

// uma função que mostra a data e a hora
const showDateTime = () => {
   const now = new Date()
   const year = now.getFullYear()
   const month = now.getMonth() + 1
   const date = now.getDate()
   let hours = now.getHours()
   let minutes = now.getMinutes()
   if (hours < 10) {
       hours = '0' + hours
   }
   if (minutes < 10) {
       minutes = '0' + minutes
   }

   const dateMonthYear = date + '.' + month + '.' + year
   const time = hours + ':' + minutes
   const fullTime = dateMonthYear + ' ' + time
   return fullTime
}

```


