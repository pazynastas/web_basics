//Завдання 1
function Task1(arr) {
    let currentSum = 0;
    let maxSum = -Infinity;
    let tempStart = 0;
    let start = 0;
    let end = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > currentSum + arr[i]) {
            currentSum = arr[i];
            tempStart = i;
        } else {
            currentSum += arr[i];
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }
    }

    console.log(maxSum);
    console.log(arr.slice(start, end + 1));
}

//Приклад

const arr = [10, -1, 2, -3, 4, 5, -2, 6];

console.log(Task1(arr));

//Завдання 2
function Task2(num1, num2) {
    let result = [];
    let carry = 0;

    while (num1.length > num2.length) {
        num2 = '0' + num2;
    }
    while (num1.length < num2.length) {
        num1 = '0' + num1;
    }

    for (let i = num1.length - 1; i >= 0; i--) {
        let sum = parseInt(num1[i]) + parseInt(num2[i]) + carry;
        if (sum > 9) {
            result.unshift(sum % 10);
            carry = 1;
        } else {
            result.unshift(sum);
            carry = 0;
        }
    }

    if (carry === 1) {
        result.unshift(carry);
    }

    console.log(result.join(""));
}


//Приклад

const num1 = "9876543210123456789012345678901234567890123456789012345678901234567890";

const num2 = "1234567890987654321098765432109876543210987654321098765432109876543210";

console.log(Task2(num1, num2));

//Завдання 3
function Task3(arr1, arr2) {
    let result = [...arr1];

    for (let element of arr2) {
        const index = result.indexOf(element);
        if (index !== -1) {
            result.splice(index, 1);
        }
    }

    return result;
}

// Приклад
const arr1 = [1, 2, 2, 3, 4, 5];

const arr2 = [2, 3, 5];

console.log(Task3(arr1, arr2));
