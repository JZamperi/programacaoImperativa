
//Exercícios IMC Versão 1
/*
const aluno1 = ["José da Silva", 27, 83.5, 1.70, true];
const aluno2 = ["Carlos de Souza", 28, 80.1, 1.76, true];
const aluno3 = ["Aline Ferreira", 33, 63.7, 1.53, false];
const aluno4 = ["Ana Paula", 26, 55, 1.62, true];


console.log ("Nome do aluno(a): " + aluno1[0] + " idade: " +    aluno1[1] + " seu índice de massa corporal é de: " + (aluno1[2] / (aluno1[3] * aluno1[3])).toFixed(2) + " Aluno(a) está ativo: " + aluno1[4]);
console.log ("Nome do aluno(a): " + aluno2[0] + " idade: " +    aluno2[1] + " seu índice de massa corporal é de: " + (aluno2[2] / (aluno2[3] * aluno2[3])).toFixed(2) + " Aluno(a) está ativo: " + aluno2[4]);
console.log ("Nome do aluno(a): " + aluno3[0] + " idade: " +    aluno3[1] + " seu índice de massa corporal é de: " + (aluno3[2] / (aluno1[3] * aluno3[3])).toFixed(2) + " Aluno(a) está ativo: " + aluno3[4]);
console.log ("Nome do aluno(a): " + aluno4[0] + " idade: " +    aluno4[1] + " seu índice de massa corporal é de: " + (aluno4[2] / (aluno1[3] * aluno4[3])).toFixed(2) + " Aluno(a) está ativo: " + aluno4[4]);*/

//Exercícios IMC Versão 2

const aluno1 = {
        nome: "José da Silva",
        idade: 27,
        peso: 83.5,
        altura: 1.70,
        plano: true
};

 const aluno2 = {
        nome: "Carlos de Souza",
        idade: 28,
        peso: 80.1,
        altura: 1.76,
        plano: true
    };

const aluno3 = {
        nome: "Aline Ferreira",
        idade: 33,
        peso: 63.7,
        altura: 1.53,
        plano: false
    };

const aluno4 = {     
        nome: "Ana Paula",
        idade: 26,
        peso: 55,
        altura: 1.62,
        plano: true
};

console.log ("Nome do aluno(a): " + aluno1.nome + " idade: " + aluno1.idade + " seu índice de massa corporal é de: " + (aluno1.peso / (aluno1.altura * aluno1.altura)).toFixed(2) + " Aluno(a) está ativo: " + aluno1.plano);
console.log ("Nome do aluno(a): " + aluno2.nome + " idade: " + aluno2.idade + " seu índice de massa corporal é de: " + (aluno2.peso / (aluno2.altura * aluno2.altura)).toFixed(2) + " Aluno(a) está ativo: " + aluno2.plano);
console.log ("Nome do aluno(a): " + aluno3.nome + " idade: " + aluno3.idade + " seu índice de massa corporal é de: " + (aluno3.peso / (aluno3.altura * aluno3.altura)).toFixed(2) + " Aluno(a) está ativo: " + aluno3.plano);
console.log ("Nome do aluno(a): " + aluno4.nome + " idade: " + aluno4.idade + " seu índice de massa corporal é de: " + (aluno4.peso / (aluno4.altura * aluno4.altura)).toFixed(2) + " Aluno(a) está ativo: " + aluno4.plano);
