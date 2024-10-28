// 1. Зробити сетап проекту (npm init)
// 2. Створити файл index.js
// 3. Переписати цю функцію створивши рекурсивну функцію
//
// const arr = [1, 2, 3, 4, 5];
//
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

const arr = [1, 2, 3, 4, 5];

function recursiveIteration(array, index = 0) {
    if (array.length === index) {
        return;
    }

    return recursiveIteration(array, index + 1);
}

recursiveIteration(arr);

