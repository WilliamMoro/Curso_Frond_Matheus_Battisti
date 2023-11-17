// 1 -Variáveis
let nome = "William";

console.log(nome);

nome = "William Moro";

console.log(nome);

const idade = 31;

console.log(idade);

console.log(typeof nome, typeof idade);

// 2 - mais sobre variáveis
let a = 10, 
    b = 20, 
    c = 30;

    console.log(a, b, c);

let _teste = "ok";

let $teste = "ok";

console.log(_teste, $teste);

// 3 - prompt 
// const age = prompt("Digite a sua idade: ");

// console.log(`Você tem ${age} anos.`);

// 4 - Alert

//alert(`Você tem ${age} anos de idade`);

// 5 - Funções do JS: Math.x
console.log(Math.max(5, 8, 10, 1));

console.log(Math.floor(5.14));

console.log(Math.ceil(5.14));

// 6 - console
console.log("Teste!");

console.error("erro!");

console.warn("aviso!");

// 7 - if
const m = 10;

if (m > 5){
    console.log(`${m} é maior que 5!`)
}

const user = "João";

if(user === "João"){
    console.log(`Olá João`);
}

if(user === "maria"){
    console.log('Olá Maria!');
}

// 8 - else
const loggedIn = false;

if(loggedIn) {
    console.log("Está autenticado!");
} else {
    console.log("Não está autenticado");
}

const q = 10;
const w = 15;

if(q > 5 && w >20) {
    console.log("Numeros mais altos");
} else {
    console.log("Os números não são mais altos");
}

// 9 - else if
if(1 > 2) {
    console.log("Teste");
} else if (2 > 3) {
    console.log("Teste 2");
} else if (5 > 1) {
    console.log("Agora sim!");
}

const userName = "Wililam";
const userAge = 21;

if(userName === 'José') {
    console.log("Bem vindo José!");
} else if(userName === "Wililam" && userAge === 21) {
    console.log("Olá William, você tem 21 anos");
} else {
    console.log("Nenhuma condição aceita");
}

// 10 - while
let p = 0;

while(p < 5){
    console.log(`Repetindo ${p}`)
    p++;
}

// 11 - do while
let o = 10;

do {
    console.log(`Valor de o: ${o}`);
    o--;
} while (o > 1);

// 12 - for
for(let t = 0; t < 10; t++) {
    console.log("Repetindo algo...");
}

let r = 0;

for(r; r > 0; r = r -1){
    console.log(`O r está diminuindo ${r}`);
}

// 14 - break
for(let g = 20; g > 10; g--) {
    console.log(`O valor de g é: ${g}`);

    if(g === 15){
        console.log("O g é 15!");
        break;
    }
}

// 15 - continue
for(let s = 0; s < 10; s++){
    //operador resto = %;
    if(s % 2 === 0) {
        console.log("Numero par!")
        continue
    }
    console.log(s);
}

// 16 - switch - 'O break é necessário para não ir para as próximas condições já tendo encontrado a certa'
const job = "Advogado";

switch(job){
    case "Programador":
        console.log("Você é um programador")
        break;
    case "Advogado":
        console.log("Você é um advogado")
        break;
    case "Engenheiro":
        console.log("Você é um engenheiro")
        break;
    default:
        console.log("Não encontramos sua profissão");
}

