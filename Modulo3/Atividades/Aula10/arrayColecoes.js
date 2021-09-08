//Arrays

//A. Acessar elementos específicos de um array.

const listaDeCompras = ["Abacaxi", "Banana", "Maçã", "Pêra"];
//const listaDeCompras1 = ["Abacaxi", "Banana", "Maçã", "Pêra"]; - Resultado da Letra E: Frutas são Iguais! / Precisa Comentar da Letra B até a Letra D;
const listaDeCompras1 = ["Abacate", "Coco", "Kiwi", "Pêssego", "Tâmara"]; // Exercicío E comparar Arrays  - Juntas Arrays;

console.log (listaDeCompras); // Imprime os elementos do Array 'ListaDeCompras';
console.log (listaDeCompras1); // Imprime os elementos do Array 'ListaDeCompras1';

console.log ("\n"); // Pular uma linha;

/*
//B. Modificar cada um dos elementos de um array e imprimi-los no console.

console.log (listaDeCompras);   //Imprime os elementos do Array;

listaDeCompras.shift();         //Remove o primeiro elemento do Array "Abacaxi" [0];
console.log (listaDeCompras);   //Imprime os elementos do Array, sem o último elemento;

listaDeCompras.shift();         //Remove o primeiro elemento do Array "Banana" [0];
console.log (listaDeCompras);   //Imprime os elementos do Array;

listaDeCompras.shift();         //Remove o primeiro elemento do Array "Maçã" [0];
console.log (listaDeCompras);   //Imprime os elementos do Array, sem o último elemento;

listaDeCompras.shift();         //Remove o primeiro elemento do Array "Abacaxi" [0];
console.log (listaDeCompras);   //Imprime Array sem os elementos;

listaDeCompras.push("Amora");       //Adiciona o primeiro elemento "Amora" [0];
console.log (listaDeCompras);       //Imprime os elementos do Array;

listaDeCompras.push("Damasco");     //Adiciona o segundo elemento no final do Array "Damasco" [1];
console.log (listaDeCompras);       //Imprime os elementos do Array;

listaDeCompras.push("Melancia");    //Adiciona o terceiro elemento no final do Array "Melancia" [2];
console.log (listaDeCompras);       //Imprime os elementos do Array;

listaDeCompras.push("Tâmara");  //Adiciona o quarto elemento no final do Array "Tâmara" [3];
console.log (listaDeCompras);   //Imprime os elementos do Array;

console.log ("\n"); // Pular uma linha;


//C. Adicionar elementos a um array.

console.log (listaDeCompras);   //Imprime os elementos do Array;

listaDeCompras.push("Morango"); //Adiciona o elemento no final do Array "Morango" [4];
console.log (listaDeCompras);   //Imprime os elementos do Array já com o elemento "Morango";;

listaDeCompras.unshift("Bergamota"); //Adiciona o elemento no início do Array "Bergamota" [0];
console.log (listaDeCompras);   //Imprime os elementos do Array, já com o elemento "Bergamota";

console.log ("\n"); // Pular uma linha;


//D. Extrair elementos de um array.

console.log (listaDeCompras);   //Imprime os elementos do Array;

listaDeCompras.pop();           //Remove o último elemento do Array "Morango" [5];
console.log (listaDeCompras);   //Imprime os elementos do Array, sem o elemento "Morango";


listaDeCompras.shift();         //Remove o primeiro elemento do Array "Bergamota" [0];
console.log (listaDeCompras);   //Imprime os elementos do Array, sem o elemento "Bergamota";

console.log ("\n"); // Pular uma linha;


//E. Comparar elementos de um array com os elementos de outro. 

console.log (listaDeCompras.join());    //Imprime os elementos 'listaDeCompras';
console.log (listaDeCompras1.join());   //Imprime os elementos 'listaDeCompras';

console.log ("\n"); // Pular uma linha;


// Faz a condição comparando "listaDeCompras" com a "listaDeCompras1"
if (listaDeCompras.join() === listaDeCompras1.join()) {
	console.log ('Frutas são Iguais!'); //Se as condições forem verdadeiras imprime "Frutas são Iguais!";
} else {
	console.log ('Frutas não são Iguais!!!');   //Se as condições forem falsas imprime "Frutas não são Iguais!";
}


//const list = [1,2,3,4,5,6]
//const list1 = [0,9,8,7,5,6]

// Função só verifica número, não comparar strings
function compararListas(lista1, lista2){

    let compararLista = [];

    if(lista1.length === lista2.length){
      for(let i = 0; i < lista2.length; i++){
        let comparaLista = lista2[i] === lista1[i];
       // compararLista.push(comparaLista);
        compararLista[i] = comparaLista;
      }
    }
        return compararLista;
}

let compararLista = compararListas(listaDeCompras, listaDeCompras1);
console.table (compararLista);*/

console.log ("\n"); // Pular uma linha;

//Juntas as Array
listas = listaDeCompras.concat(listaDeCompras1);
console.table (listas);     //Imprime os elementos dos dois Array em um único Array;


//Imprime os Elementos que não estão na ListaDeCompras1;

function pegarDiferenca() {   
    const totalLista = listaDeCompras.filter( a => !listaDeCompras1.includes( a ) );
    console.log (totalLista); //Imprime os elementos que não tem no Array "listaDeCompras";
}
pegarDiferenca()

