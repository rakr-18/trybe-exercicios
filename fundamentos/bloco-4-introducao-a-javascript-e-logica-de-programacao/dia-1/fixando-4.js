let processo = "reprovada";

switch(processo) {
    case "aprovada": 
        console.log("Você foi aprovado(a)");
        break;
    case "reprovada":
        console.log("Você foi reprovado(a)");
        break;
    case "lista":
        console.log("Você está na lista de espera");
        break;
    default:   
        console.log("Não se aplica");
}