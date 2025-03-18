//Задание первое
let password = 'Пароль'; 
 
let Password = Number(prompt('Введите пароль')); 
 
if (Password === 2001) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неверно');
} 
 
//Задание второе  
let C = Number(prompt('Введите любое число')); 
let c = '5'; 

(C > 0 && C < 10) ? console.log('Верно') : console.log('Не верно'); 
 
//Задание третье   
let d = '135'; 
let e = '55'; 
 
let D = Number(prompt('Введите первое число')); 
let E = Number(prompt('Введите второе число'));
 
(D > 100 || E > 100) ? console.log('Верно') : console.log('Не верно'); 

//Задание четвертое 
let a = '2';
let b = '3';
 
a = Number(a); 
b = Number(b);
alert(a + b); 
 
//Задание пятое 
let monthNumber = String(prompt('Введите номер месяца!')); 
 
switch (monthNumber) {
    case '1':
        console.log('Январь.Зима');
        break;  
    case '2':
        console.log('Февраль.Зима');
        break; 
    case '3':
        console.log('Март.Весна');
        break; 
    case '4':
        console.log('Апрель.Весна');
        break; 
    case '5':
        console.log('Май.Весна');
        break; 
    case '6':
        console.log('Июнь.Лето');
        break; 
    case '7':
        console.log('Июль.Лето');
        break; 
    case '8':
        console.log('Август.Лето');
        break; 
    case '9':
        console.log('Сентябрь.Осень');
        break; 
    case '10':
        console.log('Октябрь.Осень');
        break; 
    case '11':
        console.log('Ноябрь.Осень');
        break; 
    case '12':
        console.log('Декябрь.Зима');
        break;
        
    default: 
        console.log('Неверное число месяца');
        break;
} 
 
//Дополниельные задания 
//Задание 1 
let num = +prompt("Пожалуйста, введите любое число:",''); 
alert( isFinite(num) ); 

    if (num % 2 === 0) {
      alert('Чётное число');
    } else {
      alert('Нечётное число')
    } 

//Задание 2 
let clientOS = Number(prompt('Это ВТБ банк! Пожалуйста, введите код усройства для скачивания мобильного приложения! Где 0 - IOS, 1 - Android!')); 
 
if (clientOS === 0) {
    console.log('Установите версию приложения для iOS по ссылке');
} 
if (clientOS === 1) {
    console.log('Установите версию приложения для Android по ссылке');
}  
 
//Задание 3 
const ClientOS = prompt("Введите вашу операционную систему (iOS или Android): ");

const clientDeviceYear = 2015;
const deviceYear = Number(prompt("Введите год выпуска вашего телефона: "));
if (deviceYear < clientDeviceYear) {
    
    if (ClientOS === "iOS") {
        console.log("Установите облегчённую версию приложения для iOS по ссылке.");
    } else if (ClientOS === "Android") {
        console.log("Установите облегчённую версию приложения для Android по ссылке.");
    }
} else {
    
    console.log("Установите приложение по ссылке.");
}