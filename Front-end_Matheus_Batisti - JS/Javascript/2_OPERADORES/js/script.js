// 1 -NUMBER
console.log(typeof 2);
console.log(typeof 1.65);
console.log(typeof -127);

// 2 - Operações aritiméticas
console.log(9 - 3);
console.log(10 - 5);
console.log(10 / 2);
console.log(2 * 53);

console.log(5 + 4 * 2);

// 3 - Special numbers
console.log(typeof Infinity);

console.log(typeof -Infinity);

console.log( 12 * 'abc');

console.log(typeof NaN);

// 4 - Strings
console.log(typeof "Um texto");
console.log(`Mais um texto`);
console.log('13');

console.log("Um texto");
console.log(typeof `Mais um texto`);
console.log(typeof '13');

console.log("Quebrando texto em \nduas linhas");

console.log("Quebrando texto em \tduas linhas");

// 6 - Concatenação
console.log("Oi, " + "tudo" + " bem?");

console.log(`Testando ` + `com a ` + `crase`);

// 7 - Template Strings
console.log(`A soma de 2 + 2 é: ${2 + 2}`);

console.log(`Podemos executar qualquer coisa aqui ${console.log("teste")}`);

// 8 - Boolean
console.log( typeof true);

console.log(5 > 20);

console.log(30 > 10);

// 9 - Comparações
console.log(5 <= 5);

console.log(5 < 5);

console.log(10 === 10);

console.log(10 === 9);

console.log(10 != 9);

// 10 - Idêntico
console.log(9 == "9");

console.log(9 + "9");

console.log(9 === 9);

console.log(9 != "9");

console.log(9 !== "9");

// 11 - Operadores lógicos
console.log(true && true);

console.log(true && false);

console.log(5 > 2 && 2 < 10);

console.log(5 > 2 && "William" === 1);

console.log(5 > 2 || "William" === 1);

console.log( 5 < 2 || 5 > 100);

console.log(!true);

console.log(!5 > 2);

// 12 - Empty Values
console.log(typeof null, typeof undefined);

console.log(null === undefined);

console.log(null == undefined);

console.log(null == false);

console.log(undefined == false);

// 13 - Mudança de tipos
console.log(5 * null);

console.log("teste" * "o");

console.log("10" + 1);

console.log("10" - 1)