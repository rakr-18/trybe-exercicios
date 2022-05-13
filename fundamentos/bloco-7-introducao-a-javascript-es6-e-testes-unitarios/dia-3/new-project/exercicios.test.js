const sum = require("./exercicios");

describe('Função de soma', () => {
    it('A soma de 4 + 5 é igual 9', () => {
        expect(sum(4, 5)).toBe(9); // Tomar cuidado com os parenteses
    });
    it('A soma de 0 + 0 é igual a 0', () => {
        expect(sum(0, 0)).toBe(0);
    });
    it('Teste se a função sum lança um erro quando os parâmetros são 4 e "5"', () => {
       expect(sum(4, '5')).toBe(); 
    });
});