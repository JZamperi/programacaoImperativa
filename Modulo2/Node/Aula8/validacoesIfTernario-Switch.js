// If ternario & Switch

//Condição ? Primeira Expressão : Segunda Expressão
// 4 > 10 ? 'O 4 é o maior' : 'O 10 é o maior';

let dia = "Domingo";

let resultado = dia == "Domingo" ? "Vou a Praia" : "Fico em Casa!";

	console.log (resultado);


/*
switch (idade) {
	case 10:
		console.log ('Tem 10 anos');
		break;
		
	case 5:
		console.log ('Tem 5 anos');
		break;
}

let fruta = 'Wefwef';

switch (fruta){
	case 'Banana' :
		console.log ('Uma fruta amarela');
		break;
		
	case 'Laranja' :
		console.log ('Bem ácida!');
		break;
		
	default :
		console.log ('Qual fruta é ?');
		break;
};
*/


switch (dia){
	case "Segunda" :
		console.log ("Vou tomar café com leite");
		
		break;
		
	case "Quarta" :
		console.log ("Vou no Cinema");
		
		break;
		
	case "Terça":
		//console.log ("")
		
		//Iplementa o que deverá ser feito
		break;
		
	default : 
		console.log ('Eu não vou fazer nada!');
};