'use strict';

/**
 * Функция получает два числа и складывает их.
 * @param a {number} аргумент 1
 * @param b {number} аргумент 2
 * @returns {number} выводит ответ
 */
function getSum(a, b) {
    return a + b
}
/**
 * Функция получает два числа и вычитает одно из другого.
 * @param a {number} аргумент 1
 * @param b {number} аргумент 2
 * @returns {number} выводит ответ
 */
function getDifference(a, b) {
    return a - b
}
/**
 * Функция получает два числа и делит одно на другое.
 * @param a {number} аргумент 1
 * @param b {number} аргумент 2
 * @returns {number} выводит ответ
 */
function getDivision(a, b) {
    return a / b
}
/**
 * Функция получает два числа и умножает одно на другое.
 * @param a {number} аргумент 1
 * @param b {number} аргумент 2
 * @returns {number} выводит ответ
 */
function getMultiplication(a, b) {
    return a * b
}
/**
 * Функция получает два числа и производит математическую операцию над ними.
 * @param arg1 {number} аргумент 1
 * @param arg2 {number} аргумент 2
 * @param operation {string} Операция: +, -, /, *.
 * @returns {number} выводит ответ
 * @throws {Error} выводит ошибку если заданная операция не предусмотрена.
 */
function  mathOperation(arg1, arg2, operation) {
    switch(operation){
        case '+':
            return getSum(arg1, arg2);
        case '-':
            return getDifference(arg1, arg2);
        case '/':
            return getDivision(arg1, arg2);
        case '*' :
            return getMultiplication(arg1, arg2);
        default:
            throw new Error("Операция " + operation + " не предусмотрена")
    }
}
console.log(mathOperation(2, 3, "+"));
console.log(mathOperation(2, 3, "-"));
console.log(mathOperation(2, 3, "/"));
console.log(mathOperation(2, 3, "*"));
console.log(mathOperation(2, 3, "%"));

