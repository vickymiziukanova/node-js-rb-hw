// Дано ціле число x. Поверніть true, якщо число є паліндромом, і false в іншому випадку.
//
//     Приклад 1:
// Вхід: x = 121
// Вихід: true
// Пояснення: 121 читається як 121 зліва направо і справа наліво.
//
//     Приклад 2:
// Вхід: x = -121
// Вихід: false
// Пояснення: Зліва направо читається як -121. Справа наліво стає 121-, тому це не паліндром.
// 123321 = 6

const isPalindrome = (numbers) => {
    const nums = numbers.toString();
    const halfLength = nums.length / 2;

    for (let i = 0; i < halfLength; i++) {
        if (nums[i] !== nums[nums.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
