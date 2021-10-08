// Declaração de expressão regular sem sinalizador global e sinalizador que não diferencia maíuscula de minúsculas

let pattern = 'love';
let regEx = new RegExp(pattern)

// Declaração de expressão regular com sinalizador global e sinalizador que não diferencia maiúsculas de minúsculas

let pattern2 = 'love';
let flag = 'gi';
let regEx2 = new RegExp(pattern2, flag);