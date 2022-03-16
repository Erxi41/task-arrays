/*
  В функцию arraySorting() приходит строка чисел с разделительными запятыми вида "1,2,33,0,17".
  Преобразуте строку в массив чисел, отсортируйте их по возрастанию и верните строку с упорядоченными числами,
  разделенными запятыми.
*/
export function arraySorting(data) {
    let arr = Array.from(data);
    let arr2 = new Array();
    let border = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (i == arr.length) arr2.push(arr.slice(border).join(''));
        if (arr[i] == ',') {
            arr2.push(arr.slice(border, i).join(''));
            border = i + 1;
        }
    }
    let result = arr2.sort((a, b) => a - b).join(',');
    return result;
}

/*
  В функцию arrayFiltering() приходит массив целых чисел.
  Преобразуйте массив таким образом, чтобы все элементы массива, в которых содержатся числа более 100,
  были бы удалены из массива, и верните его в качестве результата функции.
*/
export function arrayFiltering(data) {
    let result = data.filter(function (n) {
        return n <= 100;
    });
    return result;
}

/*
  В функцию arrayPushing() приходят два массива целых чисел размерностью 5 элементов.
  Получите третий массив размерностью 10 элементов, в котором последовательно чередуются
  значения из первых двух массивов, и верните его в качестве результата функции.
*/
export function arrayPushing(array1, array2) {
    let result = new Array();
    for (let i = 0; i < array1.length; i++) result.push(array1[i], array2[i]);
    return result;
}
