function mdc(num1, num2){

    if (num2 === 0) {
        return num1;
      } else {
        return mdc(num2, num1 % num2);
      }
}

console.log(mdc(6, 8));