console.log ("\n"); // Pular uma linha;


//O que os Códigos Retornam?

let numbers =[22, 33, 54, 66, 72]
console.log (numbers[numbers.length]) //Undefined;


let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
console.log (grupoDeAmigos[1][0]) //Spiderman;


let str = "Uma string qualquer";
let grupoDeAmigos1 = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ];
console.log (grupoDeAmigos1[2][grupoDeAmigos1[2].length - 1]) //"Uma string qualquer" - Pega o ultimo parametro;

console.log ("\n"); // Pular uma linha;


//Array Invertido

//Imprimir Inverso
function imprimirInverso(){

    const fraseInvertida = []; //Alocar os elementos do Array;

    //For para fazer os elementos em ordem decrescente;
    for(let i = listaDeCompras.length - 1; i >= 0; i--){
        fraseInvertida.push(listaDeCompras[i]);
    }

    console.log (fraseInvertida); //Imprime os elementos do Array inverso;
}   

imprimirInverso();

console.log ("\n"); // Pular uma linha;


//Inverter
function inverter(){

    const novaFrase1 = [];  //Alocar os elementos do Array;

    //For para fazer os elementos em ordem crescente;
    for (let i = 0; i < listaDeCompras1.length; i++) {
        novaFrase1.push(listaDeCompras1[i]);
            continue;
    }

    const fraseInvertida1 = []; //Alocar os elementos do Array;

    //For para fazer os elementos em ordem decrescente;
    for(let i = novaFrase1.length - 1; i >= 0; i--){
        fraseInvertida1.push(novaFrase1[i]);
    }
    console.log (novaFrase1);       //Imprime os elementos na ordem original;
    console.log (fraseInvertida1);  //Imprime os elementos do Array inverso;
}   

inverter();

console.log ("\n"); // Pular uma linha;


// Somar Array

function somarArray(){

    let total = 0;

    //const num = [1,2,3];
    //const num = [10,3,10,4];
    //const num = [-5,100];
    const num = [12,57,-62,3,-4,8,-99];

    //Somar os valores dentro do Array;
    for (let i = 0; i < num.length; i++) {
        total += num[i];        
    }
    console.log (total);    //Imprime o valor Total ;
}

somarArray();

console.log ("\n"); // Pular uma linha;


// Simulação Array.join()

//Pega o Array e adiciona o "e" dentre os elementos;
function join(){
    const arr = listaDeCompras.join(' e ');
    console.log (arr);
}

join();

//Pega o Array e separa os elementos das virgulas, juntando as letras, formando uma palavra;
function join1(){
    //const list = ["O", "L", "Á"];
    const list = ["T","c","h","a","u"];

    const arr1 = list.join("");
    console.log (arr1);
}

join1(); 

console.log ("\n"); // Pular uma linha;


// Coleções de Filmes (e mais…)

const filmes = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"];

// Verificar se estão corretos os valores;
console.log (filmes[0].toUpperCase());
console.log (filmes[1].toUpperCase());
console.log (filmes[2].toUpperCase());
console.log (filmes[3].toUpperCase());
console.log (filmes[4].toUpperCase());

// Função converter Array para letras maiúscila;
function letrasMaiusculas(filme){
    for (let i = 0; i < filme.length; i++) {
        filme[i] = filme[i].toUpperCase();    
    }
        console.table (filme); //Imprime os elementos em maiúsculo;
}

letrasMaiusculas(filmes); //Recebe a constante 'Filmes';

// Juntas dois Array
const desenhos = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

// Função converter Array para letras maiúscula;
function juntarArray(desenho){
    for (let i = 0; i < desenho.length; i++){
        desenho[i] = desenho[i].toUpperCase();  
    }
        jArray = filmes.concat(desenho); // Juntas os dois Array;
        console.table (jArray);          //Imprime os elementos juntos em maiúsculo;
}

juntarArray(desenhos); //Recebe a constante 'Desenhos';

// Funão junta os dois Array e converte e Maiúscula;
function juntarElementos(filme1, animacao) { 
    for (let i = 0; i < animacao.length; i++) {
      filme1.push(animacao[i].toUpperCase());
    } 
      return filme1;
}

console.table (juntarElementos (filmes, desenhos));

//Retirar o último elemento
retirarUltimo = jArray.pop(); //Retira o'Fortnite';

console.table (jArray);      //Imprime todos os elementos, sem o Fortnite;
console.log (retirarUltimo); //Imprime o elemento retirado 'Fortnite';

//Recolocar o elemento
jArray.push(retirarUltimo); //Adiciona o elemento da variavel 'retiraUltimoElemento;
console.table (jArray)      // Imprime todos os elementos novamente;

console.log ("\n"); // Pular uma linha;


//Classificações do Array

    const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
    const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]; 

function compararValores(asia, europa){
    let comparacoes = [];
    if(asia.length === europa.length){
      for(let i = 0;i<asia.length;i++){
        let comparacao = asia[i] === europa[i];
        comparacoes.push(comparacao);
        //comparacoes[i] = comparacao;
      }
    }
  
    return comparacoes;
}

console.table(compararValores(asiaScores,euroScores));
