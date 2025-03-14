//первое задание
let a = 10; 
alert(a); 
 
let A = 20; 
alert(A); 
 
//второе задание  
let release = 2007; 
alert(release);   
 
//третье задание 
let creator = "brendan"; 
alert(creator); 
 
//четвертое задание 
let b = 10;
let c = 2; 
 
let sum = 10 + 2; 
let difference = 10-2; 
let product = 10 * 2; 
let quotient = 10 / 2; 
 
alert(sum); 
alert(difference); 
alert(product); 
alert(quotient); 
 
//пятое задание  
let d = 2; 
let e = 5; 
 
let result = 2 ** 5; 
alert(result); 
 
//шестое задание 
let f = 9; 
let i = 2; 
 
let Result = 9 % 2; 
alert(Result); 
 
//седьмое задание  
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num); 
 
//восьмое задание 
let age = Number(prompt('Сколько вам лет?')); 
alert(age); 
 
//девятое задание 
const user = {
    name: 'john', 
    Age: '35', 
    isAdmin: true
}; 
 
let key = prompt("Что вы хотите узнать о пользователе?", "name", "Age", "isAdmin");
 
alert(user[key]);  
 
console.log(user['name']); 
console.log(user['age']); 
user['isAdmin'] = true; 
 
//десятое задание 
let userName = String(prompt('Как вас зовут?')); 
let username = "Евгений"; 
alert(`Привет, ${userName}!`); 
 
//дополнительное задание 
let number = Number(prompt('Загадайте любое число'));   
let secNumber = 0; 
secNumber *= 2; 
secNumber += 10; 
secNumber /= 2; 
secNumber -= 0; 
alert(secNumber);