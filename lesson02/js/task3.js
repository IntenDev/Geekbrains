'use strict';
let a = Number(prompt("Введите число"));
let b = Number(prompt("Введите число"));
if (a >=0 && b >=0){
    alert(a-b);
} else if (a < 0 && b < 0){
    alert (a * b);
} else if (a < 0 || b <0){
    alert(a + b);
}




