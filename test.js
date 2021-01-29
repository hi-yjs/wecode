//1~50중 짝수를 구하는 함수

function getEven() {
  onlyEven = [];
  for (let n = 1; n < 51; n++) {
    if (n % 2 === 0) {
      onlyEven.push(n);
    }
  }
  return onlyEven;
}

getEven();
