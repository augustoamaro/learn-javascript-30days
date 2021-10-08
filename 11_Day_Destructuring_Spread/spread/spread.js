// Quando desestruturamos um array, usamos o operador spread(...) para obter os demais elementos como array. 
// Além disso, usamos o operador spread para espalhar os elementos arr para outro array.

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, num2, num3, ... rest] = nums

console.log(num1, num2, num3);
console.log(rest);


const countries =  [ 
    'Alemanha' , 
    'França' , 
    'Bélgica' , 
    'Finlândia' , 
    'Suécia' , 
    'Noruega' , 
    'Dinamarca' , 
    'Islândia' 
  ];

  let [ale, fra, ,... paisesNordicos ] = countries

  console.log(ale)
  console.log(fra, paisesNordicos)
