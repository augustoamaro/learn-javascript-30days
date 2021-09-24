// sintaxe 
// if (condition) {
//     esta parte do código é executada para condição verdadeira
// }

let num = 3;

if (num > 0) {
    console.log(`${num} é um número positivo`);
}


let isRaining = true;

if (isRaining) {
    console.log('Lembre-se de levar sua capa de chuva');
}

// Código noob
function verificarNome1(nome) {

	if (nome === 'Lucas') {
		return 'Lucas';
	} else if (nome === 'Leonidas') {
		return 'Leonidas';
	} else {
		return 'Não encontrado';
	}
}

const nomeVerificado1 = verificarNome1('Leonidas');
console.log(nomeVerificado1);


// Código master
function verificarNome2(nome) {

	if (nome === 'Lucas') {
		return 'Lucas';
	}

	if (nome === 'Leonidas') {
		return 'Leonidas';
	}

	return 'Não encontrado';
}

const nomeVerificado2 = verificarNome2('Leonidas');
console.log(nomeVerificado2);

// Código master clean
function verificarNome3(nome) {

	if (nome === 'Lucas') return 'Lucas';

	if (nome === 'Leonidas') return 'Leonidas';

	return 'Não encontrado';
}

const nomeVerificado3 = verificarNome3('Leonidas');
console.log(nomeVerificado3);

