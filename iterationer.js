// Vi vet antalet iterationer
for (let i = 0; i < 7; i++) {
    // variabeln i står för just iteration.
    // Andra delen av parentesen är villkoret. "Fortsätt så länge som..."
    // Tredje delen är förändringen
    console.log(i);
}
// Räkna baklänges
for (let i = 10; i > 0; i--) {
    console.log(i);
}
// Räkna i andra steg än 1
for (let i = 0; i < 20; i += 3) {
    console.log(i);
}

// Okänt antal
var pengaBurk = [1, 1, 1, 1, 5, 5, 5, 10, 10, 1, 1, 1, 1, 5];
let summa = 0;
let coin;
while ((coin = pengaBurk.pop())) {
    summa += coin;
    console.log(summa);
}

// Okänt antal men minst en gång.
var godisBurk = [
    "äcklig", "god", "äcklig", "god", "god",
    "god", "äcklig", "god", "god", "äcklig",
    "god", "god", "äcklig", "god", "god", "god",
    "god", "god", "god", "god", "god", "god"
];
var picked;
do {
    let slumpTal = Math.floor(Math.random() * godisBurk.length);
    picked = godisBurk.splice(slumpTal, 1);
    console.log(picked);
} while (picked != "äcklig");

for (let i = 0; i < godisBurk.length; i++) {
    let slumpTal = Math.floor(Math.random() * godisBurk.length);
    picked = godisBurk.splice(slumpTal, 1);
    if (picked != "äcklig") {
        console.log(picked);
    }
}