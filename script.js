// Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// Stampa i numeri da 1 a 100.
// for (let i = 1; i <= 100; i++) {
//     console.log(i);
// }

// Per i multipli di 3 stampa "Fizz" al posto del numero.
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0) {
//         console.log("Fizz");
//     }
//     else console.log(i);
// }

// Per i multipli di 5 stampa "Buzz" al posto del numero.
// for (let i = 1; i <= 100; i++) {
//     if (i % 5 == 0) {
//         console.log("Buzz");
//     }
//     else console.log(i);
// }

// Per i numeri multipli sia di 3 che di 5 stampa "FizzBuzz" al posto del numero.
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     }
//     else console.log(i);
// }

// Combino tutto.
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else if (i % 3 == 0) {
        console.log("Fizz");
    }
    else console.log(i);

}
