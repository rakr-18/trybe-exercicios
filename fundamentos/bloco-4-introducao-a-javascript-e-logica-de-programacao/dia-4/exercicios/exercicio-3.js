let invertida = '';

function palindromo(frase) {
    for(let index = frase.length - 1; index >= 0; index -= 1) {
        invertida = frase[index];
    }
}

palindromo("carro");
console.log(invertida);
