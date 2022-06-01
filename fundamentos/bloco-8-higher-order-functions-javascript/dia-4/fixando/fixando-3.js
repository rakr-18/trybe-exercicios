const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

const [frase, saudacao] = saudacoes;

saudacao(frase); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring