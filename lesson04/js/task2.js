'use strict';
function getNumber(num) {
    if (!Number.isInteger(num) || num < 0 || num > 999){
        console.log('Вы ввели число не из диапозона 0-999');
        return{};
    }
    return {
        hundreds: Math.floor(num / 100),
        tens: Math.floor(num / 10) % 10,
        units: num % 10,
    }
}
console.log(getNumber(123));
