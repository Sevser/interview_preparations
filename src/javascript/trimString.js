// Написать функцию, проводящую сжатие строки по таким правилам:
// 1. Если буква повторяется несколько раз подряд - пишется эта буква и число посторений
// 2. Если буква повторяется только 1 раз - пишется только эта буква
// 3. Считаются только буквы подряд. Если та же буква встречается в другом месте - считается отдельно 
//
// Пример:
// input: aaabbehhaa
// output: a3b2eh2a2

function f (str) {
  const writeCountLetters = (acc) => acc.result + (acc.count === 1 ? acc.lastSymbol: acc.lastSymbol + acc.count);
  return str.split('').reduce((acc, symbol, index, array) => {
      if (index === array.length - 1) {
          if (!acc.lastSymbol) {
              acc.result = symbol;
          } else if (acc.lastSymbol === symbol) {
              acc.result = acc.result + acc.lastSymbol + (acc.count + 1);
          } else {
              acc.result = writeCountLetters(acc) + symbol;
          }
      } else {
          if (!acc.lastSymbol) {
              acc.lastSymbol = symbol;
              acc.count = 1;
          } else if (acc.lastSymbol === symbol) {
              acc.count++;
          } else {
              acc.result = writeCountLetters(acc);
              acc.lastSymbol = symbol;
              acc.count = 1;
          }
      }
      return acc;
  }, { result: '', lastSymbol: null, count: 0 }).result;
}

console.log(f('aaabbehhaa'));