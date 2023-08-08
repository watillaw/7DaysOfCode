// criar um programa com a finalidade de adicionar itens em uma lista e após o usuário decidir que deseja parar, verificar se deseja excluir algum item, exibir a lista para o usuário escolher algum item.

// farei uma lista para uma festa de aniversário:


let nomes = [];
let adicionar = "";
let continuar = "";
let apagar = "";
let listaNova = [];


while(continuar != "nao"){
	adicionar = prompt(`Digite um nome para adicionar a lista de aniversário:`);
	nomes.push(adicionar);
	continuar = prompt(`Deseja continuar adicionando nomes? sim ou nao?`);
	if(continuar == "nao"){
		apagar = prompt(`A lista de aniversário é essa: ${nomes} deseja apagar algum nome?`);
		if(apagar == "nao"){
			alert(`SUA LISTA DE CONVIDADOS É: ${nomes}`);
			break;
		}else{
			apagar = prompt(`Digite o nome que deseja apagar da lista: ${nomes}`);
			let pos = nomes.indexOf(apagar);
			let listaNova = nomes.splice(pos,1);
			prompt(`Sua lista de nomes agora é: ${nomes}`);
		}

	}
}