let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
    patinhas: {
        personagem: 'Tio Patinhas',
        origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
        nota: 'O ultimo MacPatinhas',
        recorrente: 'Sim',
    }
  };

  // console.log("Bem-vinda, " + info.personagem);
  // console.log(info);

  /*for(let key in info) {
      console.log(key);
  }*/

  /*for(let key in info) {
      console.log(info[key]);
  }*/

  for(let key in info) {
      console.log(info[key], "e", info.patinhas[key]);
  }