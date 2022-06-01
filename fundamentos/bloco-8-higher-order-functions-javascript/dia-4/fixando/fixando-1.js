// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Morango', 'Laranja', 'Uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite em pó', 'Chocobow', 'Açaí'];

const fruitSalad = (fruit, additional) => {
  let newList = [...fruit, ...additional];
  return newList;
};

console.log(fruitSalad(specialFruit, additionalItens));