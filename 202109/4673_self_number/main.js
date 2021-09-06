const inputArray = new Array(10000);

for (let i = 1; i <= inputArray.length; i++) {
  const splitedNumber = i.toString().split("");
  const accNumber = splitedNumber.reduce((acc, input) => {
    return parseInt(acc) + parseInt(input);
  });
  const selfNumber = parseInt(accNumber) + i;
  if (selfNumber < 10001) {
    inputArray[selfNumber] = true;
  }
}

for (let i = 1; i <= inputArray.length - 1; i++) {
  if (inputArray[i] !== true) {
    console.log(i);
  }
}
