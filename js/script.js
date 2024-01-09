const resultElement = document.getElementById('ticket');

// ###chiedo all'utente il numero di chilometri che vuole percorrere 

const age = prompt ('Quanti anni hai?');
console.log(age);

// ### chiedo l'età del passeggero.

const kmtrip = prompt ('Quanti km devi percorrere?');
console.log(kmtrip);

// ### calcolo il prezzo  PARZIALE del biglietto, considerando km * 0,21 euro

const partialticket = kmtrip * 0.21;
console.log(partialticket)

// ### CALCOLO DELLO SCONTO

let sconto20 = partialticket * 0.20
console.log=(sconto20)

let sconto40 = partialticket * 0.40
console.log=(sconto40)

// ### calcolo il prezzo REALE del biglietto

let priceticket = 0;

if (age < 18) {
    priceticket = partialticket - sconto20;
} else if (age > 65) {
    priceticket = partialticket - sconto40;
}

document.getElementById ('prezzo').innerHTML = ticket;




