var produkt = {
    pris: 3.80,
    bfdatum: new Date("2019-10-01T22:01:28"),
    kcalPer100gram: 39,
    tillverkare: "ABS-produkter AB",
    hyllplats: "1c"
};

for (egenskap in produkt) {
    // Skriver ut både egenskapens namn och dess värde.
    console.log(egenskap + ": " + produkt[egenskap])
}