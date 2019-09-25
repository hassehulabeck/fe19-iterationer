var numbers = [8, 3, 4, 9, 1, 6, 7, 2, 10, 5];

var someOtherNumbers = [];

numbers.forEach(function (number, index) {
    // Variabeln index ger oss just indexeringsnumret för arrayen.
    if (index % 2 == 0)
        // Genom att se om det blir någon rest vid modulus-operationen,
        // ser vi om det är jämnt eller udda index.
        // De jämna kopierar vi till den nya arrayen.
        someOtherNumbers.push(number);
})

console.log(someOtherNumbers); // 8, 4, 1, 7, 10