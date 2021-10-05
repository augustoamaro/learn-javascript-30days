// Para encontrar uma união para dois conjuntos pode ser alcançado usando o operador spread.
// Encontrar a união do conjunto A e do conjunto B (A n B)

let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];
let c = [...a, ...b]

let A = new Set(a);
let B = new Set(b);
let C = new Set(c);

console.log(C);