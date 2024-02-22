const { calcular } = require('../EX_20/multiplos')

describe('Soma dos Múltiplos', () => {

    it('Deve validar a soma dos multiplos de 5 e 7', () => {
        expect(calcular()).toBe(156361)
    });


});