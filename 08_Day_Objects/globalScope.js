// Uma variável declarada globalmente pode ser acessada em qualquer lugar no mesmo arquivo. Mas o termo global é relativo. Pode ser global para o arquivo ou pode ser global em relação a algum bloco de códigos.

     let a = 'JavaScript' // is a global scope it will be found anywhere in this file
     let b = 10 // is a global scope it will be found anywhere in this file
     function letsLearnScope() {
         console.log(a, b) // JavaScript 10, accessible
         if (true) {
             let a = 'Python'
             let b = 100
             console.log(a, b) // Python 100
         }
     console.log(a, b)
     }
     
     letsLearnScope()
     console.log(a, b) // JavaScript 10, accessible