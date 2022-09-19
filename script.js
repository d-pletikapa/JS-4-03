'use strict';
const rainbow = 'padding: 0 20px; color: darkgrey'

const productName = prompt ('Введите наименование товара', ['Samsung S20-FE']);
let productCount = prompt ('Введите количество товара', [2]);

console.log ('productCount is number?', typeof productCount);
console.log (`productCount Number.isNaN(${productCount})`, Number.isNaN(productCount));
console.log (`productCount Number.isFinite(${productCount})`, Number.isFinite(productCount));
console.log (`productCount Number.isInteger(${productCount})`, Number.isInteger(productCount));

if (typeof productCount !== Number) {productCount = Number(productCount)}

console.log ('And now productCount is number?', typeof productCount);
console.log (`productCount Number.isNaN(${productCount})`, Number.isNaN(productCount));
console.log (`productCount Number.isFinite(${productCount})`, Number.isFinite(productCount));
console.log (`productCount Number.isInteger(${productCount})`, Number.isInteger(productCount));

const productCategory = prompt ('Введите категорию товара', ['Смартфоны']);
let productPrice = prompt ('Введите стоимость товара', [45000]);

console.log ('%cproductPrice is number?', rainbow, typeof productPrice);
console.log (`%cproductPrice Number.isNaN(${productPrice})`, rainbow, Number.isNaN(productPrice));
console.log (`%cproductPrice Number.isFinite(${productPrice})`, rainbow, Number.isFinite(productPrice));
console.log (`%cproductPrice Number.isInteger(${productPrice})`, rainbow, Number.isInteger(productPrice));

if (typeof productPrice !== Number) {productPrice = +productPrice}

console.log ('%cAnd now productPrice is number?', rainbow, typeof productPrice);
console.log (`%cproductPrice Number.isNaN(${productPrice})`, rainbow, Number.isNaN(productPrice));
console.log (`%cproductPrice Number.isFinite(${productPrice})`, rainbow, Number.isFinite(productPrice));
console.log (`%cproductPrice Number.isInteger(${productPrice})`, rainbow, Number.isInteger(productPrice));

const totallPrice = productPrice * productCount;


console.log(`Имя товара: ${productName}`);
console.log(`Категория: ${productCategory}`);
console.log(`Количество товара: ${productCount}`);
console.log (`Стоимость одного товара ${productPrice}`)
console.log(`Итого: ${totallPrice} руб.`);
console.log(`На складе ${productCount} единицы товара ${productName} на сумму ${totallPrice} деревянных`)


