let categoria = "";
let continua = "";
let graos = [];
let carnes = [];
let laticinios = [];


while(continua != "nao"){
	continua = prompt(`Digite o alimento que deseja adicionar: (DIGITE nao PARA PARAR)`);
	if(continua == "nao" || continua == "NAO" || continua == "não" || continua == "NÃO"){
		break;
	}
	categoria = prompt(`Esse alimento faz parte de qual categoria? graos, carnes ou laticinios?`);
	
	switch(categoria){
	case 'graos': 
	graos.push(continua);
	break;
	
	case 'carnes': 
	carnes.push(continua)
	break;

	case 'laticinios':
	laticinios.push(continua);
	}
} alert(`GRAOS: ${graos}\n, CARNES: ${carnes}\n e LATICINIOS: ${laticinios}\n`)