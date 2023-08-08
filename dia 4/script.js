// criar um programa que comece com um valor predefinido entre 0 a 10 e peça para você digitar um número pra ver se acertou ou errou...
// colocar 3 tentativas no total
// caso nao acerte ate o final ele imprimirá o número inicial

// abaixo utilizei o método math para criar um número randômico entre 0 e 1, multipliquei por 10 e utilizei outro metodo chamado round para arredondar meu valor.

// ou seja primeiro temos a funcao round dentro dela a funcao random * 10.

const maquina =Math.round((Math.random()*10)); ;
let user = "";
let acertou = false;

for(i=0; i < 3; i++){
	user = prompt(`Digite um número de 0 a 10:`)
	if(user == maquina){
		prompt(`Parabéns você acertou!`);
		acertou = true;
		break;
	}
	alert(`ERRADO!`);
console.log(i)
}
if(!acertou){
	alert(`Infelizmente, você não acertou. O número era: ${maquina}`);
}


