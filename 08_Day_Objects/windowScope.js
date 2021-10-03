// Sem usar console.log(), no navegador, você verá o valor de a e b se escrever a ou b no navegador. Isso significa que a e b já está disponível na janela.

     //scope.js
     a = 'JavaScript' // is a window scope this found anywhere
     b = 10 // this is a window scope variable
     function letsLearnScope() {
         console.log(a, b)
         if (true) {
             console.log(a, b)
         }
     }
     console.log(a, b) // accessible