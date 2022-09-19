'use strict';
const highlight = 'padding: 0 20px; color: darkblue'

console.log(`%cДоп. задание`, highlight)
const myWeight = 91n;
console.log (`myWeight ${typeof myWeight} = ${myWeight}`)
const speedLight = BigInt(3e8);
console.log (`speedLight ${typeof speedLight} = ${speedLight}`)
const bodyEnergy = BigInt(myWeight * speedLight**2n);
// const bodyEnergy = 91 * (Math.pow(300000000, 2));
console.log(`Считаем по формуле: (myWeight * speedLight**2n)`);
const total = `Энергия тела равна ${bodyEnergy} джоулей`;
console.log(total);
console.log(total.concat(' !!!', ' !@#'));
console.log('total.length (str length)', total.length);
console.log(total.toUpperCase());
console.log(total.toLowerCase());
console.log('letter index in string total.charAt(0) ', total.charAt(0),);
console.log('letter index in string total[0] ', total[0],);
console.log('total.substring(7), total.substring(7, 12)', total.substring(7), total.substring(7, 12));
console.log('total.slice(-5), total.slice(7, 12)', total.slice(-5), total.slice(7, 12));
console.log(`total.indexOf('Э')`, total.indexOf('Э'));
console.log(`total.indexOf('тела')`, total.indexOf('тела'));
console.log(`total.includes('тела')`, total.includes('тела'));
console.log(`total.replace('тела')`, total.replace('тела', 'объекта'));
console.log(`total.split(' ')`, total.split(' '));
console.log(`(убрать лишние пробелы) total.trim()`, total.trim());
console.log(`total.padStart()`, total.padStart(48, '#'));
console.log(`total.padEnd()`, total.padEnd(55, 'Y'));

console.log('Math.floor(5.99): ', Math.floor(5.99));
console.log('Math.ceil(5.99): ', Math.ceil(5.99));
console.log('Math.round(5.6): ', Math.round(5.6));
console.log('Math.round(5.4): ', Math.round(5.4));
console.log('Math.trunc(5.99): ', Math.trunc(5.99));
console.log('Math.trunc(5.11): ', Math.trunc(5.11));
const max = Math.max(14,19,12,44,25);
const min = Math.min(14,19,12,44,25);
console.log('Math.max: ', max);
console.log('Math.min: ', min);
const rnd = Math.random();
console.log('Math.random: (0-1) ', rnd);
const rndR = Math.random() * 10;
console.log('Math.random: (0-1) ', Math.round(rndR));

console.log ('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random');
