let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaTotal = 0;

for(let index = 0; index < numbers.length; index += 1) {
    somaTotal = numbers[index] + somaTotal;
}

console.log(somaTotal);