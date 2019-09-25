var summa = 0;
var dice = 0;

while (summa < 100) {
    dice = Math.ceil(Math.random() * 6);
    summa = summa + dice;
    console.log(summa);
}