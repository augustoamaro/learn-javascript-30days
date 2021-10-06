// Quando desestruturamos, o nome da variável que usamos para desestruturar deve ser exatamente o mesmo que a chave ou a propriedade

const rectangle = {
    width: 20,
    height: 10,
    area: 200
};

let {width, height, area, perimeter } = rectangle

console.log(width, height, area, perimeter); // 20 10 200 undefined

// Renomeando durante destructuring

let { width: w, heigh: h, area: a, perimeter: p } = rectangle

console.log(w, h, a, p); // 20 10 200 undefined

// Se a chave não for encontrada no objeto, a variável será atribuída a indefinida. No caso, a chave não está no objeto, podemos dar um valor padrão durante a declaração.
