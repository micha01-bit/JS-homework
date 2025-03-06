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
let n = 1000; 
let num = 0; 
while (n >= 50) {
   n /= 2; 
   console.log(n); 
   num++;
}  

 console.log(`Количество циклов: ${num}`);
  
 

 
//Задание шестое основное 
let dayFriday = 3; 
let allDay = 31; 
 
for (let i = dayFriday; i <= allDay; i += 7) {
   console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
   
}
     
//Задание первое дополнительное 
let k = 100; 
let iterations = 0; 
 
while (k >= 0) {
   k -= 7; 
   console.log(k); 
   iterations++;
}
 
console.log(`Количество циклов: ${iterations}`);
 
 
//Задание второе дополнительное 
const months = ['1.Январь','2.Февраль','3.Март','4.Апрель','5.Май','6.Июнь', '7.Июль','8.Август','9.Сентябрь','10.Октябрь','11.Ноябрь','12.Декабрь'];
for (let key in months) {
   console.log( months[key]);
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