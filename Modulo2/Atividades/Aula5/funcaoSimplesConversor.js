// 1. Função Conversor
function conversor(pol){
    return  pol * 2.54
}
console.log(conversor(5));

// 2. Função Converta URL
function link(url){
    return 'https://www.' + url + '.com.br';
}
console.log(link("funcao2"));

// 3. Função Retorna Frase
function frase(exclamacao){
    return exclamacao + "!"
}
const retornar = frase("Uma frase com exclamação")
console.log(retornar)

// 4. Calculo de idade do cachorro
function idade(i){
    return i * 7
}
console.log(idade(15))

// 5. Calculo de salário
function hora(salario){
    return "Sua hora trabalhada é de: R$" + salario / 160
}
const valor = hora(1600)
console.log(valor)

// 6. Calcular IMC
function calc(alt, peso){
    const altMetro = alt / 100
    imc = peso / (altMetro * altMetro)
    return imc.toFixed(2)
}
console.log(calc(170, 100))

// 7. Converter minúscula em maiúscula
function maiusc(minusc){
    return minusc.toUpperCase()
}
frase = maiusc("resultado!")
console.log(frase)

// 8. Função Parâmetro
function parametro(p){
    return typeof p
}
console.log(parametro(10))

// 9. Função Raio de um Circulo
function raio(r){
    return 2 * Math.PI * r
}
rest = raio(2)
console.log(rest)
