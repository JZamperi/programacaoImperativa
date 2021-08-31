/*var n = 9
var i = 0

while(i<=10){
    console.log(n, "X", i, "=", (n*i));
    i++;
}

for (let i = 1; i <= 10; i++) {
    console.log ("Tabuada do " + i) 
    for (let n = 1; n <= 10; n++){
        console.log(i + " X " + n + " = " + (i * n));
    }
    console.log ("\n");
}*/

let numero = window.prompt("Digite um número ");

for(let x =0; x <= 10; x++){
    let y = numero * x;
    console.log (+x, "x", +numero, "=", +y);
}
