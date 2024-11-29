let secao = document.querySelector(".secao_nova");

function enviar() {
    let input = document.querySelector(".input");
    let escopo = document.createElement("div")
    let texto = document.createElement("p");
    texto.innerText = input.value;
    escopo.append(texto);
    secao.append(escopo);
}

function limpar() {
    secao.innerHTML = "";
}

function editar() {
    var novo = document.secao_nova.value;
    document.querySelector(".secao_nova").innerHTML = novo;
}

function adicionar() {
    var novo = document.secao_nova.value;
    document.querySelector(".secao_nova").innerHTML += "\\r\\n" + novo;
}

let botao_enviar = document.querySelector("#botao_enviar");

botao_enviar.addEventListener("click", () => {
    enviar()
});

let botao_limpar = document.querySelector("#botao_limpar");

botao_limpar.addEventListener("click", () => {
    limpar()
});