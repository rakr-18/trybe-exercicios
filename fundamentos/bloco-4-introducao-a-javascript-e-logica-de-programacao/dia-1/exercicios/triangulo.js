const anguloA = 80; 
const anguloB = 80; 
const anguloC = -2;
let somaAngulos = anguloA + anguloB + anguloC;

if(somaAngulos == 180) {
    console.log(true);
}else if(anguloA < 0 || anguloB < 0 || anguloC < 0) {
    console.log("invalido");
}else {
    console.log(false);
}