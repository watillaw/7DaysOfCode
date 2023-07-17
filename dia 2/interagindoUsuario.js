const nome = prompt('Qual o seu nome?');
const idade = prompt('Quantos anos você tem?');
const linguagem = prompt('Qual linguagem de programação você está estudando?');
const respLing = [];
alert(`Olá ${nome}, você tem: ${idade} anos e esta aprendendo ${linguagem}.`);

const resp = prompt(`Você gosta de estudar ${linguagem}? Digite 1 para SIM ou 2 para NÃO.`);

if(resp == 1){
	alert(`Muito bom ${nome}, continue estudando ${linguagem} e terá muito sucesso!`);
}else{
	respLing = (`Que pena ${nome}, você já tentou outras linguagens?Digite 1 para SIM ou 2 para NÃO.`);
}

if(respLing == 1){
	alert(`O importante é não parar de tentar achar algo que você realmente goste!`)
}else{
	alert(`Talvez você precise dar uma olhada em algumas outras linguagens pra ver se se identifica com alguma...`)
}