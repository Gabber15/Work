// 1. Создайте переменную price и присвойте ей значение 100. Затем создайте переменную discount и присвойте ей значение 0.2 (20%). Вычислите цену со скидкой и выведите результат в консоль: "80 руб, вместо 100 руб".


let price = 100; 
let discount = 0.2;

discount_price = price * (1 - discount);

console.log(discount_price );



// 2. Дана строка: "Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь". Посчитайте сколько раз в строке встречается символ "п". Выведите кол-во в консоль.

let str = "Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь";


let count = str.split('п').length ;

console.log(count);



// 3. Создайте массив с числами и длиной массива от 5 до 8 на выш выбор. Используйте цикл for, чтобы найти и вывести наименьшее число в массиве.

let arr = [5, 6, 7, 8, 9];

let min = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}

console.log(min);

// 4. Создайте двумерный массив [['Иван', 'Катя', 'Ольга', 'Максим'], ['Минск', 'Брест', 'Гродно', 'Могилев']]. Используя вложенные циклы выведите в консоль строки вида: "Иван из Минск", "Катя из Брест", "Ольга из Гродно", "Максим из Могилев".

let arr = [['Иван', 'Катя', 'Ольга', 'Максим'], ['Минск', 'Брест', 'Гродно', 'Могилев']];

for (let i = 0; i < arr[0].length; i++) {
    console.log(`${arr[0][i]} из ${arr[1][i]}`);
}

    // 5. Создайте переменную temperature со случайным значением от -10 до 40. Напишите условие, которое проверяет, холодно ли (меньше 0) или жарко (больше 30), либо "нормальная температура", и выведите соответствующее сообщение. Решите задачу с помощью switch.

    let temperature = 25;

    switch (true) {
        case (temperature < 0):
        console.log('cold');
        break;

        case (temperature < 30):
            console.log('warm');
            break;
            
            default:
        console.log( 'hottest');
    }


    // 6. Напишите программу, которая запрашивает у пользователя целое положительное число и выводит на экран факториал этого числа с помощью цикла for. Например, для числа 5 = 1*2*3*4*5 = 120.


let num = parseInt(prompt('Введите  число:'));


let factorial = 1;


for (let i = 1; i <= num; i++) {
    factorial *= i;
}

console.log(num);




    // 7. Создайте строку с названиями городов Беларуси, записывая каждый город через запятую (4 городов будет достаточно). Создайте массив из данной строки с городами. Используя метод push, добавьте в массив еще 3 города и выведите результат.

    let cityStr = "Брест, Могилев, Минск";

    let cityArray = cityStr.split(", ");


    cityArray.push("Витебск","Гродно", "Могилев");

    console.log(cityArray);

    
// 8. Напишите условие, которое проверяет, что переменная age больше 18 и меньше 65. Если условие выполнено, выведите сообщение о том, что пользователь находится в возрасте трудоспособности.


let age = 19;
if (age > 18 && age < 65 ){
    console.log(`${age} трудоспособен`);
} else {
    console.log('нетрудоспособнен');
}
  




// 9. Создайте массив с названиями месяцев. Используя обратный цикл while, выведите каждый месяц в консоль, добавить порядковый номер к месяцу, например: "1. Январь".

let months = ["January", "February", "March", "April", "May", "August", "September", "October", "November", "December"];

let num = months.length - 1;

while (num >= 0) {
        console.log(`${months.length - num}. ${months[num]}`);
       
        num--;
    }

// 10. Напишите программу, которая ищет заданное число в произвольном массиве длиной 8 и выводит его индекс. Если число не найдено, выведите сообщение об этом.

