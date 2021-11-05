/* 

Para entender muito bem a promessa, vamos primeiro entender o retorno de chamada. Vamos ver os seguintes retornos de chamado.
 Nos blocos de código a seguir, você notará a diferença entre retorno de chamada e promessas.

 retorno de chamadas: vejamos uma função de retorno de chamada que pode receber dois parâmetros. 
 O primeiro é err e o segundo é resultado. Se o parâmetro err for falso, não haverá erro, caso contrário, retornará um erro
 
 Nesse caso, o erro tem um valor e retornará o bloco do erro

 */

 const doSomething = callback => {
     setTimeout(() => {
         const skills = ['HTML', 'CSS', 'JS']
         callback('It did not go well', skills)
     }, 2000)
 }

 const callback = (err, result) => {
     if (err) {
         return console.log(err)
     }
     return console.log(result)
 }

 doSomething(callback) // irá printar depois de 2 segundos

 const doSomething2 = callback => {
     setTimeout(() => {
         const skills = ['HTML', 'CSS', 'JS']
         callback(false, skills)
     }, 2000)
 }

 doSomething2((err, result) => {
     if (err) {
         return console.log(err);
     }
     return console.log(result)
 }) // irá printar depois de 2 segundos