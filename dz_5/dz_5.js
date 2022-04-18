/*
1. Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги.
Доска должна быть верно разлинована на черные и белые ячейки. Строки должны
нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.
*/



function my_initiation() {
    

    let new_el = document.createElement("div");
    rowBlackFirst = "";
    rowWhiteFirst = "";

    for(let i = 1; i < 9; i++) {
        if (i % 2 == 0) {
            rowBlackFirst += "<td id = 'white_square'></td>";
        } else {
            rowBlackFirst += "<td id = 'black_square'></td>";
        }
        
    }

    for(let i = 1; i < 9; i++) {
        if (i % 2 != 0) {
            rowWhiteFirst += "<td id = 'white_square'></td>";
        } else {
            rowWhiteFirst += "<td id = 'black_square'></td>";
        }
    }
    
    col_count = "<tr><td></td><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td><td>G</td><td>H</td></tr>";
    result = "<table>";
    result += col_count;
    for(let i = 1; i < 9; i++) {
        
        if (i % 2 != 0) {
            result += `<tr><td>${i}</td> ${rowBlackFirst} <td>${i}</td></tr>`;

        } else {
            result += `<tr><td>${i}</td> ${rowWhiteFirst} <td>${i}</td></tr>`;
        }
        
    }
    result += col_count;
    result += "</table>";
    new_el.innerHTML = result;
    
    let main_table = document.getElementById("main");
    main_table.appendChild(new_el);
}


// функция для удаления доски с сайта
function delete_checkboard() {
    document.getElementById("main").innerHTML = "";
}




/*
2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в
HTML-структуре. Там должен быть только div, в который будет вставляться корзина,
сгенерированная на базе JS:
    a. Пустая корзина должна выводить строку «Корзина пуста»;
    b. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
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


function basketManager( basket ) {
    if ( basket.length > 0){
        let price = 0;
        for ( item in basket ) {
            price = price + basket[item].price;
        }
        document.getElementById("basket").innerHTML = `В корзине ${basket.length} товаров на сумму ${price} рублей`;
    } else {
        document.getElementById("basket").innerHTML = "Корзина пустая";
    }
    
    
}


basketManager( basket );


/*
Сделать так, чтобы товары в каталоге выводились при помощи JS:
    a. Создать массив товаров (сущность Product);
    b. При загрузке страницы на базе данного массива генерировать вывод из него.
        HTML-код должен содержать только div id=”catalog” без вложенного кода. Весь вид
        каталога генерируется JS.
*/

