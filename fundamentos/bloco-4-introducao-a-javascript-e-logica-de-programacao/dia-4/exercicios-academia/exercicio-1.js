function calculosPerimetro(base, altura) {
    let area = base * altura;
    let perimetro = (base * 2) + (altura * 2);

    return console.log("Área:", area, ",", "Perimetro: ",perimetro);
}

calculosPerimetro(5, 10);