// JSnack 1
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while

// FOR

// let somma = 0;

// for(let i = 0; i < 5; i++){
//     let number = parseInt(prompt('inserisci un numero.'));
//     somma += number;
// }

// console.log(somma);

// WHILE

let somma = 0;
let i = 0;

while(i < 5){
    let number = parseInt(prompt('inserisci un numero.'));
    somma += number;
    i++;
}

console.log(somma);