const num1 = 100;
const num2 = 100;
const num3 = 100;

if(num1 > num2 && num1 > num3) {
    console.log("num1 é variável com maior número:", num1);
}else if(num2 > num1 && num2 > num3) {
    console.log("num2 é variável com maior número:", num2);
}else if(num3 > num1 && num3 > num2) {
    console.log("num3 é variável com maior número:", num3);
}else {
    console.log("Indefinido");
}