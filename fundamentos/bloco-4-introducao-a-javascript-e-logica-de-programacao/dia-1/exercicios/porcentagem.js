let porcentagem = 150

if(porcentagem >= 90 && porcentagem < 100) {
    porcentagem = "A";
    console.log(porcentagem);
}else if(porcentagem >= 80) {
    porcentagem = "B";
    console.log(porcentagem);
}else if(porcentagem >= 70) {
    porcentagem = "C";
    console.log(porcentagem);
}else if(porcentagem >= 60) {
    porcentagem = "D";
    console.log(porcentagem);
}else if(porcentagem >= 50) {
    porcentagem = "E";
    console.log(porcentagem);
}else if(porcentagem < 50 && porcentagem >= 0) {
    porcentagem = "F";
    console.log(porcentagem);
}else if(porcentagem < 0 && porcentagem > 100) {
    console.log("ERRO");
}
