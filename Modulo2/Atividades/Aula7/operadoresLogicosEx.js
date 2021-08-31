//---------------- Exercício 1 --------------------

let x = 5;
let y = 9;

// 1.
console.log (x < y);

// 2.
console.log (!(x != y));

// 3.
console.log (!(x <= y));

// 4.
console.log (!(x == y));

// 5.
console.log (x - 4);

// 6.
console.log ((x * 2) - y);

// 7.
console.log (x - x);

// 8.
console.log (y - y);

// 9.
console.log (x = '""');

// 10. a.
console.log (x > 9 || x == 5); //False

// 10. b.
console.log (!(x === y)); // True

// 10.c.
console.log (x < 10 && y!==5); //False 



//-------------------- Exercício 2 ---------------------

let x = 10;
let y = "a";

console.log (y === "b" || x >= 10) //True


let x = 3
let y = 8

console.log (!(x == "3" || x === y) && !(y !== 8 && x <= y)) //False


let str = ""
let msg = "haha!"

let eBonito = "false"
console.log (!((str || msg) && eBonito)); //False
