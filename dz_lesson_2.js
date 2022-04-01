// 1. Задание.

var f = 1, e = 1, c, d;
c = ++f; console.log(c); // 2, 
d = e++; console.log(d); // 1
c = (2+ ++f); console.log(c); // 5
d = (2+ e++); console.log(d); // 4
console.log(f); // 3
console.log(e); // 3


// 2. Чему равен х?
var s = 2;
var x = 1 + (s *= 2); // x = 5, т.к. (s *= 2) - означает (s = s * 2), => (s = 2 * 2 = 4)


/*
3. Объявить две целочисленные переменные — a и b и задать им произвольные начальные
значения. Затем написать скрипт, который работает по следующему принципу:
o если a и b положительные, вывести их разность;
o если а и b отрицательные, вывести их произведение;
o если а и b разных знаков, вывести их сумму;
Ноль можно считать положительным числом.
*/

let a = -5;
let b = -10;
if (a >= 0 && b >= 0){
    console.log(a - b);
} else if (a < 0 && b < 0) {
    console.log(a * b);
} else if ( (a >= 0 && b < 0) || (a < 0 && b >= 0) ) {
    console.log(a + b);
}



// 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch
// организовать вывод чисел от a до 15.
let v = 1;
let m = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

switch (v) {
    case 1:
        console.log(m)
        break;
    default:
        console.log(m.slice(v - 1))
}


// 5.  Реализовать четыре основные арифметические операции в виде функций с двумя
//     параметрами. Обязательно использовать оператор return.

function add(x, y) {
    return x + y
}

function sub(x, y) {
    return x - y
}

function multiplication(x, y) {
    return x * y
}

function div(x, y) {
    return x / y
}

console.log(div(10, 10))

/*
6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 — значения аргументов, operation — строка с названием операции. В
зависимости от переданного значения выполнить одну из арифметических операций
(использовать функции из пункта 5) и вернуть полученное значение (применить switch).
*/

function mathOperation(arg1, arg2, operation) {
    switch(operation){
        case "+":
            return add(arg1, arg2);
        case "-":
            return sub(arg1, arg2);
        case "*":
            return multiplication(arg1, arg2);
        case "/":
            return div(arg1, arg2);
        default:
            console.log("Нужно ввести один из четырех операторов (*, +, -, /)");
    }
}

console.log(mathOperation(2, 3, "-"));



//7. * Сравнить null и 0. Объяснить результат

console.log( null == 0 );
console.log( null === 0 );
console.log( null != 0 );


//8. * С помощью рекурсии организовать функцию возведения числа в степень. Формат: function
//       power(val, pow), где val — заданное число, pow –— степень.



