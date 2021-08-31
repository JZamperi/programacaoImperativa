// Microondas Super Veloz

function microondas (prato, tempo){
    const pipoca = 10, macarrao = 8, carne = 15, feijao = 12, brigadeiro = 8;

    if (prato == 1 && tempo == pipoca){
        console.log ('Pipoca Pronta!');
    } else if (prato == 2 && tempo == macarrao){
        console.log ('Macarrao Pronto!');
    } else if (prato == 3 && tempo == carne){
        console.log ('Carne Pronto!');
    } else if (prato == 4 && tempo == feijao){
        console.log ('Feijão Pronto!')
    } else if (prato == 5 && tempo == brigadeiro){
        console.log ('Brigadeiro Pronto!');
    } else if (prato == 1 && (tempo >= (pipoca * 2) && tempo <= (pipoca * 3))){
        console.log ('Comida Queimou');
    } else if (prato == 2 && (tempo >= (macarrao * 2) && tempo <= (macarrao * 3))){
        console.log ('Comida Queimou');
    } else if (prato == 3 && (tempo >= (carne * 2) && tempo <= (carne * 3))){
        console.log ('Comida Queimou');
    } else if (prato == 4 && (tempo >= (feijao * 2) && tempo <= (feijao * 3))){
        console.log ('Comida Queimou');
    } else if (prato == 5 && (tempo >= (brigadeiro * 2) && tempo <= (brigadeiro * 3))){
        console.log ('Comida Queimou');
    } else if (prato == 1 && tempo < pipoca){
        console.log ('Tempo Insuficiente!');
    } else if (prato == 2 && tempo < macarrao){
        console.log ('Tempo Insuficiente!');
    } else if (prato == 3 && tempo < carne){
        console.log ('Tempo Insuficiente!');
    } else if (prato == 4 && tempo < feijao){
        console.log ('Tempo Insuficiente!');
    } else if (prato == 5 && tempo < brigadeiro){
        console.log ('Tempo Insuficiente!');
    } else if (prato == 1 && tempo > (pipoca * 3)){
        console.log ('KABUUMMM!!!');
    } else if (prato == 2 && tempo > (macarrao * 3)){
        console.log ('KABUUMMM!!!');
    } else if (prato == 3 && tempo > (carne *3)){
        console.log ('KABUUMMM!!!');
    } else if (prato == 4 && tempo > (feijao * 3)){
        console.log ('KABUUMMM!!!');
    } else if (prato == 5 && tempo > (brigadeiro * 3)){
        console.log ('KABUUMMM!!!');
    } else if (prato > 5){
        console.log ('Prato inexistente');
    }
} console.log ('Prato Pronto! Bom Apetite!!!');

microondas (1, 9);