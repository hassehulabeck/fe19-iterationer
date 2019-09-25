var add = 0;
var j = 0; // Ytterligare en räknare, den här för att hålla reda på antalet iterationer.

for (let i = 0; j < 100; i += add, j++) {
    // I den tredje delen av for har jag komma-separerat uppräkningen, så att i ökar med värdet på add, och j ökar med 1.
    add += 1;
    console.log(i);
}

// Bättre sätt.
var x = 0;
var addo = 0;
for (let i = 0; i < 100; i++) {
    x += addo;
    addo++;
    console.log(x);
}