
// 1. Começamos a partirde nossa variedade de filmes que tínhamos o seguinte:

/*
function convertirAMayusculas(array){
  array[0] = array[0].toUpperCase()
  array[1] = array[1].toUpperCase()
  array[2] = array[2].toUpperCase()
  array[3] = array[3].toUpperCase()
  array[4] = array[4].toUpperCase()
  return array
*/

let filmes = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"];


function converterMaiusculas(filme){
    for (let i = 0; i < filme.length; i++) {
        filme[i] = filme[i].toUpperCase();
    }
      console.table(filme);
}

converterMaiusculas(filmes);

/*

function converterMaiusculas(filme){
    let arrRetorno = [];
    for(let i = 0; i < filme.length; i++){
      arrRetorno[i] = filme[i].toUpperCase();
    }
    return arrRetorno;
}
  
function adicionarA(filme){
    let arrRetorno = [];
    for(let i = 0; i < filme.length; i++){
      arrRetorno[i] = filme[i] + " A";
    }
    return arrRetorno;
}

let arrMaisculo = converterMaiusculas(filmes);
let arrComA = adicionarA(arrMaisculo);

console.log(arrComA);
*/

// 2 Agora precisamos modificar afunçãode passagemde elemento() que nos permite adicionar o conteúdo de nossa matriz de filme animado à matriz de filme original.

/*
função pasajeDeElementos(array1, array2) {
  array1.push(array2.pop(). toUpperCase())
  array1.push(array2.pop(). toUpperCase())
  array1.push(array2.pop(). toUpperCase())
  array1.push(array2.pop(). toUpperCase())
  array1.push(array2.pop(). toUpperCase())
  array de retorno1
  }
*/
let animacoes = ["toy story", "procurando Nemo", "kung-fu panda", "wally", "fortnite"];


function passagemDeElementos(filme1, animacao) { 
        for (let i = 0; i < animacao.length; i++) {
          filme1.push(animacao[i].toUpperCase());
        } 
          return filme1;
}
let juntarFilmes = passagemDeElementos (filmes, animacoes)
console.table (juntarFilmes);

/*
  function passarElementosDeUmArrayParaOutro(array1, array2){
    let arr1Upper = converterMaiusculas(array1);
    for(let i = 0; i<array2.length;i++){
       arr1Upper.push(array2[i].toUpperCase()); 
    }
    return arr1Upper;
  }
 
  let arrUpper = passarElementosDeUmArrayParaOutro(filmes,animacoes);
  console.table(arrUpper.sort());
 */

// 3. Para este ponto se você decidiu trabalhar em um arquivo diferente em lugar para modificar o anterior, lembre-se que tivemos um infiltrado dentro de nossos filmes de animação que tivemos que tirar e salvar em outra variável antes de fazer a passagem de elementos de um array para outro!

//Retirar o último elemento
retirarUltimo = juntarFilmes.pop(); //Retira o'Fortnite';

console.log (retirarUltimo); //Imprime o elemento retirado 'Fortnite';
console.table (juntarFilmes);      //Imprime todos os elementos, sem o Fortnite;


// 4. Finalmente, devemos modificar nossa função comparadora para os filmes como temos feito até agora.

/*
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
function compararCalificaciones(asia, europa) {
  let comparacionesAsiaEuropa = []
  comparacionesAsiaEuropa[0] = asia[0] === europa[0]
  comparacionesAsiaEuropa[1] = asia[1] === europa[1]
  comparacionesAsiaEuropa[2] = asia[2] === europa[2]
  comparacionesAsiaEuropa[3] = asia[3] === europa[3]
  const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
  const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]; 
*/

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