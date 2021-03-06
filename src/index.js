
exports.min = function min (array) {
  // проверяем на пустой массив и параметры
  if (arguments.length === 0 || array.length === 0) {
    return 0; }
    // cоздаем перем min и присваиваем первое значение массива
    let min = array[0];
    // делаем цикл по элементам массива - сравниваем переменную min со 
    //след элементом массива если тот меньше то min присваиваем нов значение
    for (let i = 1; i < array.length; i++) {if (array[i] < min) {min = array[i];}}
    // возвращаем минимальное значение
    return min;
}

exports.max = function max (array) {
  // проверяем на пустой массив и параметры
  if (arguments.length === 0 || array.length === 0) {
    return 0; }
    // cоздаем перем max и присваиваем первое значение массива
    let max = array[0];
    // делаем цикл по элементам массива - сравниваем переменную max со 
    //след элементом массива если тот больше то max присваиваем нов значение
    for (let i = 1; i < array.length; i++) {if (array[i] > max) {max = array[i];}}
    // возвращаем максимальное значение
    return max;
}

exports.avg = function avg (array) {
  // проверяем на пустой массив и параметры
  if (arguments.length === 0 || array.length === 0) {
    return 0; }
    // cоздаем перем total (итог) и обнуляем его
    let total = 0;
    // делаем цикл по элементам массива - добавлям в итог значение след элемента массива 
    for (let i = 0; i < array.length; i++) {total = total + array[i]; }
    // возвращаем среднее значение = итог / длина массива
    return total / array.length;
}
