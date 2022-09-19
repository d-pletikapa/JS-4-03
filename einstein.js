console.log(`Доп. задание`)
const myWeight = 91n;
console.log (`myWeight ${typeof myWeight} = ${myWeight}`)
const speedLight = BigInt(3e8);
console.log (`speedLight ${typeof speedLight} = ${speedLight}`)
const bodyEnergy = BigInt(myWeight * speedLight**2n);
console.log(`Считаем по формуле: (myWeight * speedLight**2n)`);
console.log(`Энергия тела равна ${bodyEnergy} джоулей`);