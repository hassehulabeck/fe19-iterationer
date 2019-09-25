var kakfat = [
    "Dröm",
    "Hallongrotta",
    "Strassburgare",
    "Finsk pinne",
    "Vaniljhjärta",
    "Dröm",
    "Hallongrotta",
    "Strassburgare",
    "Finsk pinne",
    "Vaniljhjärta"
];
while (kakfat.length != 1) {
    let slump = Math.floor(Math.random() * kakfat.length);
    let kaka = kakfat.splice(slump, 1);
    console.log(kaka[0]);
}