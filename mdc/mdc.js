// Calcule o MDC (máximo divisor comum) entre dois números

function calcularMDC (num1, num2) {

    var resto;

    do {

        resto = num1 % num2;

        num1 = num2;

        num2 = resto;

    } while (resto != 0);

    return num1;

}

var resultado = calcularMDC(2, 10);

console.log(resultado);