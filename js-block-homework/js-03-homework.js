// Напишіть функцію delay(ms), яка повертає проміс, що виконується через ms мілісекунд.
//
// delay(2000).then(() => console.log('Пройшло 2 секунди'));
//
//
// function delay(ms) {
//     return new Promise((resolve) => {
//         // Ваш код
//     });
// }
//
// // Виклик функції
// delay(2000).then(() => console.log('Пройшло 2 секунди'));

function delay(ms) {
    return new Promise((resolve) => {
        try {
            setTimeout(resolve, ms);
        } catch (error) {
            console.log(error);
        }
    });
}

// Виклик функції
console.log('1 sync function call')
delay(2000).then(() => console.log('Пройшло 2 секунди'));
console.log('2 sync function call')
