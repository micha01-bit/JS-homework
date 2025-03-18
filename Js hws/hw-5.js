//Задание 1 
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b; 
    }
} 
 
console.log(min(4, 8)); 
console.log(min(6, 6)); 
 
//Задание 2 
function isEven(n) {
   if (n % 2 === 0) {
    return 'Число четное';
   } else {
    return 'Число нечетное';
   } 
} 
 
console.log(isEven(2)); 
console.log(isEven(3)); 
 
//Задание 3 
function square(number) {
    return number ** 2;
} 
 
console.log(square(5)); 
 
const up = (d) => d ** 2;  
 
square(5); 
console.log(up(5)); 
 
//Задание 4  
function age() { 
   let age = +prompt('Сколько тебе лет?');

   if (age < 0) {
     alert ('Вы ввели неправильное значение');
   } else if (age >= 0 && age <=12) {
     alert ('Привет, друг!');
   } else if (age >= 13) {
     alert ('Добро пожаловать!');
   } else {
    alert('Вы ввели неправильное значение');
   }
}  
 
age();
 
//Задание 5 
function calc(c, e) { 
     
  console.log(isNaN(c));  
  console.log(isNaN(e)); 

   if (isNaN(c) || isNaN(e)) {
    return 'Одно или оба значения не являются числом';
   } else {
    return c * e;
   } 
} 
 
console.log(calc(5, 2)); 
 
//Задание 6 
function getNumber() {
    let number = prompt('Введите число'); 
    if (isNaN(number)) {
        return 'Переданный параметр не является числом';
    } else {
     return `${number} в кубе равняется ${number ** 3}`;   
    }
} 
 
console.log(getNumber()); 
 
//Задание 7  
function getArea() {
    return Math.PI * this.radius ** 2;
}  
 
function getPerimeter() {
    return 2 * Math.PI * this.radius; 
}

const circle1 = {
    radius: 10, 
    methodgetArea: getArea, 
    methodgetPerimeter: getPerimeter,
} 
 
const circle2 = {
    radius: 20, 
    methodgetArea: getArea, 
    methodgetPerimeter: getPerimeter,
}
 
console.log(circle1.methodgetArea()); 
console.log(circle2.methodgetArea()); 
console.log(circle1.methodgetPerimeter()); 
console.log(circle2.methodgetPerimeter());