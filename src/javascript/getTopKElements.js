/*
Дан массив целых чисел nums и целое число k.
Нужно написать функцию, которая вынимает из массива k наиболее часто встречающихся элементов.

# ввод
nums = [1,1,2,2,3,3]
k = 2
# вывод (в любом порядке)
[1, 2]
*/

const getTopKElements = (nums, k) => {
  if (!nums.length || !k) {
      return [];
  }
  return [...nums.reduce((acc, item) => {
      if (acc.has(item)) {
          acc.set(item, acc.get(item) + 1);
      } else {
          acc.set(item, 1);
      }
      return acc;
  }, new Map()).entries()].sort((a, b) => b[1] - a[1]).slice(0, k).map(([key]) => key);
}

// [key, value]

// memory: h - uniq(nums) * 2 + 2*k
// time: n + uniq(nums) + uniq(nums)*log(uniq(nums)) + 2 * k = n + h*log(h) + k
// n + n log (n)