const { mdc } = require ('../EX_20/MDC')

describe('Validar resultado do MDC', () => {

    it('Calculo com valores corretos', () => {
        expect(mdc(6, 8)).toBe(2)
    });
    
});   