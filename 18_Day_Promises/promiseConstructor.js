/*  
    Podemos criar uma promessa usando o construtor Promise. Podemos criar uma nova promessa usando a palavra-chave new seguida da paoalvra Promise e um parêntese.
    Dentro do parênteses, ele recebe uma função de retorno de chamada. 
    A função de retorno de chamada de promessa tem dois parâmetro que são as funções de resolução e rejeição.

*/

// syntax
const promise = new Promise((resolve, reject) => {
    resolve('success')
    reject('failure')
})

// Promisse
const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS']
        if (skills.length > 0) {
            resolve(skills)
        } else {
            reject('Something wrong has happened')
        }
    }, 2000)
})

doPromise
    .then(result => {
        console.log(result);
    })
    .catch(error => console.log(error))

    // Promise
const doPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      if (skills.indexOf('Node') !== -1) {
        resolve('fullstack developer')
      } else {
        reject('Something wrong has happened')
      }
    }, 2000)
  })
  
  doPromise2
    .then(result => {
      console.log(result)
    })
    .catch(error => console.log(error))