// JSnack 2
// Dare la possibilità di inserire due parole.
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

const parola1 = prompt('inserisci una parola');
const parola2 = prompt('inserisci un\'altra parola');

if(parola1.length === parola2.length){
    console.log(parola1 + ' ' + parola2);
}else if(parola1.length > parola2.length){
    console.log(parola1);
}else{
    console.log(parola2);
}