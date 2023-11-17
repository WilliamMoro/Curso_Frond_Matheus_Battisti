// 1 - Arrays
const list = [1, 2, 3, 4, 5];

console.log(list);

console.log(typeof list);

const itens = ["william", `${21} anos`, "Casado", 1 + ' filhos'];

console.log(itens);

// 2 - Propriedades
const arr = ["a", "b", "c", "d", "d"];

console.log(arr[0]);

console.log(arr[2]);

console.log(arr[10]);


// 3 - Propriedades
const numbers = [5, 3, 7]

console.log(numbers);

console.log(numbers.length);

console.log(numbers['length']);

const myName = "William";

console.log(myName.length)

// 4 - Métodos
const otherNumbers = [1, 2, 3]

const allnumbers = numbers.concat(otherNumbers);

console.log(allnumbers);

const text = 'larissa';

console.log(text.toUpperCase());

console.log(typeof text.toUpperCase);

console.log(text.indexOf('r'));

// 5 - Objetos - Objetos Literals
const person = {
    name: "William",
    age: 21,
    job: 'Programador',
    status: "married"
};

console.log(person);

console.log(person.name);

console.log(person.name.length);

console.log(typeof person);

// 6 - criando e deletando propriedades
const car = {
    engine: 2.0,
    brand: 'VW',
    model: 'Tiguan',
    km: 20000
};

console.log(car);

car.doors = 4;

console.log(car);

delete car.km;

console.log(car);

// 7 - Mais sobre objetos
const obj = {
    a: "teste",
    b: true
}

console.log(obj instanceof Object);

const obj2 = {
    c: []
}

Object.assign(obj2, obj);

console.log(obj2);

// 8 - Conhecendo melhor os objetos
console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

console.log(Object.entries(car));

// 9 - Mutação
const a = {
    name: "William"
}

const b = a;

console.log(a);
console.log(b);

console.log(a === b);

a.age = 31;

console.log(a);
console.log(b);

delete b.age;

console.log(a);
console.log(b);

// 10 - Loop em array
const users = ["Wiliam", "Larissa", "Cecília", "Lucca"] 
    for (let i = 0; i < users.length; i++) {
        console.log(`Listando o usuário: ${users[i]}`);
    }


// 11 - Push e pop
const arr2 = ["a", "b", "c"]

arr2.push("d");
console.log(arr2);

arr2.pop();
console.log(arr2);

const itemRemovido = arr2.pop();

console.log(itemRemovido);

console.log(arr2)

arr2.push("z", "x", "y");

console.log(arr2);

// 12 - shift e unshift

const letters = ["a", "b", "c"];
console.log(letters);

const letterRemovi = letters.shift();
console.log(letterRemovi);

letters.unshift("k", "l", "m");
console.log(letters);

// 13 - indexOf e lastIndexOf
const  myElements = ["Morango", "Maçã", "Abacate", "Pêra", "Abacate"];

console.log(myElements.indexOf("Maçã"));
console.log(myElements.indexOf("Abacate"));

console.log(myElements[2]);
console.log(myElements[myElements.indexOf("Abacate")]);

console.log(myElements[myElements.lastIndexOf("Abacate")]);

console.log(myElements[myElements.lastIndexOf("Mamão")]);

// 14 - Slice
const testeSlice = ["a", "b", "c", "d", "e", "f", "g"];

const subArray = testeSlice.slice(2, 4);

console.log(subArray);

console.log(testeSlice);

const subArray2 = testeSlice.slice(2, 4 + 1);

console.log(subArray2);

const subArray4 = testeSlice.slice(2);

console.log(subArray4);

// 15 - forEach
const nums = [1, 2, 3, 4, 5];

nums.forEach((numero) => {
    console.log(`O número é ${numero}`);
});

const posts = [
    {title: "Primeiro post", category: "PHP"},
    {title: "Segundo post", category: "JavaScript"},
    {title: "Terceiro post", category: "Python"}
];

