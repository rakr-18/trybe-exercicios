function number(number) {
    let numerosPares = 0;
    let numerosImpars = 0

    for(let index = 0; index < number.length; index += 1) {
        if(number[index] % 2 != 0) {
            numerosPares += 1;
            console.log(numerosPares + " números pares");
        } else {
            numerosImpars += 1;
            console.log(numerosImpars + " números impares");
        }
    }
}

number(5, 8, 9);