/* Задание 4
Записать в переменную случайное целое число в диапазоне [0; 100]. 
Используйте объект Math.
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let randomInt = getRandomInt(0, 100);
console.log(randomInt);