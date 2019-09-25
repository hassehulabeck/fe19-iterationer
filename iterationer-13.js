var months = [
    "Januari", "Februari", "Mars", "April",
    "Maj", "Juni", "Juli", "Augusti",
    "September", "Oktober", "November", "December"
];

for (let i = 1; i <= 12; i++) {
    // Skapa ett datumobjekt för varje iteration = för varje månad.
    // Nollan i slutet är ett trick för att skapa 'sista dagen'-datum.
    var month = new Date(2019, i, 0)

    console.log(months[i - 1] + " har " + month.getDate() + " dagar.");
}