const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email, posicao) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados! Sua posição é: ${posicao}`);
  };
  
  // Adicione seu código aqui
  emailListInData.forEach(showEmailList);