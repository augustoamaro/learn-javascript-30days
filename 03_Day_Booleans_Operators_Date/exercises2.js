// 1. Escreva um script que solicite ao usuário que insira a base e a altura do triângulo e calcule uma área de um triângulo (área = 0,5 x b x a).
// Insira a base: 20
// Insira a altura: 10
// A área do triângulo é 50

let base = Number(prompt('Insira a base'));
let altura = Number(prompt('Insira a altura'));
let area = alert(0.5 * base * altura);

// 2. Escreva um script que peça ao usuário para inserir o lado a, o lado b e o lado c do triângulo e calcular o perímetro do triângulo (perímetro = a + b + c)
// Insira o lado a: 5
// Insira o lado b: 4
// Insira o lado c: 3
// O perímetro do triângulo é 12

let a = Number(prompt('Insira o lado a'));
let b = Number(prompt('Insira o lado b'));
let c = Number(prompt('Insira o lado c'));
let perimetro = alert(a + b + c);

// 3. Obtenha comprimento e largura usando prompt e calcule uma área do retângulo (área = comprimento x largura e o perímetro do retângulo (perímetro = 2 x (comprimento + largura))
let comprimento = Number(prompt('Insira o comprimento'));
let largura = Number(prompt('Insira a largura'));
let area2 = alert(comprimento * altura);
let perimetro2 = alert(2 * (comprimento + largura));

// 4. Obtenha o raio usando o prompt e calcule a área de um círculo (área = pi x r x r) e a circunferência de um círculo (c = 2 x pi x r) onde pi = 3,14.
let raio = Number(prompt('Insira o valor do raio'));
let area3 = alert(Math.PI * raio * raio);
let circunferencia = alert(2 * Math.PI * raio);

// 5. Calcule a inclinação, interceptação x e interceptação y de y = 2x -2

// 6. A inclinação é (m = y2-y1 / x2-x1). Encontre a inclinação entre o ponto (2, 2) e o ponto (6,10)

// 7. Compare a inclinação das duas perguntas acima.

// 8. Calcule o valor de y (y = x ^ 2 + 6x + 9). Tente usar diferentes valores de x e descubra em que valor de x y é 0.

// 9. Escreva um script que solicite que o usuário insira as horas e a taxa por hora. Calcular o pagamento da pessoa?
// Insira as horas: 40
// Insira a taxa por hora: 28
// Seu ganho semanal é 1120
let hours = Number(prompt('Insira as horas'));
let taxByHour = Number(prompt('Insira a taxa por hora'));
let salary = alert(hours * taxByHour);

// 10. Se o comprimento do seu nome for maior que 7, diga, seu nome é longo, ou diga que seu nome é curto.
let firstName = 'Augusto';
firstName.length >= 7
    ? console.log('Seu nome é longo')
    : console.log('Seu nome é curto')

// 11. Compare o comprimento do seu nome e o comprimento do seu sobrenome e você deve obter esta saída.
// let  firstName  =  'Augusto' 
// let  lastName  =  'Amaro'
// Seu primeiro nome, Augusto é mais longo do que seu sobrenome, Amaro
let primeiroNome = 'Augusto';
let sobreNome = 'Amaro';
primeiroNome.length > sobreNome.length
    ? console.log(`Seu primeiro nome ${primeiroNome} é maior que seu sobrenome, ${sobreNome}`)
    : console.log(`Seu primeiro nome ${primeiroNome} não é maior que seu sobrenome, ${sobreNome}`)

// 12. Declare duas variáveis myAge e yourAge e atribua a elas os valores iniciais e myAge e yourAge.
// let  minhaIdade  =  250 
// deixe suaIdade  =  25
// Eu sou 225 anos mais velho que você.
let myage = 250;
let yourAge = 25;
console.log(`Eu sou ${myage - yourAge} mais velho que você`)

// 13. Usando o prompt, obtenha o ano em que o usuário nasceu e, se o usuário tiver 18 anos ou mais, permita que ele dirija, se não diga ao usuário para esperar alguns anos.
// Digite o ano de nascimento: 1995
// Você tem 25 anos. Você tem idade suficiente para dirigir
// Digite o ano de nascimento: 2005
// Você tem 15 anos. Você poderá dirigir após 3 anos.
let birthday = Number(prompt('Digite o ano de nascimento'));
    birthday < 2003
        ? alert(`Você tem ${2021 - birthday} anos. Você tem idade suficiente para dirigir`)
        : alert('Não pode dirigir')

// 14. Escreva um script que solicite que o usuário insira o número de anos. Calcule o número de segundos que uma pessoa pode viver. Suponha que alguém viva apenas cem anos
// Digite a sua idade: 29
// Você viveu 3153600000 segundos.


// 15. Crie um formato de hora legível usando o objeto Date time
// AAAA-MM-DD HH: mm
// DD-MM-AAAA HH: mm
// DD / MM / AAAA HH: mm