//1. Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в
//градусах по Фаренгейту. Подсказка: расчет идет по формуле Tf = (9 / 5) * Tc + 32, где Tf —
//температура по Фаренгейту, Tc — по Цельсию

var tc = 30;
alert( (9 / 5) * tc + 32 );

//2. Объявить две переменные: admin и name. Записать в name строку "Василий"; Скопировать
//значение из name в admin. Вывести admin (должно вывестись «Василий»).

var admin
var name = 'Василий'
admin = name
console.log(admin)
console.log(name)


//3. * Чему будет равно JS-выражение 1000 + "108"?
console.log(1000 + "108") // строке 1000108


//4. * Самостоятельно разобраться с атрибутами тега script (async и defer)
/*  Async:
    -Это логический атрибут, указывающий браузеру, если возможно, загружать скрипт, указанный в атрибуте src, асинхронно.
    -Атрибут async не будет оказывать никакого эффекта, если атрибут src отсутствует.
    -Обычно браузеры загружают <script> синхронно, (т.е. async="false") во время разбора документа.

    Defer:
    -Это логический атрибут, указывающий браузеру, что скрипт должен выполняться после разбора документа, 
    но до события DOMContentLoaded (en-US).
    -Скрипты с атрибутом defer будут предотвращать запуск события DOMContentLoaded (en-US) до тех пор, 
    пока скрипт не загрузится полностью и не завершится его инициализация.
    -Скрипты с атрибутом defer будут выполняться в том порядке, в котором они появились при разборе документа.
*/ 