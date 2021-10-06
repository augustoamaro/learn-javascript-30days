// Renomeando durante destructuring

const rectangle = {
    width: 20,
    height: 10,
    area: 200
};

let { width: w, heigh: h, area: a, perimeter: p } = rectangle

console.log(w, h, a, p); // 20 10 200 undefined

// Se a chave não for encontrada no objeto, a variável será atribuída a indefinida. No caso, a chave não está no objeto, podemos dar um valor padrão durante a declaração.

const retangulo = {
    largura: 20,
    altura: 10,
    area: 200
}

let {largura, altura, area, perimetro = 60} = retangulo

console.log(largura, altura,area, perimetro) // 20 10 200 60

// Chaves de desestruturação como parâmetros de função. Vamos criar uma função que pega um objeto retângulo e retorna um perímetro de um retângulo