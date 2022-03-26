const readline = require('readline');

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const perguntar = (pergunta) => {
    return new Promise((resolve) => {
        input.question(pergunta , (aswer) => {
            resolve(aswer);
        });
    });
}

const fechar = () => {
    input.close();
    process.exit(0);
}

module.exports.perguntar = perguntar;
module.exports.fechar    = fechar;

///------------------------------------------------------------------------------------------\\\


ESQUELETO CÓDIGO
const teclado = require('./teclado.js');

	const programa = async () => {

		console.log('O código rodou');
		// AQUI O SEU CODIGO


	teclado.fechar();

	}

programa();