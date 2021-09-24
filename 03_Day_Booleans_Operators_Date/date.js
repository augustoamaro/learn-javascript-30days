// No JavaScript, a hora e a data atuais são criadas usando o objeto date. Todos os métodos são iniciados com a palavra get.
// getFullYear(), getMonths(), getDate(), getDay(), getHours(), getMinutes(), getSeconds(), getMilliseconds(), getTime(), getDay()

// Criando um objeto Date()
const now = new Date();
console.log(now);

// Criando um objeto de tempo podemos acessar qualquer informação de data e hora do objeto usando os métodos get.
// Extrair ou obter o ano inteiro de Date()
const year = new Date();
console.log(year.getFullYear()); // 2021

// Obtendo o mês
const month = new Date();
console.log(month.getMonth()); // Setembro - 08 porque Janeiro é 0

// Obtendo o dia
const day = new Date();
console.log(day.getDate()); // 21

// Obtendo horas
const hour = new Date();
console.log(hour.getHours());

// Obtendo minutos
const minutes = new Date();
console.log(hour.getMinutes());

const seconds = new Date();
console.log(hour.getSeconds()); 
