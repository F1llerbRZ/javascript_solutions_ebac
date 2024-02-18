describe("Função calcularMDC", () => {
    it("deve retornar o MDC de dois números", () => {
    const num1 = 2;
    const num2 = 10;
    const mdcEsperado = 2;

    const mdcEncontrado = calcularMDC(num1, num2);

    expect(mdcEncontrado).toBe(mdcEsperado);
    });

    it("deve retornar o MDC de dois números mesmo quando um dos números é zero", () => {
    const num1 = 0;
    const num2 = 10;
    const mdcEsperado = 10;

    const mdcEncontrado = calcularMDC(num1, num2);

    expect(mdcEncontrado).toBe(mdcEsperado);
    });

    it("deve retornar o MDC de dois números mesmo quando ambos os números são zero", () => {
    const num1 = 0;
    const num2 = 0;
    const mdcEsperado = 0;

    const mdcEncontrado = calcularMDC(num1, num2);

    expect(mdcEncontrado).toBe(mdcEsperado);
    });

    it("deve retornar o MDC de dois números negativos", () => {
    const num1 = -2;
    const num2 = -10;
    const mdcEsperado = 2;

    const mdcEncontrado = calcularMDC(num1, num2);

    expect(mdcEncontrado).toBe(mdcEsperado);
    });
});
