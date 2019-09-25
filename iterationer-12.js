var summa = 0;
var dice = 0;

while (summa < 100) {
    dice = Math.ceil(Math.random() * 6);

    // Kolla så att summa + dice inte blir mer än 100
    if (summa + dice <= 100) {
        summa = summa + dice;

    }
    console.log(summa);
}