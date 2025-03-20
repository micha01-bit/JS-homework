//Задача 1 
const array = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < array.length; i++) {
  if (array[i] === 10) {
    console.log(array[i]);
    break;
  }
  console.log(array[i]);
} 
 
//Задача 2 
const arr = [1, 5, 4, 10, 0, 3];
let index = -1;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 4) {
        index = i;
        break;
    }
}
console.log(index);

//Задача 3  
const array2 = [1, 3, 5, 10, 20]; 
const result2 = array2.join(' '); 

console.log(result2); 
 
//Задача 4 
const matrix = [];

for (let i = 0; i < 3; i++) {
  const row = [];
  for (let j = 0; j < 3; j++) {
    row.push(1);
  }
  matrix.push(row);
}

console.log(matrix); // [[1, 1, 1], [1, 1, 1], [1, 1, 1]] 
 
//Задача 5 
const array3 = [1, 1, 1];  
array3.push(2,2,2);  
 
console.log(array3); 
 
//Задача 6 
const arr2 = [9, 8, 7, 'a', 6, 5];
 
const filteredArray = arr2.filter(item => typeof item !== 'string');
const sortedArray = filteredArray.sort((a, b) => a - b);

console.log(sortedArray);  

//Задача 7 
const arr3 = [9, 8, 7, 6, 5]; 

const userInput = prompt('Угадайте число из массива!');
const guessedNumber = parseInt(userInput);

if (arr3.includes(guessedNumber)) {
 alert('Угадал');
} else {
 alert('Не угадал');
} 

//Задание 8 
let str = 'abcdef';
str = str.split('');
str.reverse();
str = str.join('');

console.log(str); 

//Задание 9 
const array6 = [[1, 2, 3], [4, 5, 6]]; 
console.log(array6.flat());
 
//Задание 10 
const array7 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10) + 1);

for (let i = 0; i < array7.length - 1; i++) { 
    const currentSum = array7[i] + array7[i + 1];
    console.log(`Сумма элементов ${array7[i]} и ${array7[i + 1]}: ${currentSum}`);
}

console.log("Сгенерированный массив:", array7); 
 
//Задание 11 
function squareNumbers(arr) {
    return arr.map(num => num * num);
}

const inputArray = [1, 2, 3, 4, 5];
const squaredArray = squareNumbers(inputArray);

console.log(squaredArray); 
 
//Задание 12 
function getStringLengths(arr) {
    return arr.map(str => str.length);
}

const inputArray2 = ["apple", "banana", "cherry", "date"];
const lengthsArray = getStringLengths(inputArray2);

console.log(lengthsArray);  
 
//Задание 13 
function getNegativeNumbers(arr) {
    return arr.filter(num => num < 0);
}

const inputArray3 = [1, -2, 3, -4, 5, -6];
const negativeNumbersArray = getNegativeNumbers(inputArray3);

console.log(negativeNumbersArray);
 
//Задание 14 
const originalArray = [];
for (let i = 0; i < 10; i++) {
    originalArray.push(Math.floor(Math.random() * 11)); 
}

const evenNumbersArray = originalArray.filter(num => num % 2 === 0);

console.log("Исходный массив:", originalArray);
console.log("Массив с четными значениями:", evenNumbersArray); 
 
//Задание 15 
const array9 = [];
for (let i = 0; i < 6; i++) {
    array9.push(Math.floor(Math.random() * 10) + 1);  
}

const sum = array9.reduce((acc, num) => acc + num, 0);
const average = sum / array9.length;

console.log("Сгенерированный массив:", array9);
console.log("Среднее арифметическое:", average);