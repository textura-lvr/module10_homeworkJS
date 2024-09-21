/* Задание 7
Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
 */
let array = [1, 7, 2, 13, 0, 'a', null, 6, 0];
function countElements(arr) {
    let evenCount = 0;
    let oddCount = 0;
    let zeroCount = 0;
/* Стрелочная (=> функция выступает в качестве callback-функции)*/
    arr.forEach(element => {
        if (typeof element === 'number') {
            if (element === 0) {
                zeroCount++;
            } else if (element % 2 === 0) {
                evenCount++;
            } else {
                oddCount++;
            }
        }
    });

    console.log(`Чётных элементов: ${evenCount}`);
    console.log(`Нечётных элементов: ${oddCount}`);
    console.log(`Нулевых элементов: ${zeroCount}`);
}
countElements(array);

