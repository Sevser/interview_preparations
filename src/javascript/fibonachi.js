// f(0) = 1
// f(1) = 1
// f(2) = 1 + 1 = 2 // f(1) + f(0)
// f(3) = 2 + 1 = 3 // f(2) + f(1)
// f(4) = 3 + 2 = 5
// f(5) = 5 + 3 = 8
// f(6) = 8 + 5 = 13
// f(n) = f(n - 1) + f(n - 2)

function f(n) {
  if (n < 2) {
      return 1;
  }
  const fibArr = [1, 1];
  for (let i = 2; i <= n; i++) {
      fibArr[i%2] = fibArr[0] + fibArr[1];
  }
  return fibArr[n % 2];
}
