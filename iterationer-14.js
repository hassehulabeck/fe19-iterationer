var lake = [];
var catches = []; // Här lägger vi fångsten.

// Fyll sjön med vatten.
for (let i = 0; i < 1000; i++) {
    lake.push("vatten");
}

// Slumpa ut lite platser i sjön där det ska finnas fisk.
// Vi börjar med mörten.
for (let i = 0; i < 25; i++) {
    var plats = Math.floor(Math.random() * lake.length);
    lake[plats] = "Mört";
}

// Sedan abborrarna.
for (let i = 0; i < 15; i++) {
    var plats = Math.floor(Math.random() * lake.length);
    // Kolla så att det är vatten vi ersätter, och inte en annan fisk.
    if (lake[plats] == "vatten") {
        lake[plats] = "Abborre";
    }
}

// Och sist gäddorna.
for (let i = 0; i < 5; i++) {
    var plats = Math.floor(Math.random() * lake.length);
    // Kolla så att det är vatten vi ersätter, och inte en annan fisk.
    if (lake[plats] == "vatten") {
        lake[plats] = "Gädda";
    }
}

// Och sedan låter vi fiskaren kasta 20 gånger.
for (let i = 0; i < 20; i++) {
    var plats = Math.floor(Math.random() * lake.length);
    // Kolla ifall fiskarens drag hittar något annat än vatten.
    if (lake[plats] != "vatten") {
        catches.push(lake[plats]);
    }
}

// Skriv ut resultatet.
if (catches.length > 0) {
    var adjektiv = ["jättestor", "häftig", "enorm", "kampvillig", "stor"];
    catches.forEach(function (fish, index) {
        // Egentligen skulle jag använt 'catch' som variabelnamn, men det är upptaget, så det fick bli 'fish'.
        console.log("En " + adjektiv[index] + " " + fish);
    })
} else {
    console.log("Ingen lycka.")
}