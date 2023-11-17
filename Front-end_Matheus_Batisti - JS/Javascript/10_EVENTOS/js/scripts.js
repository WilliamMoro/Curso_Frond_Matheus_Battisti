// 1 - adicionando eventos
const btn = document.querySelector("#my-button");

btn.addEventListener("click", function(){
    console.log("Clicou no botão!");
})

// 2 - removendo eventos
const secondBtn = document.querySelector("#btn");

function imprimirMensagem() { //para conseguir remover com sucesso o evento, preciso nomear a função para saber qual será excluída
    console.log("Teste");
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn");

thirdBtn.addEventListener("click", () => { //aqui posso usar função não nominal porquê será usado exclusivamente aqui, pare remover o evento
    console.log("Evento removido");
    secondBtn.removeEventListener("click", imprimirMensagem); //aqui eu passo o envendo de quando clico no terceito botão, a função de evendo do segundo botão como removeListenner
});

// 3 - argumento do evento (event/e)
const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.offsetX);
    console.log(event.pointerType);
    console.log(event.target);
});

// 4 - propagação
const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn")

containerBtn.addEventListener("click", () => {
    console.log("Evento 1");
});

btnInsideContainer.addEventListener("click", (e) => { // quando tenho essa situação é necessário usar o argumento (event) + e.stopPropagation
    e.stopPropagation();
    console.log("Evento 2");
});

// 5 - Açõe default (preventDefault) - removendo evento padrão
const a = document.querySelector("a")

a.addEventListener("click", (e) => {
    e.preventDefault();

    console.log("Não alterou a página");
})

// 6 - eventos de tecla
document.addEventListener("keyup", (e) => {
    console.log(`Soltou a tecla ${e.key}`);
});

document.addEventListener("keydown", (e) => {
    console.log(`Pressionou a tecla ${e.key}`);
});

// 7 - eventos de mouse (mouseDown, mouseUp, dblClick)
const mouse = document.querySelector("#mouse");

mouse.addEventListener("mousedown", () => {
    console.log("Pressionou o botão");
});

mouse.addEventListener("mouseup", () => {
    console.log("Soltou o botão");
});

mouse.addEventListener("dblclick", () => {
    console.log("Cliou o botão 2x");
});

// 8 - Movimento do mouse (mousemove)
// document.addEventListener("mousemove", (e) => {
//     console.log(`No eixo x: ${e.x}`);
//     console.log(`No eixo y: ${e.y}`);
// });

// 9 - eventos por scroll (scroll)
window.addEventListener("scroll", (e) => { //pode ser usado para surgir imagens
    if(window.pageYOffset > 200) {
        console.log("Passamos de 200px");
    }
});

// 10 - evento de foco (focus/blur)
const input = document.querySelector("#my-input");

input.addEventListener("focus", (e) => {
    console.log("Entrou no input");
});

input.addEventListener("blur", (e) => { //posso usar como validação, quando o cliente sair do input eu valido o que foi digitado
    console.log("Saiu do input");
});

// 11 - carregamentos de página (load / beforeunload) beforeunload - prática ruim
window.addEventListener("load", () => {
    console.log("A página carregou!");
});

// 12 - tecnica de debounce - faz o evento ser disparado menos vezes
const debounce = (f, delay) => {

    let timeout

    return(...arguments) => {
        if(timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            f.apply(arguments) //como se estivesse programando a execução de uma função
        }, delay);
    };
};

window.addEventListener("mousemove", debounce(() => {
    console.log("executando a cada 400ms");
}, 400)
); // ele vai proporcionar que limpe a memória do usuários, garantindo o intervalo na execução do envento
