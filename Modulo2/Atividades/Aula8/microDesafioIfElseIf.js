let idade = 19;
let acesso = '';

if (idade < 16){
	acesso = 'Acesso Proibido';
} else if (idade >= 16 && idade <= 18){
	acesso = 'Acesso liberado somente com acompanhante maior de idade';
} else {
	acesso = 'Acesso Liberado';
};

let status = true;
//let status = false;

if (status == true){
	console.log ("O valor é Verdadeiro");
} else {
	console.log ("O valor é Falso")
};

let linguaguem = 'JavaScript';
//let linguaguem = 'C#';

if (linguaguem == 'JavaScript'){
	console.log ("Estou aprendendo");
} else {
	console.log ("Aprenderei mais tarde");
};