// Callback é uma função que pode ser passada como parâmetro para outra função.

// uma função de retorno de chamada, a função pode ser qualquer nome
const callback = (n) => {
    return n ** 2;
}

// função recebe outra função como callback
function cube(callback, n) {
    return callback(n) * n
}

console.log(cube(callback, 3))