// 1. 'O amor é a melhor coisa neste mundo. Alguns encontraram seu amor e alguns ainda estão procurando por seu amor. 'Conte o número da palavra amor nesta frase'.
let amor = 'Conte o número da palavra amor nesta frase';
console.log('1)', amor.match('amor'))

// 2. Use match() para contar o número de todos porque na seguinte frase: 'Você não pode terminar uma frase com porque porque porque é uma conjunção'
let porque = 'Você não pode terminar uma frase com porque porque porque é uma conjunção';
console.log('2)', porque.match('porque'))

// 3.  Limpe o texto a seguir e encontre a palavra mais frequente (dica, use substituir e expressões regulares).    
const  frase  =  '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log('3)', frase.replace(/[^a-zA-Z ]/g, ""));

// 4. Calcule a renda anual total da pessoa extraindo os números do texto a seguir. 'Ele ganha 5.000 euros de salário por mês, bônus anual de 10.000 euros, cursos online de 15.000 euros por mês.'
let string = 'Ele ganha 5.000 euros de salário por mês, bônus anual de 10.000 euros, cursos online de 15.000 euros por mês.';
let regEx = /\d+/g;
let values = string.match(/\d+/g);

console.log(values);
monthSalary = parseInt(values[0] + values[1]) * 12;
console.log('Month Salary: ', monthSalary);

bonus = parseInt(values[2] + values[3]);
console.log('Bonus: ', bonus)

onlineCourses  = parseInt(values[4] + values[5]);
console.log('Online Courses: ', monthSalary);

anualSalary = monthSalary + bonus + onlineCourses;
console.log(anualSalary);


