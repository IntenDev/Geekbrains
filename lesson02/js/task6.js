'use strict';

let deposit = prompt('Введите сумму в рублях');

/**
 * Функция получает на вход строку и возвращает её последний символ
 * @param a {string} аргумент
 * @returns {any[]} возвращает последний символ
 */
function getLastCharacter(a){
    let b = a.slice(-1);
    return b;
}

/**
 * Функция возвращает слово в нужном падеже в зависимости от входящего условия
 * @param a аргумент
 * @returns {string} возвращает результат
 */
function cases(a) {
    /*switch(getLastCharacter(a)){
        case '1':
            return "рубль";
        case '2':
        case '3':
        case '4':
            return "рубля";
        default:
            return "рублей"
    }*/
    if(getLastCharacter(a) == 1 && deposit !== 11){
        return "рубль";
    } else if (getLastCharacter(a) == 2 || 3 || 4 ){
        return "рубля";
    } else if(getLastCharacter(a) >= 5 && deposit.length >= 1){
        return "рублей";
    }else {
        return "рублей";
    }
}
alert("Ваша сумма в " + deposit + " " + cases(deposit) + " успешно зачислена");
