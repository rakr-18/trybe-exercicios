const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  let divisivel = 0;
  numbers.find((number) => {
    if(number % 3 === 0 && number % 5 === 0) {
      divisivel = number;
    }
  });

  return divisivel;
}

console.log(findDivisibleBy3And5())