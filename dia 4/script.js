// criar um programa que comece com um valor predefinido entre 0 a 10 e peça para você digitar um número pra ver se acertou ou errou...
// colocar 3 tentativas no total
// caso nao acerte ate o final ele imprimirá o número inicial

const maquina = 5;
let user = prompt('Digite um número de 1 a 10:');



while(user != maquina || iterador < 3){
	alert(`Errou tente novamente`)
	user = prompt(`Digite um número de 1 a 10:`);
	iterador +=1;
}