posts.forEach((post) => { //geralmente o array vem com nome no plural e no forEach colocamos no singular
    console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`);
});

// 16 - includes
const brands = ["BMW", 'VW', 'FIAT'];

console.log(brands.includes('FIAT'));

console.log(brands.includes('KIA'));

if (brands.includes("BMW")){
    console.log("Há carros da marca BMW!");
}

// 17 - reverse
const reverseTest = [1, 2, 3, 4, 5];

reverseTest.reverse();

console.log(reverseTest); //pode ser usado para filtrar do mais caro para o mais barato

// 18 - trim
const trimTest = "   Testando \n  ";

console.log(trimTest);

console.log(trimTest.trim());

console.log(trimTest.length);

console.log(trimTest.trim().length);

// 19 - padStart
const testePadStart = "1";

const newNumber = testePadStart.padStart(4, "0");

console.log(testePadStart);

console.log(newNumber);

const testePadEnd = newNumber.padEnd(10, "0");

console.log(testePadEnd);

// 20 - split
const frase = "O rato roeu a roupa do rei de Roma";

const arrayDaFrase = frase.split(" ");

console.log(arrayDaFrase); //agora posso usar loop, pode utilizar métodos, identificar um padrão (filtro), etc

// 21 - join
const fraseDeNovo = arrayDaFrase.join(" ");

console.log(fraseDeNovo);

const itensParaComprar = ["Mouse", "Teclado", "Monitor"];

const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}.`;

console.log(fraseDeCompra);

const itensSelect = ["Placa de vídeo", "Monitor '29pl'", "cabo HDMI", "Carregador por indução"];

const itensSelectBuy = `Confirme a lista de produtos selecionados: ${itensSelect.join(", ")}.`;

console.log(itensSelectBuy);

// 22 - repeat
const palavra = "Testando";

console.log(palavra.repeat(5));

// 23 - Rest Operator (...)

const somaInfinita = (...args) => {
    let total = 0;

    for(let i = 0; i < args.length; i++){
        total += args[i];
    }

    return total;
}

console.log(somaInfinita(1, 2, 3));

console.log(somaInfinita(1, 5, 8, 7));

// 24 - for of
const somaInfinita2 = (...args) => {

    let total = 0;

    for(num of args) {
        total += num
    }

    return total;
}

console.log(somaInfinita2(1, 2, 4));

console.log(somaInfinita2(1, 5, 8, 22, 53));

// 25 - destructuring em objetos
const userDetails = {
    firstName: "William",
    lastName: "Juan",
    job: 'Developer',
    status: "Married"
};

const { firstName, lastName, job, status } = userDetails;

console.log(firstName, lastName, job, status);

// renomear variaveis
const { firstName: primeiroNome } = userDetails;

console.log(firstName);
console.log(primeiroNome);

const { lastName: ultimoNome } = userDetails

console.log(lastName);
console.log(ultimoNome);

// 26 - Destructuring em arrays
const myList = ["Avião", "Submarino", "Trem"]; //ele só vai desestruturar aquilo que está dentro a lista da esquerda para direita, se tiver mais um indice e não tiver mais uma variável, será só no total de variáveis

const [veiculoA, veiculoB, veiculoC] = myList;

console.log(veiculoA, veiculoB, veiculoC);


// 27 - JSON
const myJson = '{"name": "William", "age": 31, "Skills": ["PHP", "JavaScript", "Phyton"]}';

console.log(myJson);

console.log(typeof myJson);

// 28 - JSON para objeto e objeto para JSON

const myObject = JSON.parse(myJson);

console.log(myObject);

console.log(myObject.name);

console.log(typeof myObject.age);

// json invalido
const badJson = '{"name": William, "age": 21}'

// const myBadObject = JSON.parse(badJson);
myObject.isOpenToWork = true;

console.log(myObject);

const myNewJson = JSON.stringify(myObject);

console.log(myNewJson);
console.log(typeof myNewJson);