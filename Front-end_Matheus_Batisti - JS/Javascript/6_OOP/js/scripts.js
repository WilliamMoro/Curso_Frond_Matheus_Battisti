// 1 - métodos
const animal = {
    nome: "Bob", //propriedade o que podemos acessar (valores que podemos ler e alterar)
    latir: function() { //metodos são funções que podemos executar ao longo do programa
        console.log("Au Au")
    }
}

console.log(animal.nome);

animal.latir(); //usa-se . para acessar a propriedade do objeto () para chamar a função. Como se executasse uma function dentro de um object

// 2 - this (consigo trabalhar com o objeto sem a necesidade de criar variavel 'este objeto') - Aprofundando em métodos
const pessoa = {

    nome: "William",

    getNome: function() {
        return this.nome;
    },

    setNome: function(novoNome) {
        this.nome = novoNome
    }

};

console.log(pessoa.nome)

console.log(pessoa.getNome());

pessoa.setNome("Joaquim");

console.log(pessoa.getNome());

// 3 - Prototype
const text = "asd";

console.log(Object.getPrototypeOf(text));

const bool = true;

console.log(Object.getPrototypeOf(bool));

const arr = [];

console.log(arr.length);

console.log(Object.getPrototypeOf(arr));

// 4 - Mais sibre Prototype
const myObject = {
    a: "b",
};

console.log(Object.getPrototypeOf(myObject));

console.log(Object.getPrototypeOf(myObject) === Object.prototype);

const mySecondObject = Object.create(myObject);

console.log(mySecondObject);

console.log(mySecondObject.a);

console.log(Object.getPrototypeOf(mySecondObject) === myObject);

// 5 - Classes básicas
const cachorro = {
    raca: null,
    patas: 4,
};

const pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor Alemão";

console.log(pastorAlemao);

console.log(pastorAlemao.patas);

const bulldog = Object.create(cachorro);

bulldog.raca = ("Bulldog");

console.log(bulldog);

// console.log(cachorro);

// 6 - função como classe - função construtora
function criarCachorro(nome, raca) {
    const cachorro = Object.create({});

    cachorro.nome = nome;
    cachorro.raca = raca;

    return cachorro;
}

const zara = criarCachorro("Zara", "Dochround");

console.log(zara);

const nu = criarCachorro("Nutella", "Shitishu");

console.log(nu);

console.log(Object.getPrototypeOf(nu));

// 7 - funções como classe
function Cachorro(nome, raca) {
    this.nome = nome;
    this.raca = raca;
}

const husky = new Cachorro("Ozzy", "Husky");

console.log(husky);

const zaqueu = new Cachorro("Zaqueu", "Pitbull");

console.log(zaqueu);
console.log(husky, zaqueu);

// 8 - métodos na função constutora
Cachorro.prototype.uivar = function() {
    console.log("Auuuuu!")
};

console.log(Cachorro.prototype);

husky.uivar();

// 9 - Classes ES6
class CachorroClasse {
    constructor(nome, raca) {
        this.nome = nome;
        this.raca = raca
    }
}

const luna = new CachorroClasse ("Luna", "Vira-lata");

console.log(luna);

console.log(Object.getPrototypeOf(luna));

// 10 - mais sobre classes
class Caminhao {
    constructor(eixos, cor) {
        this.eixos = eixos;
        this.cor = cor;
    }

    descreverCaminhao() {
        console.log(`Este caminhão tem ${this.eixos} eixos é da cor ${this.cor}`);
    }
}

const scania = new Caminhao(6, "Vermelha");

console.log(scania);

scania.descreverCaminhao();

Caminhao.motor = 4

const c2 = new Caminhao(4, "Preto");

console.log(c2);

console.log(c2.motor);

Caminhao.prototype.motor = 4.5;

const c3 = new Caminhao(6, "Azul");

console.log(c3.motor);

// 11 - override
class Humano {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
};

const william = new Humano("William", 21);

console.log(william);

Humano.prototype.idade = "Não definida";

console.log(william.idade)

console.log(Humano.prototype.idade);

// 12 - Symbol
class Aviao {
    constructor(marca, turbinas) {
        this.marca = marca;
        this.turbinas = turbinas;
    }
}

const asas = Symbol();
const pilotos = Symbol();

Aviao.prototype[pilotos] = 3;

Aviao.prototype[asas] = 2;

const boeing = new Aviao("Boeing", 10);

console.log(boeing);

console.log(boeing[asas]);

console.log(boeing[pilotos]);

// 13 - getter e setter
class Post {
    constructor(titulo, descricao, tags) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.tags = tags;
    }

    get exibirTitulo() {
        return `Você está lendo: ${this.titulo}`;
    }

    set adicionarTags(tags) {
        const tagsArray = tags.split(", ")
        this.tags = tagsArray;
    }
}

const myPost = new Post("Algum post", "É um post sobre programação");

console.log(myPost);

console.log(myPost.exibirTitulo);

myPost.adicionarTags = "pogramação, javascript, PHP";

console.log(myPost);

// 14 - Herança
class Mamifero {
    constructor(patas) {
        this.patas = patas;
    }
};

class Lobo extends Mamifero {
    constructor(patas, nome) {
        super(patas, patas);
        this.nome = nome;
    };
}

const wolf = new Lobo(4, "Wolf");

console.log(wolf);

console.log(wolf.patas);

// 15 - instanceof
console.log(wolf instanceof Lobo);

console.log(Lobo instanceof Mamifero);

console.log(new Lobo(4, 'teste') instanceof Mamifero);

console.log(new Post('a', 'b') instanceof Lobo);

