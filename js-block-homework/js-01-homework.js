// Дано додатнє ціле число n. Знайдіть всі числа в діапазоні [1, n] включно, які діляться на 3, 5 або 7.
// Поверніть масив цих чисел.

// Вхід: n = 7
// Вихід: [3, 5, 6, 7]
// Пояснення: Числа в діапазоні [1, 7], які діляться на 3, 5 або 7, це 3, 5, 6, 7. Сума цих чисел дорівнює 21.

const getDivisibleNumbersInRange = (value) => {
    let result = [];

    for (let i = 1; i <= value; i++) {
        switch (true) {
            case (i % 3 === 0):
            case (i % 5 === 0):
            case (i % 7 === 0):
                result.push(i);
                break;
        }
    }

    return result;
}

console.log(getDivisibleNumbersInRange(7));
