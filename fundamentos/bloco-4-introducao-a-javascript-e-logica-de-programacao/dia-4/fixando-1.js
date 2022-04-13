let player = {
    name: 'Maria',
    lastName: 'Silva',
    age: 34,
    medals: {Golden: 2, Silver: 3},
    bestInTheWorld: ['2006', '2007', '2008', '2009', '2010', '2018'],
};

console.log("A jogadora " + player.name + " " + player.lastName + " tem " + player.age + " anos de idade.");
console.log("A jogadora " + player.name + " " + player.lastName + " foi eleita melhor do mundo por " + player.bestInTheWorld.length + " vezes.");
console.log("A jogadora possui " + player.medals.Golden + " medalhas de ouro e " + player.medals.Silver + " medalhas de prata.");