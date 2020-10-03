
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
}

exports.avg = function avg (array) {
  // проверяем на пустой массив и параметры
  if (arguments.length === 0 || array.length === 0) {
    return 0; }
}
