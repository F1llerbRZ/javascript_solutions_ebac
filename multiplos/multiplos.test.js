describe("Função somaDosMultiplos", () => {
    it("deve retornar a soma dos múltiplos de 5 e 7 até um número n", () => {
    const n = 10;
    const somaEsperada = 23;

    const somaEncontrada = somaDosMultiplos(n);

    expect(somaEncontrada).toBe(somaEsperada);
    });

    it("deve retornar a soma dos múltiplos de 5 e 7 mesmo quando n for zero", () => {
    const n = 0;
    const somaEsperada = 0;

    const somaEncontrada = somaDosMultiplos(n);

    expect(somaEncontrada).toBe(somaEsperada);
    });

    it("deve retornar a soma dos múltiplos de 5 e 7 até um número grande", () => {
    const n = 1000;
    const somaEsperada = 233168;

    const somaEncontrada = somaDosMultiplos(n);

    expect(somaEncontrada).toBe(somaEsperada);
    });
});
