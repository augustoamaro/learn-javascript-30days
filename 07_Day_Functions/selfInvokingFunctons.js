// As funções de auto-chamada são funções anims que não precisam ser chamadas para retornar um valor

(function(n) {
    console.log(n * n)
  })(2)

  let squaredNum = (function(n) {
    return n * n // 4, mas em vez de apenas imprimir se quisermos retornar e armazenar os dados, fazemos como mostrado abaixo
  })(10)

console.log(squaredNum)