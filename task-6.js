/* Задание 6
Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. 
Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. 
Проверить, все ли элементы в массиве одинаковые.
 */
let nums = [1, 2, 3, 1];
let x = true
for (let i = 0; i < nums.length; i++) {
  if (nums[0] !== nums[i]) {
    x = false
    break
  }
}
console.log(x)