//Задание первое основное
let i = 0;

while (i < 2) {
 
console.log("Привет!");

i++;

} 
 
//Задание второе основное
let a = 1;

while (a <= 5) { 

console.log(a);

a++; 

} 
  
//Задание третье основное 
let b = 7;

while (b <= 22) { 

console.log(b);

b++; 

} 
 
//Задание четвертое основное 
const obj = {
    "Коля" : '200',
    "Вася" : '300',
    "Петя" : '400'
}  
 
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
 } 
  
//Задание пятое основное 
for (let n = 1000, num = 0; n > 50; num++) {

n /= 2; 

 console.log( n ); 

}  
 
//Задание шестое основное 
for (let friday = 5; friday <= 31; friday++) {
    
       if (friday === 5) {
          console.log('Сегодня пятница, 5-е число. Необходимо подготовить отчет.');
       } else if (friday === 12) {
          console.log('Сегодня пятница, 12-е число. Необходимо подготовить отчет.');
       } else if (friday === 19) {
          console.log('Сегодня пятница, 19-е число. Необходимо подготовить отчет.');
       } else if (friday === 26) {
          console.log('Сегодня пятница, 26-е число. Необходимо подготовить отчет.');
       }
    }  
     
//Задание первое дополнительное 
for (let k = 100, iterations = 0; k > 0; iterations++) {
  
k -= 7; 
 
console.log(k)

} 
 
//Задание второе дополнительное 
for (let months = 1; months <= 12; months++) {
    
    if (months === 1) {
       console.log('1.Январь');
    } else if (months === 2) {
       console.log('2.Февраль');
    } else if (months === 3) {
       console.log('3.Март');
    } else if (months === 4) {
       console.log('4.Апрель');
    } else if (months === 5) {
        console.log('5.Май');
     } else if (months === 6) {
        console.log('6.Июнь');
     } else if (months === 7) {
        console.log('7.Июль');
     } else if (months === 8) {
        console.log('8.Август');
     } else if (months === 9) {
        console.log('9.Сентябрь');
     } else if (months === 10) {
        console.log('10.Октябрь');
     } else if (months === 11) {
        console.log('11.Ноябрь');
     } else if (months === 12) {
        console.log('12.Декабрь');
     }
 } 
  
//Задание третье дополнительное  
const book = {
    "Название": 'Два́дцать ты́сяч лье под водо́й',
    "Автор": 'Жюль Габрие́ль Верн',
    "Год издания": 'с 20 марта 1869 по 20 июня 1870 года',
    "Жанр":'классический научно-фантастический роман'
 }
 
 for (let key in book) {
    console.log(`${key}: ${book[key]}`);
 } 
  
 //Задание четвертое дополнительное 
 const numbers = [3, 4, 9, 11, 5, 1, 7, 6, 8, 2];  

 let minimum = numbers[0];
  
 for (const item of numbers) {
    
    if(item < minimum) {
     
      minimum = item; 
   }
 } 

 console.log(minimum); 