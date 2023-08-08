// criar uma calculadora onde cada operação seja uma função no código, utilizar estruturas de repetição.
// no fim quando nao precisar mais utilizar a calculadora exibir uma mensagem até a próxima.

function soma(n1,n2){
	return Number(n1) + Number(n2);
}
function sub(n1,n2){
	let res = n1 - n2;
	return res;
}
function mult(n1,n2){
	let res = n1 * n2;
	return res;
}
function div(n1,n2){
	let res = n1 / n2;
	return res;
}
let escolha = "";
let numero1;
let numero2;
let fazerOutraOperacao = "";


while(fazerOutraOperacao != "nao"){
	escolha = prompt(`Qual operação deseja fazer? [+],[-], [*] ou [/]?`);
	numero1 = prompt(`Digite o primeiro numero:`)
	numero2 = prompt(`Digite o outro numero:`)
	switch(escolha){
		case "+":
			alert(`O resultado da soma é ${soma(numero1,numero2)}`);
			break;
		case "-":
			alert(`O resultado da subtração é ${sub(numero1,numero2)}`);
			break;
		case "/":
			alert(`O resultado da divisão é ${div(numero1,numero2)}`);
			break;
		case "*":
			alert(`O resultado da multiplicação é ${mult(numero1,numero2)}`);
			break;
	}
	fazerOutraOperacao = prompt(`DESEJA CONTINUAR? sim ou nao?`)
} alert(`ATÉ A PROXIMA! =-)`)