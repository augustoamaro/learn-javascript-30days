// Para encontrar uma diferença entre dois conjuntos pode ser alcaçada usando filter().
// Encontrar a diferença do conjunto A e do conjunto B (A ! B)

let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];

let A = new Set(a);
let B = new Set(b);

let c = a.filter((num) => !B.has(num))
let C = new Set(c);

console.log(c)