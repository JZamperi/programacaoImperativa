
//Exercícios "Lista de Compras"

//Elementos da Array
const listaDeCompras = ["Arroz", "Batata", "Carne Bovina", "Feijão", "Macarrão", "Tomate"];


// .Join() - Juntar/Separador elementos de uma Array
separarVirgulas = listaDeCompras.join();
console.log (separarVirgulas);   // Junta todos os elementos - Arroz,Batata,Carne Bovina,Feijão,Macarrão,Tomate

separarVirgulas = listaDeCompras.join("; ");
console.log (separarVirgulas);  // Separa os elementos por ponto virgula ';' - Arroz; Batata; Carne Bovina; Feijão; Macarrão; Tomate


// Pop() - Elimina o último elemento de uma Array
retiraUltimoElemento = listaDeCompras.pop();

console.log (listaDeCompras);           // Elimina o último elemento - ['Arroz', 'Batata', 'Carne Bovina', 'Feijão', 'Macarrão']
console.log (retiraUltimoElemento);  // O elemento retirado da Array - Tomate


// Push() - Adiciona um ou mais elementos ao final de uma Array
listaDeCompras.push ("Pão");
console.log (listaDeCompras);   // Adiciona "Pão" ao final da Array - ['Arroz','Batata', 'Carne Bovina', 'Feijão', 'Macarrão', 'Pão']

listaDeCompras.push ("Azeite", "Alface");
console.log (listaDeCompras);   // Adiciona "Azeite", "Alface" ao final da Array, depois do "Pão" que foi adicionado anteriormente - ['Arroz','Batata', 'Carne Bovina', 'Feijão', 'Macarrão', 'Pão', 'Azeite', 'Alface']


// Shift() - Elimina o primeiro elemento de uma Array
retiraPrimeiroElemento = listaDeCompras.shift();

console.log (listaDeCompras);           // Elimina o primeiro elemento - ['Batata', 'Carne Bovina', 'Feijão', 'Macarrão', 'Pão', 'Azeite', 'Alface']
console.log (retiraPrimeiroElemento);   // O elemento retirado da Array - Arroz


// Unshift - Adiciona um ou mais elementos ao início de uma Array
listaDeCompras.unshift("Cebola");
console.log (listaDeCompras);   // Adiciona "Cebola" ao início da Array - ['Cebola', 'Batata', 'Carne Bovina', 'Feijão', 'Macarrão', 'Pão', 'Azeite', 'Alface']

listaDeCompras.unshift("Abacate", "Abacaxi");
console.log (listaDeCompras);   // Adiciona "Abacate", "Abacaxi" ao início da Array, antes da "Cebola" que foi adicionada anteriormente - ["Abacate", "Abacaxi", 'Cebola', 'Batata', 'Carne Bovina', 'Feijão', 'Macarrão', 'Pão', 'Azeite', 'Alface']
