let a;
console.log (a === 1);   // a é um número.
console.log (a === "1"); // a é uma string.

//Todos são Verdadeiros
console.log (100 == '100');
console.log (100 == [100]);

//Todos são Falsos
console.log (100 === '100');
console.log (100 === [100]);

// Todos são verdadeiros
console.log (false == 0);
console.log (0 == '');
console.log (null == undefined);
console.log ([] == false);
console.log (!![0] == true);
 
// Todos são falsos.
console.log (false == null);
console.log (NaN == NaN);
console.log (Infinity == true);
console.log ([] == true);
console.log ([0] == true);