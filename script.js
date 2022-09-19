'use strict';

const productName = prompt ('Введите наименование товара', ['Samsung S20-FE']);
let productCount = prompt ('Введите количество товара', [2]);
console.log ('productCount is number?', typeof productCount);
if (typeof productCount !== Number) {productCount = Number(productCount)}
console.log ('And now productCount is number?', typeof productCount);
const productCategory = prompt ('Введите категорию товара', ['Смартфоны']);
let productPrice = prompt ('Введите стоимость товара', [45000]);
console.log ('productPrice is number?', typeof productPrice);
if (typeof productPrice !== Number) {productPrice = Number(productPrice)}
console.log ('And now productPrice is number?', typeof productPrice);
const totallPrice = productPrice * productCount;


console.log(`Имя товара: ${productName}`);
console.log(`Категория: ${productCategory}`);
console.log(`Количество товара: ${productCount}`);
console.log (`Стоимость одного товара ${productPrice}`)
console.log(`Итого: ${totallPrice} руб.`);
console.log(`На складе ${productCount} единицы товара ${productName} на сумму ${totallPrice} деревянных`)


