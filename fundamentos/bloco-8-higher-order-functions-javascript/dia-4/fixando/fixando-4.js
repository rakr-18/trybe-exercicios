let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[animal, bebida, comida] = [comida, animal, bebida];

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo