//Calculadora N1

//Adição
function somar (num1, num2){
    return num1 + num2;
}

//somar (5, 8); //Adição

//Subtração
function subtrair (num1, num2){
    return num1 - num2;
}

//subtrair (13, 7); //Subtração

//Multiplicação
function multiplo (num1, num2){
    return num1 * num2;
}

//multiplo (9, 4) //Multiplicação

// Divisão
function dividir (num1, num2){
    return num1 / num2;
}

//dividir (10, 5) // Divisão

//Calculadora N2
console.log ("---------------------- Teste de Operações / Calculadora -----------------------");

console.log ('Resultado da Adição: ', somar(9, 7));
console.log ('Resultado da Substração: ', subtrair(4, 13));
console.log ('Resultado da Multiplicação: ', multiplo(3, 7));
console.log ('Resultado da Divisão: ', dividir(50, 5));
console.log ('Resultado da Divisão por ZERO: ', dividir(1,0));

//Calculadora N3
console.log ("\n --------------------- Calculadora Nível 3 -----------------------");

//Quadrado do Nùmero
function quadradoDoNumero (numA){
    return multiplo(numA, numA);
}
console.log ("Valor ao Quadrado: ", quadradoDoNumero(4));

//Media de Três Números
function mediaDeTresNumeros(num1, num2, num3){
    let soma1 = num1 + num2;
    let soma2 = soma1 + num3;
    return dividir(soma2, 3);
}
console.log ('Media Total: ', mediaDeTresNumeros(10, 10, 9).toFixed(1));

//Calcular Porcentagem
function CalculaPorcentagem(num, port){
    //return multiplo(num, port) * 0.01;
    let totalPorcentagem = multiplo(num, port);
    return multiplo(totalPorcentagem, 0.01)
}
console.log ('Porcentagem Total: ', CalculaPorcentagem (300,15));

//Gerador de Porcentagem
function geradorDePorcentagem(num, port){
   // return dividir(num, port) * 100;
   let totalPorcentagem = dividir(num, port);
   return multiplo(totalPorcentagem, 100)
}
console.log ('Gerador de Porcentagem: ', geradorDePorcentagem(2,200));
