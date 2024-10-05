// Ланцюг математичних операцій з Promises.
//
//     Дано число 5.
//
// Кожна операція повинна бути в окремому промісі, і ці проміси слід з'єднати ланцюгом. Спочатку подвоїти його, потім додати 10.
//
// const value = 5;
//
// // проміси тут
//
// double(value)
//     .then(addTen)
//     .then((result) => {
//         console.log(result); // 20
//     });

const value = 5;

const double = (number) => {
    return new Promise((resolve) => {
        try {
            resolve(number * 2);
        } catch (e) {
            console.log(e);
        }
    })
}
const addTen = (num) => num + 10;

double(value)
    .then(addTen)
    .then((result) => {
        console.log(result); // 20
    });
