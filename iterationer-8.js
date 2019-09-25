// Hårdkodad array
var numbers = [1, 4, 8, 3, 5, 8, 9, 4, 0, 4, 3, 2, 6, 8, 1, 3, 2, 7, 7, 4];

// uppbyggd array
var otherNumbers = [];
for (let i = 0; i < 20; i++) {
    let slumpTal = Math.floor(Math.random() * 10);
    otherNumbers.push(slumpTal);
}
var totalSumma = 0;
var i = 0;

while (totalSumma < 100) {
    let slumpTal = Math.floor(Math.random() * numbers.length);
    if ((totalSumma + numbers[slumpTal]) <= 100) {
        totalSumma += numbers[slumpTal];
    }
    i++;
}
console.log(totalSumma + " " + i);