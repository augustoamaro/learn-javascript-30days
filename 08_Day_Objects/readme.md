Alcance

A variável é a parte fundamental da programação. Declaramos uma variável para armazenar diferentes tipos de dados. Para declarar uma variável, usamos as palavras-chave var, let e const. Uma variável pode ser declarada em escopo diferente.
Nesta seção, veremos o escopo das variáveis quando usamos var ou let. Os escopos podem ser:

- Janela
- Global
- Local

A variável pode ser declarada globalmente ou localmente ou no escopo da janela. Veremos o o escopo global e local. Qualquer coisa delcarada sem let, var ou const tem o escopo nível da janela.

Âmbito da janela

Sem usar console.log(), no navegador, você verá o valor de a e b se escrever a ou b no navegador. Isso significa que a e b já está disponível na janela.

<script>
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
</script>

Âmbito global

Uma variável declarada globalmente pode ser acessada em qualquer lugar no mesmo arquivo. Mas o termo global é relativo. Pode ser global para o arquivo ou pode ser global em relação a algum bloco de códigos.

<script>
        //scope.js
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
  <script>
