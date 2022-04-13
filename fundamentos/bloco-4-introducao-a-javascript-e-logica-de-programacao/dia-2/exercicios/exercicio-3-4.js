let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaTotal = 0;
let media = 0;

for(let index = 0; index < numbers.length; index += 1) {
    somaTotal = numbers[index] + somaTotal;
}

media = somaTotal / 10;
console.log(media);

if(media > 20) {
    console.log("Valor maior que 20.")
}else if(media < 20) {
    console.log("Valorn menos que 20.");
}