//1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
let x = 2;
let count = 0;
while ( x <= 100 ) {
    
    for ( let i = 2; i < x; i++ ) {

        if ( x % i == 0 ) {
            count++
        }

    }

    if ( count == 0 ) {
        console.log( x )
    }

    count = 0
    x++
}




/*
2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть
сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в
зависимости от находящихся в ней товаров.
3. Товары в корзине хранятся в массиве. Задачи:
a. Организовать такой массив для хранения товаров в корзине;
b. Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/

// товары:
let item_table = { price: 100 };
let item_bed = { price: 250 };
let item_sofa = { price: 130 };

//корзина:
let basket = [];

basket.push(item_bed);
basket.push(item_sofa);
basket.push(item_table);

//подсчет стоимости товаров в корзине
function countBasketPrice ( basket ) {
    let price = 0;
    for ( item in basket ) {
        price = price + basket[item].price;
    }
    return price;
}


let price = countBasketPrice(basket)

console.log(price);






// 4.  Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.
for ( let i = 0; i < 10; console.log(i), i++ ) {

}




//5. * Нарисовать пирамиду с 20 рядами с помощью console.log.

let res = "";
for ( let i = 1; i <= 20; i++ ) {

    console.log( res += "X" );

}

