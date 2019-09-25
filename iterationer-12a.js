var summa = 0;
var firstDice = 0;
var secondDice = 0;

var result = [{
        name: 1,
        firstDiceOccurrences: 0,
        secondDiceOccurrences: 0
    },
    {
        name: 2,
        firstDiceOccurrences: 0,
        secondDiceOccurrences: 0
    },
    {
        name: 3,
        firstDiceOccurrences: 0,
        secondDiceOccurrences: 0
    },
    {
        name: 4,
        firstDiceOccurrences: 0,
        secondDiceOccurrences: 0
    },
    {
        name: 5,
        firstDiceOccurrences: 0,
        secondDiceOccurrences: 0
    },
    {
        name: 6,
        firstDiceOccurrences: 0,
        secondDiceOccurrences: 0
    }
];

while (summa < 100) {
    // Slå första tärningen och spara resultatet.
    firstDice = Math.ceil(Math.random() * 6);
    summa = summa + firstDice;
    result[firstDice - 1].firstDiceOccurrences++;

    // Slå andra tärningen och spara resultatet.
    secondDice = Math.ceil(Math.random() * 6);
    summa = summa + secondDice;
    result[secondDice - 1].secondDiceOccurrences++;
}

/* Notera att summan nu kan bli högre än 100, 
eftersom kollen görs i while-villkoret.
Här skulle man kunna peta in en if-sats i vardera tärningskast
för att kolla om summa + tärningskast är mer än 100.
*/