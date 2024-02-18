describe("Função maiorValor", () => {
    it("deve retornar o índice do maior valor do array", () => {
    const numeros = [5, 11, 1, 4, 20, 3];
      const maiorIndiceEsperado = 4; // índice do valor 20

    const maiorIndiceEncontrado = maiorValor(numeros, 0);

    expect(maiorIndiceEncontrado).toBe(maiorIndiceEsperado);
    });

    it("deve retornar o índice do maior valor mesmo quando o índice inicial não é zero", () => {
    const numeros = [5, 11, 1, 4, 20, 3];
      const maiorIndiceEsperado = 2; // índice do valor 11

    const maiorIndiceEncontrado = maiorValor(numeros, 2);

    expect(maiorIndiceEncontrado).toBe(maiorIndiceEsperado);
    });
});

describe("Função menorValor", () => {
  it("deve retornar o índice do menor valor do array", () => {
  const numeros = [5, 11, 1, 4, 20, 3];
    const menorIndiceEsperado = 2; // índice do valor 1

  const menorIndiceEncontrado = menorValor(numeros, 0);

  expect(menorIndiceEncontrado).toBe(menorIndiceEsperado);
  });

  it("deve retornar o índice do menor valor mesmo quando o índice inicial não é zero", () => {
  const numeros = [5, 11, 1, 4, 20, 3];
    const menorIndiceEsperado = 4; // índice do valor 20

  const menorIndiceEncontrado = menorValor(numeros, 2);

  expect(menorIndiceEncontrado).toBe(menorIndiceEsperado);
  });
});
