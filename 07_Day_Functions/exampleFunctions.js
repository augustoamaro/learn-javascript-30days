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

// Código master noob
function verificarNome4(nome) {
	return nome === 'Lucas' 
		? 'Lucas' 
		: nome === 'Leonidas'
			? 'Leonidas'
			: 'Não encontrado'; 
}

const nomeVerificado4 = verificarNome4('Leonidas');
console.log(nomeVerificado4);


// Código master clean clever
function verificarNome5(nome) {
	if (nome === 'Lucas' || nome === 'Leonidas') 
		return nome;

	return 'Não encontrado';
}

const nomeVerificado5 = verificarNome5('Leonidas');
console.log(nomeVerificado5);


// Código master noob (ponto 40 em mosca)
function verificarNome6(nome) {
	return ['Lucas', 'Leonidas'].find(n => n === nome) || 'Não encontrado';
}

const nomeVerificado6 = verificarNome6('Lucas');
console.log(nomeVerificado6)


// Código master functional noob (ponto 40 em mosca part. 2)
const nome7 = 'Lucas';
const nomeVerificado7 = ['Lucas', 'Leonidas'].find(n => n === nome7) || 'Não encontrado';
console.log(nomeVerificado7);