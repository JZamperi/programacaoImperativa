//Exercício "Praticando com While"

//1. Programa em Javascript que mostra os números ímpares
//Escreva um aplicativo em Javascript que mostre todos os números ímpares de 1 até 100.

let i = 0;
while (i <= 100){
    if (i % 2 == 1){
        console.log ("Numero: " + i + " é impar")
    }
 
    i++
}
console.log ("\n")


//2. Programa em Javascript que mostra os números pares
//Escreva um aplicativo em Javascript que mostre todos os números pares de 1 até 100.

let j = 0;
while (j <= 100){
    if (j % 2 == 0){
        console.log ("Numero: " + j + " é par")
    }
        j++
}
console.log ("\n")


//3. Programa em Javascript que mostra os números pares e ímpares 
//Escreva um aplicativo em Javascript que recebe um número inteiro e mostra os números pares e ímpares (separados), de 1 até esse inteiro.

function numRecebido(num){

    let m = 0;

    while (m <= num){
        if (m % 2 == 1){
            console.log ("Numero: " + m + " é impar")
        } if (m % 2 == 0){
            console.log ("Numero: " + m + " é par")
        }
        m++
    }
}
numRecebido(10);

console.log ("\n")

//4. Programa em Javascript que calcula a média das notas de uma turma
//Escreva um programa que pergunte ao usuário quantos alunos tem na sala dele. Em seguida, através de um laço while, pede ao usuário para que entre com as notas de todos os alunos da sala, um por vez.

//Por fim, o programa mostra a média aritmética da turma.

function mediaTurma(alunos, medias){
    let i = 0;
    mediaTotal = 0;

    console.log ("Número de Alunos na Sala: " + alunos);
    while (i < medias) {
       mediaTotal = medias/alunos;
       i++;
    }
    console.log ("Notas dos Alunos: " + mediaTotal + "\n");
    console.log ('Media Total da Turma: ' + medias);
    return mediaTotal;
}

mediaTurma(10, 87);
