function dobro(umNumero){
    return umNumero * 2;
}
dobro(6); // 12

function darOi(){
    console.log ("Olá tudo bem? ");
}
darOi();


//Função Expressa

let somar = function(numA, numB){
    //console.log (numA +numB);
    return numA + numB;
}
somar(10, 20);

//let resultado = somar(1, 2);
//console.log (resultado);
console.log (somar(1, 2));

//Escopo
let resultado = 0;
console.log ("Resultado fora da Função = ", resultado);

function multiplicar (numA, numB){
    resultado = numA * numB;
    console.log ("Resultado dentro da Função = ", resultado);
}
multiplicar (2, 2); "n"