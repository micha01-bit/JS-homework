//Задание 1 
const str = 'js'; 
console.log(str.toUpperCase()); 
 
//Задание 2 
function filterByPrefix(arr, prefix) {
    const lowerCasePrefix = prefix.toLowerCase();
    return arr.filter(str => str.toLowerCase().startsWith(lowerCasePrefix));
  }
  
  console.log(filterByPrefix(["Apple", "banana", "Avocado", "cherry", "apricot"], "ap"));  
   
//Задание 3 
const number = 32.58884;

const floorResult = Math.floor(number);
console.log(floorResult); 

const ceilResult = Math.ceil(number);
console.log(ceilResult); 

const roundResult = Math.round(number);
console.log(roundResult);  
 
//Задание 4 
const numbers = [52, 53, 49, 77, 21, 32];

const minValue = Math.min(...numbers);
console.log(minValue); 

const maxValue = Math.max(...numbers);
console.log(maxValue);  
 
//Задание 5 
function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
} 
 
console.log(getRandomNumber()); 
 
//Задание 6   
function generateRandomNumbers(maxNumber) {
    return Array.from({ length:  Math.floor(maxNumber / 2) }, () => Math.floor(Math.random() * maxNumber) + 1); 
  } 
    
  console.log(generateRandomNumbers(10));  
   
//Задание 7 
function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  console.log(getRandomNumberInRange(1, 10)); 
   
//Задание 8 
let currDate = new Date();
console.log(currDate); 

//Задание 9 
const currentDate = new Date();

const currentDay = currentDate.getDate();

currentDate.setDate(currentDay + 73);

console.log(currentDate); 
 
//Задание 10 
function formatDate(date) {
    const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
  
    const dayOfWeek = daysOfWeek[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
  
    return `Дата: ${day} ${month} ${year} — это ${dayOfWeek}. 
    Время: ${hours}:${minutes}:${seconds}`;
  }
  
 console.log(formatDate(new Date));