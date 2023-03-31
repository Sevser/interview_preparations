/*
Мы хотим складывать очень большие числа, которые превышают емкость базовых типов, поэтому мы храним их в виде массива неотрицательных чисел.

Нужно написать функцию, которая примет на вход два таких массива, вычислит сумму чисел, представленных массивами, и вернет результат в виде такого же массива.

# Пример
# ввод
arr1 = [1, 2, 3] # число 123
arr2 = [4, 5, 6] # число 456
# вывод
res = [5, 7, 9] # число 579. Допустим ответ с первым незначимым нулем [0, 5, 7, 9]
*/

const getSum = (left, right) => {
  left = left.reverse();
  right = right.reverse();
  let overflow = false;
  const maxLength = Math.max(left.length, right.length);
  const result = [];
  for (let i = 0; i < maxLength; i++) {
      let sum = (left[i] || 0)  + (right[i] || 0) + (overflow ? 1 : 0);
      overflow = sum > 9;
      result.push(sum % 10);
  }
  if (overflow) {
      result.push(1);
  }
  return result.reverse();
}