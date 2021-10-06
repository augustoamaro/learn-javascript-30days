// Quando desestruturamos, o nome da variável que usamos para desestruturar deve ser exatamente o mesmo que a chave ou a propriedade

const rectangle = {
    width: 20,
    height: 10,
    area: 200
};

let {width, height, area, perimeter } = rectangle

console.log(width, height, area, perimeter); // 20 10 200 undefined




