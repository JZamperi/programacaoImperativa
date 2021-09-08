//Pode Subir

function podeSubir(altura, vemAcompanhado) {
	let podeSubir = false;
	
if (altura > 1.40 && altura < 2.0 && vemAcompanhado >= 0) {
	podeSubir = true;
	console.log ("Acesso Autorizado!");
} else if (altura >= 1.20 && altura <= 1.40 && vemAcompanhado >= 1) {
	podeSubir = true;
	console.log ("Acesso Autorizado somente com Acompanhante!");
} else {
	console.log ("Acesso Negado!");
} return podeSubir;
	
};

podeSubir(2.0, 1);

// Versão Simples
function podeSubi (altura, vemAcompanhado){

if ((altura <= 2.0 && altura >= 1.20) || (altura >= 1.20 && vemAcompanhado >= 1)){
	return true;
} else{
	return false;
}
};

console.log (podeSubi(1.40, 1))