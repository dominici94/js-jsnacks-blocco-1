// JSnack 3
// Stampa le potenze di 2 fino a 1000.


// 2^0 = 1; == 2*0;
// 2^1 = 2; == 2;
// 2^2 = 4; == 2*2;
// 2^3 = 8; == 2*2*2;
// 2^4 = 16; == 2*2*2*2;
// 2^5 = 32; == 2*2*2*2*2;
// 2^6 = 64; == 2*2*2*2*2*2;
// 2^7 = 128; == 2*2*2*2*2*2*2;
// 2^8 = 256; == 2*2*2*2*2*2*2*2;
// 2^9 = 512; == 2*2*2*2*2*2*2*2*2;
// 2^10 = 1024; NO 


// numero di cui di vuole calcolare la potenza
const numero = 2;

// punto di partenza qualsiasi numero elevato alla 0 = 1
let potenza = 1; 

while(potenza < 1000){
    console.log(potenza);
    potenza *= numero;
}