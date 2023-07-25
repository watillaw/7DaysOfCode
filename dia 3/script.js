var direcao = prompt('Digite [1] para front-end e [2] para back-end:');
var stacks = "";
var validador = 1;

if (direcao == 1){
	 front = prompt(`Você deseja aprender [1]-React ou [2]-Vue?`);
}else{
	 back = prompt(`Você deseja aprender [1]-C# ou [2]-Java?`);
}

var escolhaUsuario = prompt(`Você deseja continuar na área escolhida[1] ou se tornar um FULLSTACK[2] ?`);

if(escolhaUsuario == 1){
	alert(`Otima escolha a carreira de um programador especialista tende a ser muito boa.`);
}else{
	alert(`Um desenvolvedor FULLSTACK tem seu valor no mercado!`);
}



while(validador == 1){
	stacks = prompt(`Digite a stack que deseja aprender:`);
	validador = prompt(`Digite 1 para continuar ou 2 para parar`);
	console.log(`AS STACKS ESCOLHIDAS FORAM: ${stacks}`)
}