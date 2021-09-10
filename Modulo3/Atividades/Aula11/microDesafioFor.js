//For

//1. Repetir como um papagaio
// Crie um loop utilizando for que se repita 5 vezes. Dentro de cada repetição se deve mostrar no console a mensagem “Olá mundo”.

//For Repetição
for (let i = 0; i < 5; i++){
    console.log ((i + 1) + '. ' + "Olá Mundo");
}
console.log ("\n");

/*
//While Repetição
let contador = 0;

while (contador < 5) {
    console.log ((contador + 1) + '. ' + "Olá Mundo");
    contador++;
}
console.log ("\n");

//Do While
let contador1 = 0;

 do {
    console.log ((contador1 + 1) + '. ' + "Olá Mundo");
    contador1++;

}
while (contador1 < 5);

console.log ("\n");*/


//2. Contando números ímpares

//For para exibir os número ímpares
for (let i = 1; i <= 10; i++){
    if (i % 2 != 0){
        console.log ("Numero: " + i + " é impar")
    }
}
console.log ("\n");


//For para exibir os número ímpares
for (let i = 1; i <= 10; i++){
    if (i % 2 == 0){
        console.log ("Numero: " + i + " é par")
    }
}
console.log ("\n");


// 3. Criando a Tabuada

 for (let i = 1; i <= 10; i++) {                    //Pega os números de 1 a 10
     console.log (`Tabuada do ${i}: \n`)
    for (let j = 1; j <= 10; j++){                  //Pega os números de 1 a 10
        console.log(`${i} x ${j} = ${i * j}`);      //Multiplica os números de 1 a 10
    }
    console.log(`\n`); 
 }
